import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Zap } from "lucide-react";

const ElectricalInstallation = () => {
  const course = {
    title: "Electrical Installation - Artisan",
    description: "6-term artisan program providing foundational skills in electrical installation, safety, and maintenance.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Artisan",
    entry: "KCSE grade D- & Below",
    startDates: "Intakes every term",
    overview: "The Electrical Installation Course is a comprehensive training program designed to equip learners with the knowledge and hands-on skills required in the electrical trade. The course covers both theory and practical aspects of electrical work, enabling students to design, install, maintain, and troubleshoot electrical systems in residential, commercial, and industrial environments. Through guided instruction and practical workshops, learners gain competence in wiring, lighting, socket and circuit installation, safety procedures, and the use of modern tools and equipment. Emphasis is placed on adherence to industry standards, safe working practices, and problem-solving skills, ensuring graduates are job-ready upon completion. This course is ideal for individuals aspiring to become professional electricians, electrical technicians, or those seeking self-employment opportunities in the growing electrical services sector.",
    programHighlights: [
      "Basics of electrical wiring and circuits",
      "Electrical installation tools and techniques",
      "Safety standards and regulations",
      "Domestic and small commercial wiring",
      "Introduction to renewable energy systems",
      "Basic electrical troubleshooting"
    ],
    whoIsThisFor: [
      "You want practical, hands-on training in electrical work",
      "You enjoy working with tools and solving technical problems",
      "You're seeking entry into the electrical engineering field"
    ],
    admissionRequirements: [
      "KCSE certificate/slip (if available)",
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-accent",
    iconComponent: <Zap className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ElectricalInstallation;
