import ArticleLayout from "@/components/ArticleLayout";

const WeldingCareers = () => {
  const title = "Top 5 Welding Careers You Can Pursue After Graduation";
  const date = "March 15, 2025";
  const category = "Career Tips";
  const image = "/images/blog/blog-2.jpg";
  const description = "Explore high-demand welding career paths from structural fabrication to pipeline work, with skills and salary insights.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/welding-careers"
    >
      <article className="leading-8">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Welding is a gateway to diverse, well-paid roles in infrastructure, manufacturing, energy, and specialized fabrication. With hands-on skills and recognized certification, you can chart a path that fits your strengths and preferred work environment.</p>
        <h3>1. Structural Welder (Construction)</h3>
        <p>Build bridges, warehouses, and high-rise frames. Strong understanding of blueprints, safety, and site coordination is key.</p>
        <ul>
          <li>Common processes: SMAW, FCAW</li>
          <li>Worksites: Construction yards and active sites</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>2. Pipe Welder (Oil, Gas, Water)</h3>
        <p>High-skill role joining pipes that must pass X-ray and pressure tests. Offers excellent pay and travel opportunities.</p>
        <ul>
          <li>Common processes: TIG, SMAW</li>
          <li>Requirements: Rigorous testing and safety compliance</li>
        </ul>
        <blockquote>“Pipe welding rewards precision, patience, and consistency.”</blockquote>
        <hr className="my-10 border-border" />
        <h3>3. Fabrication Welder (Workshops)</h3>
        <p>Produce components and assemblies for machines and structures. Great for detail-oriented makers.</p>
        <ul>
          <li>Common processes: MIG, TIG</li>
          <li>Focus: Accuracy, jigs, fit-up quality</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>4. Maintenance Welder (Plants & Fleet)</h3>
        <p>Keep equipment and facilities running: repair cracks, rebuild parts, and hardface components to extend life.</p>
        <ul>
          <li>Common processes: SMAW, hardfacing</li>
          <li>Traits: Troubleshooting and adaptability</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>5. Specialty Welder (Stainless/Aluminium)</h3>
        <p>Work on food-grade piping, medical frames, or lightweight structures. Craftsmanship and surface finish matter.</p>
        <ul>
          <li>Common processes: TIG</li>
          <li>Edge: Certifications, portfolio of clean beads</li>
        </ul>
        <p className="mt-6">At IPMTTI, you’ll practice safely, build a strong portfolio, and prepare for assessments that employers trust.</p>
      </article>
    </ArticleLayout>
  );
};

export default WeldingCareers;
