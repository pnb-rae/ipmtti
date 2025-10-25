import ArticleLayout from "@/components/ArticleLayout";
import imgExcavatorFemale from "@/assets/gallery/excavator-female-operator.jpg";

const WomenBreakingBarriers = () => {
  const title = "Women Breaking Barriers in Heavy Machinery";
  const date = "April 8, 2025";
  const category = "Inspiration";
  const image = imgExcavatorFemale;
  const description = "Stories of trailblazing women operators and technicians reshaping heavy machinery and construction across Kenya.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/women-breaking-barriers"
    >
      <article className="leading-8">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Across sites in Thika and across Kenya, women are stepping into plant cabs and welding bays—bringing precision, leadership, and grit. Their progress is reshaping teams and inspiring the next generation.</p>
        <h3>1. Skill Over Stereotype</h3>
        <p>Competence isn’t gendered. Operators are judged by safe handling, job quality, and uptime—not assumptions.</p>
        <ul>
          <li>Consistent pre-start checks and site communication</li>
          <li>Measured movements that protect people and machines</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>2. Role Models on Real Projects</h3>
        <p>From roadworks to quarry operations, female operators and technicians are proving performance through results.</p>
        <blockquote>“Confidence grows with hours on the controls and mentors who open doors.”</blockquote>
        <hr className="my-10 border-border" />
        <h3>3. The Support That Matters</h3>
        <p>Supportive policies—clean facilities, fair rotations, and unbiased assessments—unlock talent and retention.</p>
        <ul>
          <li>Clear promotion pathways tied to competency</li>
          <li>Peer mentoring and inclusive safety briefings</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>4. Start Your Journey</h3>
        <p>At IPMTTI, women train on the same modern machines with the same safety standards—and graduate with recognized certification.</p>
        <p className="mt-6">Your seat is waiting. Let your work speak.</p>
      </article>
    </ArticleLayout>
  );
};

export default WomenBreakingBarriers;
