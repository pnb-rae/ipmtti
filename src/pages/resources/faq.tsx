import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQs, { faqs } from "@/components/FAQs";
import campusImage from "@/assets/gallery/campus-building.jpg";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="FAQ: Admissions, Accreditation, Courses & Campus | IPMTTI Thika"
        description="Frequently asked questions about IPMTTI — accreditation (NITA/NTSA/KNEC), admissions, fees, courses, location in Thika, and student support."
        keywords="IPMTTI FAQ, Thika institute questions, NITA NTSA KNEC accreditation, admissions, fees, hostel, courses"
        canonical="/resources/faq"
      />
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
            }),
          }}
        />
        <section className="bg-white">
          <div className="container mx-auto px-4 pt-6 md:pt-10">
            <img
              src={campusImage}
              alt="IPMTTI campus in Thika"
              className="w-full h-56 md:h-72 lg:h-96 object-cover rounded-xl border"
              loading="eager"
            />
          </div>
        </section>
        {/* Reuse the shared FAQs component (includes its own heading and spacing) */}
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
