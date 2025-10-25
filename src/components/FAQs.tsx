import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Is IPMTTI officially recognized or registered by government bodies?",
    a: "Yes. IPMTTI is accredited and recognized by the relevant regulatory authorities such as TVET, NITA, KNEC, NTSA, and other government bodies. All our programs meet the national training and certification standards required for technical and vocational education in Kenya.",
  },
  {
    q: "Can I apply for an IPMTTI course online?",
    a: "Yes. You can apply directly through our online application portal available on our website. Each course page contains a detailed description and a link to the online application form.",
  },
  {
    q: "Can I enroll in more than one course at the same time?",
    a: "Yes. You may enroll in multiple courses, provided you meet the requirements for each and your class schedules do not overlap.",
  },
  {
    q: "What identification or prerequisites are required when applying?",
    a: "A valid National ID (or an equivalent identification document) is required. Some specialized technical programs may have additional requirements, which are listed on the course description or application form.",
  },
  {
    q: "Where is the IPMTTI campus located?",
    a: "The International Plant Machinery & Technical Training Institute (IPMTTI) campus is located in Happy Valley, Thika, Kiambu County, Kenya, off Garissa Road (alongside Garissa Road). The location offers easy accessibility and a conducive learning environment for all trainees.",
  },
  {
    q: "Do you offer part-time or evening classes?",
    a: "Currently, IPMTTI offers full-time programs that run from 8:00 am to 5:00 pm. However, we are planning to introduce weekend and part-time classes soon for selected courses to cater to working students.",
  },
  {
    q: "Is your driving school certified by the relevant authority?",
    a: "Yes. Our driving courses are fully certified and registered with the National Transport and Safety Authority (NTSA). Training is conducted by qualified instructors using approved vehicles and modern driving techniques.",
  },
  {
    q: "Can I pay my fees in installments?",
    a: "Yes. IPMTTI offers flexible installment payment options to make education affordable for all students. Please contact the accounts or admissions office to learn more about installment plans and payment deadlines.",
  },
  {
    q: "What kind of certificate or qualification will I receive after completing a course?",
    a: "Upon successful completion of your training, you will receive a nationally recognized certificate accredited by TVET, NITA, NTSA, or KNEC, depending on your program. This certification qualifies you for employment opportunities in Kenya and internationally, or for further studies in related fields.",
  },
  {
    q: "Do you provide hostel or boarding accommodation?",
    a: "Yes. IPMTTI provides affordable and secure hostel accommodation near the campus. Accommodation packages may include meals and other facilities for convenience and comfort.",
  },
  {
    q: "After completing a course, does IPMTTI assist with job placement?",
    a: "While employment cannot be guaranteed, IPMTTI provides career guidance, recommendation letters, and internship referrals to help graduates secure employment. We also collaborate with various companies and organizations to connect skilled trainees with potential employers.",
  },
  {
    q: "Do you offer online or virtual classes?",
    a: "Most of our courses are hands-on and practical, requiring physical attendance in our workshops and training areas. However, for theory-based lessons, some sessions may be offered online to increase flexibility for students.",
  },
];

const FAQs = () => {
  return (
    <section id="faqs" className="py-20 bg-background scroll-reveal">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions (FAQs)</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to the International Plant Machinery & Technical Training Institute (IPMTTI). Below are answers to common questions about our programs, courses, and operations. For further inquiries, contact us at [insert phone number] or [insert email address].
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full divide-y rounded-lg border bg-card text-card-foreground">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="px-4">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-card-foreground hover:text-primary transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
