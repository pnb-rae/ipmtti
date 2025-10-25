import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Brush } from "lucide-react";

const Painting = () => {
  const course = {
    title: "Painting",
    description: "3-month grade program in painting and decorating for residential and commercial buildings.",
    faculty: "School of Engineering",
    duration: "3 Months",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Ongoing intake — start any Monday",
    overview: "The Painting course equips learners with professional skills in surface preparation, paint application, and decorative finishing for buildings and structures. Students learn about different paint types, primers, sealers, and their appropriate applications for various surfaces including wood, metal, concrete, and plaster. The program covers brush techniques, roller application, spray painting, color mixing, and matching. Emphasis is placed on surface preparation methods such as filling, sanding, and priming to ensure quality finishes. Learners also study protective coatings, weather resistance, and maintenance procedures. Safety practices, including proper ventilation and handling of chemicals, are integral to the training. Graduates are prepared for employment in construction firms, painting contractors, or to establish their own painting businesses serving the residential and commercial sectors.",
    programHighlights: [
      "Surface preparation and priming",
      "Paint types and applications",
      "Interior and exterior painting",
      "Decorative finishes and textures",
      "Color mixing and matching",
      "Safety and environmental considerations"
    ],
    whoIsThisFor: [
      "You want to become a professional painter",
      "You're interested in building finishing trades",
      "You want to start a painting business"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-primary",
    iconComponent: <Brush className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default Painting;
