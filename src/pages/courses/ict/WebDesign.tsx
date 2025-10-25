import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Monitor } from "lucide-react";

const WebDesign = () => {
  const course = {
    title: "Web Design",
    description: "3-month course in modern web design and development fundamentals.",
    faculty: "School of Computing & Informatics",
    duration: "3 Months",
    examBody: "INTERNAL",
    level: "Short Course",
    entry: "Open to all",
    startDates: "Ongoing intake — start any Monday",
    overview: "The Web Design course trains learners to create professional, responsive websites for businesses and organizations. Students master HTML for structuring web content, CSS for styling and layout, and JavaScript fundamentals for interactivity. The program covers responsive design principles ensuring websites work seamlessly across desktop, tablet, and mobile devices. Learners explore color theory, typography, user interface design, and user experience principles. The course includes practical projects building complete websites from scratch, working with content management systems like WordPress, and basic website hosting and maintenance. Students also learn SEO basics, website performance optimization, and accessibility standards. Graduates are prepared for freelance web design work, employment in digital agencies, or starting their own web development businesses serving Kenya's growing demand for online presence.",
    programHighlights: [
      "HTML and CSS fundamentals",
      "Responsive web design",
      "Website layout and design principles",
      "Introduction to JavaScript",
      "Content management systems (WordPress basics)",
      "Publishing and hosting websites"
    ],
    whoIsThisFor: [
      "You want to create websites for businesses or personal projects",
      "You're interested in freelance web design",
      "You want to understand web technologies"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-secondary",
    iconComponent: <Monitor className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default WebDesign;
