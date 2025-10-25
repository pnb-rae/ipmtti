import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Monitor } from "lucide-react";

const ComputerProgramming = () => {
  const course = {
    title: "Computer Programming",
    description: "6-month intensive course in programming fundamentals and software development.",
    faculty: "School of Computing & Informatics",
    duration: "6 Months",
    examBody: "INTERNAL",
    level: "Short Course",
    entry: "KCSE grade D+ or above",
    startDates: "Ongoing intake — start any Monday",
    overview: "The Computer Programming course introduces learners to software development and coding fundamentals. Students learn programming logic, algorithms, and data structures using languages such as Python, Java, or C++. The program covers variables, loops, functions, object-oriented programming, and database connectivity. Learners develop practical applications including desktop programs, simple games, and business software while understanding software development lifecycle and debugging techniques. The course emphasizes problem-solving skills, logical thinking, and systematic approach to building software solutions. Students work on individual and group projects, building a portfolio of applications. This training prepares graduates for junior programmer positions, software testing roles, or further studies in computer science and software engineering, tapping into the growing tech industry opportunities in Kenya and globally.",
    programHighlights: [
      "Programming fundamentals and logic",
      "Introduction to programming languages (Python, Java, or C++)",
      "Data structures and algorithms",
      "Software development lifecycle",
      "Debugging and testing techniques",
      "Building simple applications"
    ],
    whoIsThisFor: [
      "You want to start a career in software development",
      "You're interested in coding and building applications",
      "You want to understand how programs work"
    ],
    admissionRequirements: [
      "KCSE certificate or slip",
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-accent",
    iconComponent: <Monitor className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ComputerProgramming;
