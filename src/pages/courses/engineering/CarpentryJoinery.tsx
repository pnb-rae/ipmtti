import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Wrench } from "lucide-react";

const CarpentryJoinery = () => {
  const course = {
    title: "Carpentry & Joinery I, II, III",
    description: "6-term grade program in woodworking, furniture making, and construction carpentry.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Carpentry and Joinery course provides comprehensive training in woodworking for both construction and furniture-making applications. Students learn to use hand tools and power equipment to shape, cut, and assemble wood materials into functional structures and products. The program covers roof construction, door and window installation, staircase building, cabinet making, and furniture design. Learners develop skills in reading technical drawings, wood selection, joinery techniques, and finishing methods. Safety practices, precision measurement, and quality craftsmanship are emphasized throughout the training. The course combines workshop practice with theoretical knowledge of wood properties and structural principles. Graduates find employment in construction companies, furniture workshops, interior fitting firms, or establish their own carpentry businesses in Kenya's growing construction and furniture sectors.",
    programHighlights: [
      "Hand and power tool operation",
      "Furniture design and construction",
      "Roof framing and trusses",
      "Door and window installation",
      "Cabinet making and joinery",
      "Reading construction plans"
    ],
    whoIsThisFor: [
      "You want a career in carpentry or furniture making",
      "You're interested in woodworking crafts",
      "You want to work in building construction"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-secondary",
    iconComponent: <Wrench className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default CarpentryJoinery;
