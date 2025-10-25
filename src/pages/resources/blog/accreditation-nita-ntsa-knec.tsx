import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import imgEquipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";
import imgCampusBuilding from "@/assets/gallery/campus-building.jpg";
import imgMotorGrader from "@/assets/gallery/motor-grader-training.jpg";

const AccreditationArticle = () => {
  const title = "Accreditation: NITA, NTSA, and KNEC Explained: Why It Guarantees Your Future";
  const date = "October 16, 2025";
  const category = "Safety & Standards";
  const image = imgEquipmentYardAerial;
  const description = "Understand how NITA, NTSA, and KNEC accreditation ensures quality, legal recognition, and career progression for IPMTTI students.";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`${title}`} description={description} canonical="/resources/blog/accreditation-nita-ntsa-knec" />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative">
          <img src={image} alt={title} className="w-full h-[340px] md:h-[460px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="mb-2 text-xs uppercase tracking-wide">
              <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded mr-2">{category}</span>
              <span className="opacity-90">{date}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">{title}</h1>
          </div>
        </section>

        {/* Body */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="scroll-reveal mx-auto max-w-[760px] leading-8 prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-h2:mt-12 prose-h3:mt-10 prose-p:text-muted-foreground prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic">
              <h3>1. What is Accreditation? ❓</h3>
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Accreditation is the formal public approval granted to a training institution or specific program by a government regulatory body. It involves rigorous audits of training facilities, the qualifications of instructors, and the relevance of curricula. Accreditation builds public trust and ensures the graduate is competent, safe, and trained to an official standard.</p>
              <blockquote>“Accreditation is your credential’s passport—verifiable, trusted, and mobile across industries.”</blockquote>
              <hr className="my-10 border-border" />
              <h3>NITA (National Industrial Training Authority)</h3>
              <p>NITA regulates skills-based industrial training in Kenya. A NITA-accredited course ensures your skills meet National Industrial Training Standards and prepares you for the Trade Test system—powerful proof of competence for both employment and entrepreneurship.</p>
              <hr className="my-10 border-border" />
              <h3>NTSA (National Transport and Safety Authority)</h3>
              <p>NTSA accreditation confirms that training for vehicle and heavy plant operation covers legal and safety requirements. It enables you to take the official assessment to obtain or endorse a valid license/logbook—your legal authorization to operate.</p>
              <hr className="my-10 border-border" />
              <h3>KNEC (Kenya National Examinations Council)</h3>
              <p>KNEC standardizes Artisan, Craft, and Diploma programs and examinations. KNEC certification is widely recognized and provides academic pathways to higher qualifications.</p>
              <h3>Why It Matters 🎓</h3>
              <ul>
                <li><strong>Guaranteed Employability:</strong> Employers trust accredited certificates.</li>
                <li><strong>Assured Quality & Legal Compliance:</strong> Standard curricula, qualified trainers, and safe equipment.</li>
                <li><strong>Progression:</strong> Clear routes to advanced study and senior roles.</li>
              </ul>
              <p><strong>At IPMTTI, all programs are accredited by NITA, NTSA, and KNEC</strong>—your assurance of quality, safety, and recognition across the industry.</p>
            </article>
            <div className="mx-auto max-w-[760px] px-4 mt-10 flex items-center justify-between">
              <a href="/resources/blog" className="text-sm text-primary hover:underline">← Back to Blog</a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/resources/blog/choose-technical-course" className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg">
                <img src={imgCampusBuilding} className="w-full h-40 object-cover" alt="Choose technical course" />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Guides & Advice • Oct 16, 2025</div>
                  <h4 className="font-semibold group-hover:text-primary">How to Choose the Right Technical Course</h4>
                </div>
              </a>
              <a href="/resources/blog/plant-operator-training-expect" className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg">
                <img src={imgMotorGrader} className="w-full h-40 object-cover" alt="Plant operator training" />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Technical Courses • Oct 16, 2025</div>
                  <h4 className="font-semibold group-hover:text-primary">What to Expect in Plant Operator Training</h4>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AccreditationArticle;
