import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Wrench } from "lucide-react";

const Masonry = () => {
  const course = {
    title: "Masonry III, II & I",
    description: "6-term artisan program in bricklaying, blockwork, and construction.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Artisan",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Masonry course trains learners in the skilled craft of constructing structures using bricks, blocks, stones, and other masonry units. Students develop expertise in foundation work, wall construction, plastering, and decorative masonry through hands-on practice. The curriculum covers mortar mixing, leveling, plumbing, measuring, and the use of masonry tools and equipment. Learners gain proficiency in reading construction drawings, calculating material quantities, and applying building codes and standards. Emphasis is placed on precision, structural integrity, and finishing techniques. The program prepares graduates for employment in construction firms, building contractors, or self-employment as independent masons. With Kenya's booming construction industry, skilled masons are in high demand for residential, commercial, and infrastructure projects.",
    programHighlights: [
      "Brick and block laying techniques",
      "Reading construction drawings",
      "Mortar mixing and application",
      "Wall construction and alignment",
      "Stone masonry and decorative work",
      "Construction safety practices"
    ],
    whoIsThisFor: [
      "You want a career in building construction",
      "You're interested in masonry and bricklaying",
      "You want to become a skilled tradesperson"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-secondary to-primary",
    iconComponent: <Wrench className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default Masonry;
