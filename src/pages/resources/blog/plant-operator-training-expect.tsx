import ArticleLayout from "@/components/ArticleLayout";
import imgMotorGrader from "@/assets/gallery/motor-grader-training.jpg";
import imgCampusBuilding from "@/assets/gallery/campus-building.jpg";
import imgEquipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";

const PlantOperatorTrainingExpect = () => {
  const title = "What to Expect in Plant Operator Training: Mastering Heavy Machinery";
  const date = "October 16, 2025";
  const category = "Technical Courses";
  const image = imgMotorGrader;
  const description = "Hands-on modules, safety protocols, equipment lists, and licensing outcomes in IPMTTI's Plant Operator Training.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/plant-operator-training-expect"
    >
            <article className="leading-8">
              <h3>1. Practical, Hands-On Learning from Day One 🚜</h3>
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Your training is weighted towards practical application with progressive site-simulated tasks.</p>
              <ul>
                <li><strong>Excavators & Backhoes</strong>: digging, trenching, lifting.</li>
                <li><strong>Graders</strong>: leveling and fine-grading road surfaces.</li>
                <li><strong>Bulldozers</strong>: dozing, pushing, spreading materials.</li>
                <li><strong>Wheel Loaders</strong>: efficient loading and hauling.</li>
                <li><strong>Forklifts</strong>: safe stacking and warehouse operations.</li>
              </ul>
              <blockquote>“Muscle memory meets method: repetition on real machines builds true operator confidence.”</blockquote>
              <hr className="my-10 border-border" />
              <h3>2. Mandatory Safety and Maintenance Modules 🛑</h3>
              <p>Operator safety is the law. You will master PPE, site communication, hazard recognition, and securing work areas.</p>
              <p>Daily maintenance routines include pre-operation checks (fluids, tyres, controls) and basic troubleshooting to avoid downtime.</p>
              <hr className="my-10 border-border" />
              <h3>3. Instruction from Certified Field Experts 👨‍🏫</h3>
              <p>Our trainers bring real site experience, mentoring the <em>why</em> behind each technique—safety, fuel efficiency, and machine longevity.</p>
              <hr className="my-10 border-border" />
              <h3>4. Licensing and Certification 🔑</h3>
              <p>We prepare you thoroughly for <strong>NTSA</strong> assessments and <strong>NITA</strong> trade tests, leading to government-recognized certification for legal operation.</p>
              <hr className="my-10 border-border" />
              <h3>5. Career Opportunities 💰</h3>
              <p>Graduates work in infrastructure, mining, logistics, and agriculture—or start profitable plant hire businesses.</p>
            </article>
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
              <a href="/resources/blog/accreditation-nita-ntsa-knec" className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg">
                <img src={imgEquipmentYardAerial} className="w-full h-40 object-cover" alt="Accreditation" />
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Safety & Standards • Oct 16, 2025</div>
                  <h4 className="font-semibold group-hover:text-primary">Accreditation: NITA, NTSA, and KNEC Explained</h4>
                </div>
              </a>
            </div>
          </div>
        </section>
    </ArticleLayout>
  );
};

export default PlantOperatorTrainingExpect;
