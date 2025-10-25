import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Wrench } from "lucide-react";

const Plumbing = () => {
  const course = {
    title: "Plumbing Grade III, II, I",
    description: "6-term progressive grade program in plumbing installation and maintenance.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "Our Plumbing course equips learners with essential skills in water supply, sanitation and drainage, stormwater management, pipework installation, sheet metal and roof plumbing, firefighting systems, irrigation, and specialized industrial works. The program integrates hands-on practical training with industry-based technical knowledge, ensuring learners gain both competence and confidence in modern plumbing practices. With a strong emphasis on safety, tool application, and sustainable solutions, students are prepared to meet the demands of domestic, commercial, and industrial environments. This course transforms passion and technical curiosity into professional expertise, enabling graduates to deliver efficient, durable, and code-compliant plumbing systems across diverse settings.",
    programHighlights: [
      "Water supply and distribution systems",
      "Drainage and sanitation systems",
      "Pipe fitting and installation",
      "Plumbing fixtures and fittings",
      "Leak detection and repair",
      "Plumbing codes and regulations"
    ],
    whoIsThisFor: [
      "You want a career in plumbing and sanitation",
      "You're interested in building construction trades",
      "You want to start a plumbing business"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-accent",
    iconComponent: <Wrench className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default Plumbing;
