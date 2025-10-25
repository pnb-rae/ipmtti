import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Wrench } from "lucide-react";

const ConstructionPlantMechanic = () => {
  const course = {
    title: "Construction Plant Mechanic",
    description: "3-term specialized program in heavy machinery maintenance and repair.",
    faculty: "School of Engineering",
    duration: "3 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Plant Mechanic course trains learners to maintain, service, and repair heavy machinery and equipment used in construction, agriculture, and industry. It covers key areas such as the transmission, undercarriage, engine, and hydraulic system. Students gain hands-on experience with excavators, bulldozers, loaders, graders, and compactors, learning to diagnose faults, perform preventive maintenance, and execute major repairs. The program emphasizes safety protocols, proper tool usage, and understanding of mechanical, hydraulic, and electrical systems in heavy equipment. Graduates are prepared for careers in construction companies, mining operations, equipment rental firms, and agricultural enterprises, with the skills to ensure machinery operates efficiently and safely.",
    programHighlights: [
      "Heavy machinery systems and components",
      "Engine diagnostics and repair",
      "Hydraulic and pneumatic systems",
      "Electrical systems in plant machinery",
      "Preventive maintenance schedules",
      "Safety in machinery servicing"
    ],
    whoIsThisFor: [
      "You want to work with heavy construction equipment",
      "You're interested in machinery maintenance",
      "You want to work in construction or mining industries"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-primary",
    iconComponent: <Wrench className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ConstructionPlantMechanic;
