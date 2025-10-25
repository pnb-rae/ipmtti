import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Flame } from "lucide-react";

const WeldingFabrication = () => {
  const course = {
    title: "Welding and Fabrication I, II, III",
    description: "6-term grade program in welding techniques and metal fabrication.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Welding and Fabrication course provides comprehensive training in joining and shaping metal materials for construction, manufacturing, and repair applications. Students learn multiple welding techniques including arc welding, MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and oxy-acetylene welding, along with cutting processes. The program covers metal preparation, joint design, welding positions, and quality inspection methods. Practical sessions focus on fabricating structures, frames, gates, and industrial components while maintaining safety standards and using protective equipment. Students also learn blueprint reading, measurement techniques, and metal properties. Graduates find opportunities in construction companies, manufacturing plants, workshops, shipyards, and can establish their own fabrication businesses serving diverse industries.",
    programHighlights: [
      "Arc welding techniques",
      "MIG and TIG welding",
      "Oxy-acetylene welding and cutting",
      "Metal fabrication and sheet metal work",
      "Welding safety and equipment",
      "Blueprint reading for fabricators"
    ],
    whoIsThisFor: [
      "You want a career in welding and fabrication",
      "You're interested in metalworking trades",
      "You want to work in manufacturing or construction"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-accent",
    iconComponent: <Flame className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default WeldingFabrication;
