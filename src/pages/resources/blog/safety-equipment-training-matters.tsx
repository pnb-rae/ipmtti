import ArticleLayout from "@/components/ArticleLayout";
import imgForklift from "@/assets/forklift-training.jpg";

const SafetyEquipmentTrainingMatters = () => {
  const title = "Safety First: Why Equipment Training Matters";
  const date = "February 2, 2025";
  const category = "Safety & Standards";
  const image = imgForklift;
  const description = "How certified safety and maintenance training reduces incidents, protects teams, and keeps projects on schedule.";

  return (
    <ArticleLayout
      title={title}
      date={date}
      category={category}
      image={image}
      description={description}
      canonical="/resources/blog/safety-equipment-training-matters"
    >
      <article className="leading-8">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">On every site, safety is the first skill and the last line of defense. Proper equipment training prevents incidents, preserves machinery, and instills habits that keep teams and timelines protected.</p>
        <h3>1. Risk Awareness and Hazard Controls</h3>
        <p>Operators learn to spot pinch points, blind zones, and unstable ground conditions. A clear risk assessment routine becomes second nature.</p>
        <ul>
          <li>Site briefings, signage, and communication protocols</li>
          <li>Lock-out/tag-out for maintenance tasks</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>2. PPE and Operating Standards</h3>
        <p>From helmets and high-visibility wear to hearing protection, PPE is paired with manufacturer-stated operating limits to avoid misuse.</p>
        <blockquote>“Safe operation is efficient operation—no shortcuts, no surprises.”</blockquote>
        <hr className="my-10 border-border" />
        <h3>3. Daily Checks and Preventive Maintenance</h3>
        <p>Pre-start inspections catch leaks, loose fittings, or warning lights before small issues turn into downtime or damage.</p>
        <ul>
          <li>Fluids, tyres/tracks, controls, emergency stops</li>
          <li>Cleanliness to improve visibility and heat dissipation</li>
        </ul>
        <hr className="my-10 border-border" />
        <h3>4. Compliance and Certification</h3>
        <p>Training aligned to NTSA and NITA ensures you’re legally prepared to operate—and trusted to uphold site safety rules.</p>
        <p className="mt-6">At IPMTTI, safety is baked into every module so graduates can lead by example on day one.</p>
      </article>
    </ArticleLayout>
  );
};

export default SafetyEquipmentTrainingMatters;
