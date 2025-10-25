import ArticleLayout from "@/components/ArticleLayout";
import imgMotorGrader from "@/assets/gallery/motor-grader-training.jpg";
import imgEquipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";

const ChooseTechnicalCourse = () => {
  const title = "How to Choose the Right Technical Course: Your Blueprint for Career Success";
  const date = "October 16, 2025";
  const category = "Guides & Advice";
  const image = "/images/blog/blog-1.jpg";
  const description = "A comprehensive guide to aligning your strengths and market demand to pick the best technical course at IPMTTI.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/choose-technical-course"
    >
      <article className="leading-8">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Choosing the right technical course is arguably the most important career decision you will make. It’s an investment of time and resources that will shape your entire professional trajectory. With the abundance of programs available today, it’s crucial to select one that perfectly aligns with your personal passion and robust professional goals. Here is a comprehensive guide to ensure you make an informed choice that pays dividends.</p>
        <h3>1. Assess Your Interests and Strengths 💡</h3>
        <p>The best careers are those where passion meets proficiency. Before looking at course catalogs, look inward.</p>
        <ul>
          <li>Do you thrive on practical problem-solving? Consider Automotive Mechanics or Plant Operator Training.</li>
          <li>Are you detail-oriented and precise? Welding & Fabrication or Electrical Installation demand accuracy and safety.</li>
          <li>Do you enjoy working outdoors with complex machinery? Plant Operator Training delivers exactly that.</li>
        </ul>
        <p>A course that matches your natural inclinations will keep you motivated during challenging times and lead to a more fulfilling career.</p>
        <blockquote>“A course that matches your natural inclinations will keep you motivated during challenging times and lead to a more fulfilling career.”</blockquote>
        <hr className="my-10 border-border" />
        <h3>2. Research Industry Demand and Future Growth 📈</h3>
        <p>A smart choice balances personal interest and market practicality. Kenya’s growth drivers—construction, logistics, and manufacturing—rely on certified technical talent. Courses like Plant Operation, Mechanics, and Welding remain high-demand with strong local and international prospects.</p>
        <hr className="my-10 border-border" />
        <h3>3. Check Accreditation and Quality Assurance ✅</h3>
        <p>Accreditation by NITA, NTSA, and KNEC guarantees recognized training, reliable certification, and employer trust. It’s the surest way to protect your investment and ensure eligibility for licensing.</p>
        <hr className="my-10 border-border" />
        <h3>4. Consider Duration, Flexibility, and Cost ⏳</h3>
        <p>Choose between shorter skill-focused programs for rapid entry or longer Artisan/Craft certifications for broader credentials. Weekend or part-time options can keep you learning while working.</p>
        <hr className="my-10 border-border" />
        <h3>5. Evaluate Career Progression and Entrepreneurship 💼</h3>
        <p>Select courses that offer upgrade paths and entrepreneurial potential—from opening a garage to launching a plant hire business.</p>
      </article>
      {/* Related */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/resources/blog/plant-operator-training-expect" className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg">
              <img src={imgMotorGrader} className="w-full h-40 object-cover" alt="Plant operator training" />
              <div className="p-4">
                <div className="text-xs text-muted-foreground mb-1">Technical Courses • Jan 5, 2025</div>
                <h4 className="font-semibold group-hover:text-primary">What to Expect in Plant Operator Training</h4>
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

export default ChooseTechnicalCourse;
