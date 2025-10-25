import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Monitor } from "lucide-react";

const ComputerPackages = () => {
  const course = {
    title: "Computer Packages",
    description: "6-week intensive course in essential computer applications for office work.",
    faculty: "School of Computing & Informatics",
    duration: "6 Weeks",
    examBody: "INTERNAL",
    level: "Short Course",
    entry: "Open to all",
    startDates: "Ongoing intake — start any Monday",
    overview: "Our ICT Computer Packages course equips learners with practical digital skills essential for today's workplace. The program covers Microsoft Office applications including Word for document creation and formatting, Excel for data management and analysis, PowerPoint for professional presentations, and Access for database management. Students also learn email communication, internet research, file management, and cloud storage solutions. The course emphasizes hands-on practice with real-world scenarios such as creating business documents, financial spreadsheets, marketing presentations, and data reports. With a strong focus on productivity and professional communication, this training transforms basic computer literacy into workplace competence. Graduates are prepared for administrative roles, office positions, or to enhance their capabilities in any profession requiring digital literacy in Kenya's technology-driven economy.",
    programHighlights: [
      "Microsoft Word (document creation and formatting)",
      "Microsoft Excel (spreadsheets and data analysis)",
      "Microsoft PowerPoint (presentations)",
      "Email and internet navigation",
      "File management and organization",
      "Basic computer troubleshooting"
    ],
    whoIsThisFor: [
      "You need computer skills for office work",
      "You're seeking better job opportunities",
      "You want to improve your digital literacy"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-primary-light",
    iconComponent: <Monitor className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ComputerPackages;
