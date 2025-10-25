import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Zap } from "lucide-react";

const ElectricalWireman = () => {
  const course = {
    title: "Electrical Wireman III, II & I",
    description: "6-term progressive grade program in electrical wiring and installation.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Electrical Wireman program offers progressive training in electrical installation and maintenance across domestic, commercial, and industrial settings. Students master the installation of conduits, cables, switches, sockets, distribution boards, and lighting systems while learning to interpret electrical drawings and comply with wiring regulations. The course emphasizes practical skills development through extensive workshop sessions, covering single-phase and three-phase systems, earthing, circuit protection, and load calculations. Safety standards and electrical codes are integrated throughout the training. Upon completion, graduates qualify for NITA certification and are prepared for employment as electrical wiremen, installation technicians, or to pursue self-employment in the electrical contracting sector.",
    programHighlights: [
      "Electrical theory and principles",
      "Domestic and commercial wiring",
      "Electrical installations and circuits",
      "Safety codes and regulations",
      "Testing and fault-finding",
      "Electrical maintenance and repair"
    ],
    whoIsThisFor: [
      "You want a career in electrical installation",
      "You're interested in electrical work for buildings",
      "You want NITA wireman certification"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-accent-light",
    iconComponent: <Zap className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ElectricalWireman;
