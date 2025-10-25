// supabase/functions/chat/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const message: string = (body?.message ?? "") as string;
    console.log("Chat function received:", message);

    const raw = String(message || "");
    const text = raw.toLowerCase();
    const normalized = text.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

    // Levenshtein distance for fuzzy matching
    function levenshtein(a: string, b: string) {
      if (!a.length) return b.length;
      if (!b.length) return a.length;
      const v0 = new Array(b.length + 1).fill(0);
      const v1 = new Array(b.length + 1).fill(0);
      for (let i = 0; i <= b.length; i++) v0[i] = i;
      for (let i = 0; i < a.length; i++) {
        v1[0] = i + 1;
        for (let j = 0; j < b.length; j++) {
          const cost = a[i] === b[j] ? 0 : 1;
          v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
        }
        for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
      }
      return v1[b.length];
    }

    function containsAny(variants: string[], fuzzyThreshold = 1): boolean {
      for (const v of variants) {
        if (normalized.includes(v)) return true;
      }
      if (fuzzyThreshold >= 0) {
        const tokens = normalized.split(" ").filter(Boolean);
        for (const v of variants) {
          const vTokens = v.split(" ").filter(Boolean);
          if (vTokens.length === 1) {
            for (const t of tokens) {
              const maxDist = Math.min(fuzzyThreshold, Math.max(1, Math.floor(v.length * 0.25)));
              if (levenshtein(t, vTokens[0]) <= maxDist) return true;
            }
          }
        }
      }
      return false;
    }

    // ======== KNOWLEDGE BASE ========
    const KB = {
      institution: {
        name: "International Plant Machinery Training and Technical Institute (IPMTTI)",
        motto: "Excellence in Quality and Standard",
        location: "Landless, Thika, off Garissa Road, Nairobi County",
        pobox: "P.O BOX 8059-01000, Thika",
        hours: "Monday–Saturday, 8:00 AM – 5:00 PM",
        phones: ["0725782912", "0727086893", "0723909804"],
        website: "https://ipmtti.co.ke/",
        facebook: "International Plant Machinery Technical Training Institute",
        instagram: "@ipmtti",
        accreditations: ["NTSA", "NITA", "KNEC", "CDACC", "Government of Kenya"]
      },
      payments: {
        mpesa: {
          business: "247247",
          format: "277222#ADM NO.",
          confirm: "0725-782912"
        },
        bank: {
          name: "Equity Bank",
          account: "155-027-722-3595",
          branch: "Supreme Thika",
          accountName: "International Plant Machinery Technical Training Institute"
        }
      },
      accommodation: {
        boarders: { monthly: 8280, includes: "food and accommodation" },
        dayScholars: { monthly: 2400, includes: "food only" }
      },
      plant: {
        name: "Plant Operator Course",
        accreditation: "NTSA",
        intakes: "Every Monday",
        machines: ["Forklift", "Excavator", "Motor Grader", "Backhoe Loader", "Wheel Loader", "Farm Tractor", "Motor Roller"],
        packages: {
          one: { duration: "1 Week", dayScholar: 32840, boarder: 34840, payment: "Full payment upfront" },
          three: { duration: "4 Weeks", dayScholar: 76500, boarder: 83800, payment: "Installments available" },
          six: { duration: "8 Weeks", dayScholar: 99480, boarder: 114200, payment: "Installments available" }
        },
        additional: 15000,
        requirements: ["Valid National ID/Passport", "2-3 passport photos", "e-citizen account", "valid driver's license (mandatory)"]
      },
      driving: {
        accreditation: "NTSA",
        intakes: "Every Monday",
        categories: {
          A2: { name: "Motorcycle", dayScholar: 10450, boarder: 17750, minAge: 18 },
          B2: { name: "Saloon Manual", dayScholar: 14000, boarder: 21300, minAge: 18 },
          C1: { name: "Light Truck", dayScholar: 17000, boarder: 24300, minAge: 22 },
          D1: { name: "PSV/Van", dayScholar: 15850, boarder: 23150, minAge: 22 }
        }
      }
    };

    // ======== INTELLIGENT RESPONSE GENERATOR ========
    
    // Greeting detection
    const greetings = ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "hola", "habari", "mambo"];
    if (greetings.some(g => normalized.startsWith(g) || normalized === g)) {
      return respond("Hello! 👋 Welcome to IPMTTI. I'm here to help you with information about our courses, fees, admissions, and more. What would you like to know?");
    }

    // Alive/bot check
    if (containsAny(["are you alive", "are you real", "are you a bot", "are you human"])) {
      return respond("Yes, I'm here and ready to help! 😊 I'm IPMTTI's virtual assistant. What can I help you with today?");
    }

    // Location queries
    if (containsAny(["where", "location", "address", "situated", "find you", "directions"])) {
      if (containsAny(["office", "offices", "school", "college", "institute", "campus", "located", "find"])) {
        return respond(`We're located at ${KB.institution.location}. Our office hours are ${KB.institution.hours}.\n\nNeed directions? You can find us off Garissa Road in Landless, Thika. Feel free to call us at ${KB.institution.phones[0]} if you need help finding us!`);
      }
    }

    // Contact queries
    if (containsAny(["contact", "phone", "call", "whatsapp", "reach", "talk to"])) {
      if (containsAny(["number", "phone", "call", "whatsapp"])) {
        return respond(`You can reach us at:\n📞 ${KB.institution.phones.join(" | ")}\n\nWe're available ${KB.institution.hours}. Feel free to call or WhatsApp!`);
      }
      return respond(`📞 Contact Information:\nPhone/WhatsApp: ${KB.institution.phones.join(" | ")}\nAddress: ${KB.institution.location}\nWebsite: ${KB.institution.website}\n\nOffice Hours: ${KB.institution.hours}`);
    }

    // Hours/Schedule
    if (containsAny(["hours", "open", "close", "when", "schedule", "time"])) {
      if (containsAny(["office", "open", "close", "working"])) {
        return respond(`Our office hours are ${KB.institution.hours}. Come visit us anytime during these hours!`);
      }
    }

    // Payment queries
    if (containsAny(["pay", "payment", "mpesa", "bank", "how to pay", "paybill"])) {
      if (containsAny(["mpesa", "m-pesa"])) {
        return respond(`💳 MPESA Payment:\nBusiness No: ${KB.payments.mpesa.business}\nAccount Format: ${KB.payments.mpesa.format}\n\nAfter payment, send confirmation to ${KB.payments.mpesa.confirm}.`);
      }
      if (containsAny(["bank", "equity"])) {
        return respond(`🏦 Bank Payment:\nBank: ${KB.payments.bank.name}\nAccount No: ${KB.payments.bank.account}\nBranch: ${KB.payments.bank.branch}\nAccount Name: ${KB.payments.bank.accountName}`);
      }
      return respond(`We accept payments via:\n\n💳 MPESA:\nBusiness No: ${KB.payments.mpesa.business}\nAccount: ${KB.payments.mpesa.format}\n\n🏦 Bank Transfer:\n${KB.payments.bank.name} - Acc: ${KB.payments.bank.account}\n\nAfter payment, send confirmation to ${KB.payments.mpesa.confirm}.`);
    }

    // Cost/Price queries
    if (containsAny(["cost", "price", "how much", "fees", "fee", "charge"])) {
      if (containsAny(["plant", "plant operator", "heavy machinery", "excavator", "forklift"])) {
        return respond(`🔧 Plant Operator Course Fees:\n\n📦 One Machine (1 Week):\nDay Scholar: Ksh ${KB.plant.packages.one.dayScholar.toLocaleString()}\nBoarder: Ksh ${KB.plant.packages.one.boarder.toLocaleString()}\n*Full payment required upfront*\n\n📦 Three Machines (4 Weeks):\nDay Scholar: Ksh ${KB.plant.packages.three.dayScholar.toLocaleString()}\nBoarder: Ksh ${KB.plant.packages.three.boarder.toLocaleString()}\n*Installments available*\n\n📦 Six Machines (8 Weeks):\nDay Scholar: Ksh ${KB.plant.packages.six.dayScholar.toLocaleString()}\nBoarder: Ksh ${KB.plant.packages.six.boarder.toLocaleString()}\n*Installments available*\n\nAdditional machine: Ksh ${KB.plant.additional.toLocaleString()} each`);
      }
      if (containsAny(["driving", "license", "b2", "a2"])) {
        const cats = KB.driving.categories;
        return respond(`🚗 Driving School Fees:\n\n${Object.entries(cats).map(([code, info]) => 
          `${code} (${info.name}):\nDay Scholar: Ksh ${info.dayScholar.toLocaleString()} | Boarder: Ksh ${info.boarder.toLocaleString()}\nMin Age: ${info.minAge} years`
        ).join('\n\n')}\n\nIntakes start every Monday!`);
      }
      if (containsAny(["accommodation", "boarding", "hostel", "food"])) {
        return respond(`🏠 Accommodation Fees (2025):\n\nBoarders: Ksh ${KB.accommodation.boarders.monthly.toLocaleString()}/month (${KB.accommodation.boarders.includes})\nDay Scholars: Ksh ${KB.accommodation.dayScholars.monthly.toLocaleString()}/month (${KB.accommodation.dayScholars.includes})\n\nHostels available for male and female students.`);
      }
      return respond(`I can help you with fees! Which course are you interested in?\n\n• Plant Operator Course\n• Driving School\n• Fashion & Design\n• ICT Courses\n• Engineering Courses\n\nJust let me know which one!`);
    }

    // Plant Operator queries
    if (containsAny(["plant", "plant operator", "heavy machinery", "excavator", "forklift", "grader", "loader", "tractor"])) {
      if (containsAny(["what", "about", "tell", "info", "details"])) {
        return respond(`🔧 Plant Operator Course (NTSA Accredited)\n\nLearn to operate: ${KB.plant.machines.join(', ')}\n\n📅 Intakes: ${KB.plant.intakes}\n\n💰 Packages:\n• 1 Machine (1 Week): Ksh ${KB.plant.packages.one.dayScholar.toLocaleString()}\n• 3 Machines (4 Weeks): Ksh ${KB.plant.packages.three.dayScholar.toLocaleString()}\n• 6 Machines (8 Weeks): Ksh ${KB.plant.packages.six.dayScholar.toLocaleString()}\n\nRequirements: Valid ID, driver's license, e-citizen, passport photos\n\nWant to know more? Ask about fees, requirements, or how to apply!`);
      }
      if (containsAny(["requirement", "need", "qualify", "prerequisite"])) {
        return respond(`📋 Plant Operator Course Requirements:\n\n${KB.plant.requirements.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\nNote: If you don't have a driver's license, we offer a 1-month Category B2 driving course. Would you like details about that?`);
      }
      if (containsAny(["start", "intake", "when", "begin"])) {
        return respond(`The Plant Operator Course starts every Monday! You can join any week.\n\nReady to apply? Contact us at ${KB.institution.phones[0]} or visit our office at ${KB.institution.location}.`);
      }
    }

    // Driving queries
    if (containsAny(["driving", "license", "driver", "learner", "b2", "a2", "c1", "d1"])) {
      if (containsAny(["what", "about", "tell", "info", "category", "categories"])) {
        return respond(`🚗 Driving School (NTSA Accredited)\n\nWe offer:\n• A2 - Motorcycle (18+ years)\n• B2 - Saloon Manual (18+ years)\n• C1 - Light Truck (22+ years)\n• D1 - PSV/Van (22+ years)\n\n📅 Intakes: Every Monday\n\nWant to know fees or requirements? Just ask!`);
      }
      if (containsAny(["start", "intake", "when", "begin"])) {
        return respond(`Our Driving School intakes start every Monday! You can begin your training any week.\n\nContact us to enroll: ${KB.institution.phones[0]}`);
      }
    }

    // Application process
    if (containsAny(["apply", "application", "how to apply", "enroll", "admission", "join", "register"])) {
      return respond(`📝 How to Apply:\n\n1. Choose your course\n2. Contact us: ${KB.institution.phones[0]} (WhatsApp/Call)\n3. Prepare documents: ID/Passport, passport photos, certificates\n4. Make payment (MPESA: ${KB.payments.mpesa.business})\n5. Send confirmation to ${KB.payments.mpesa.confirm}\n6. Submit documents and get your admission number\n\nMost courses start every Monday. Ready to start? Give us a call!`);
    }

    // Courses overview
    if (containsAny(["course", "courses", "program", "what do you offer", "study", "training"])) {
      return respond(`🎓 IPMTTI Courses:\n\n🔧 Plant Operator (Heavy Machinery)\n🚗 Driving School (All Categories)\n👗 Fashion & Design\n💻 ICT (Programming, Web Design, Networking)\n🔨 Engineering (Welding, Plumbing, Electrical, etc.)\n\nWhich course interests you? I can provide detailed information!`);
    }

    // Accreditation
    if (containsAny(["accredited", "accreditation", "recognized", "certified", "approve"])) {
      return respond(`✅ IPMTTI is accredited by:\n${KB.institution.accreditations.join(', ')}\n\nOur certifications are nationally recognized and will boost your employability!`);
    }

    // Thank you
    if (containsAny(["thank", "thanks", "appreciate"])) {
      return respond(`You're welcome! 😊 Is there anything else you'd like to know about IPMTTI?`);
    }

    // Fallback with helpful suggestions
    return respond(`I'm here to help! I can assist you with:\n\n📚 Course information (Plant, Driving, Fashion, ICT, Engineering)\n💰 Fees and payment methods\n📍 Location and contact details\n📝 Application process\n🏠 Accommodation\n⏰ Office hours and intakes\n\nWhat would you like to know?`);

  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ reply: "⚠️ Something went wrong. Please try again or contact us at 0725 782912." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function respond(message: string) {
  return new Response(
    JSON.stringify({ reply: message }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
}