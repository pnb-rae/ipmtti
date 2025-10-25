import ArticleLayout from "@/components/ArticleLayout";

const StudentStoriesClassroomToSite = () => {
  const title = "Student Stories: From Classroom to Site";
  const date = "May 20, 2025";
  const category = "Student Stories";
  const image = "/images/blog/blog-3.jpg";
  const description = "Real journeys from IPMTTI training grounds to impactful roles in construction, logistics, and engineering.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/student-stories-classroom-to-site"
    >
      <article className="leading-8">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">Every cohort brings new milestones. What begins with tool safety and pre-start checks becomes confidence on real projects—grading roads, lifting safely, troubleshooting breakdowns, and communicating like pros.</p>
        <h3>Grace — From Nervous Beginner to Forklift Lead</h3>
        <p>Grace joined with zero equipment experience. By week six, she was executing tight warehouse maneuvers and stacking protocols with ease. Today, she leads shift briefs and champions safe signaling.</p>
        <ul>
          <li>Key wins: Precision stacking, battery maintenance, and team comms</li>
          <li>Lesson: Confidence grows from consistent, supervised practice</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>Ahmed — Excavator Operator on Roadworks</h3>
        <p>Ahmed’s eye for grade and clean benching made him invaluable on site. He applies daily inspection routines and logs machine hours to keep uptime high.</p>
        <ul>
          <li>Key wins: Trenching accuracy, bench stability, fuel-efficient technique</li>
          <li>Lesson: Small habits protect crews and machines</li>
        </ul>
        <blockquote>“The difference was practicing on real machines with instructors who worked in the field.”</blockquote>
        <hr className="my-10 border-border" />
        <h3>Rita — Welding to Workshop Supervisor</h3>
        <p>Rita’s bead discipline and fit-up quality stood out. After graduation, she documented shop SOPs, improving rework rates and cycle time.</p>
        <ul>
          <li>Key wins: TIG on stainless frames, jig design, visual inspection</li>
          <li>Lesson: Documentation is a performance tool</li>
        </ul>
        <p className="mt-6">Your story can start today—learn with modern equipment, industry standards, and mentors who care.</p>
      </article>
    </ArticleLayout>
  );
};

export default StudentStoriesClassroomToSite;
