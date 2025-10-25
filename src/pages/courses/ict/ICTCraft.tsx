import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Monitor } from "lucide-react";

const ICTCraft = () => {
  const course = {
    title: "Information Communication Technology - Craft Certificate",
    description: "6-term craft certificate building competence in computer systems, software applications, and networking.",
    faculty: "School of Computing & Informatics",
    duration: "6 Terms",
    examBody: "KNEC/CDACC",
    level: "Craft Certificate",
    entry: "KCSE grade D or above",
    startDates: "Intakes every term",
    overview: "The ICT Craft Certificate program provides comprehensive training in information and communication technology fundamentals, hardware, networking, and cybersecurity. Students gain hands-on expertise in computer assembly and maintenance, operating systems installation and configuration, and troubleshooting common technical problems. The curriculum covers network design and administration, including LAN/WAN setup, router configuration, and network security basics. Learners study database management, web development fundamentals, and basic programming concepts. The program also includes office automation, digital literacy, and professional communication using technology. With emphasis on practical skills and industry-relevant knowledge, graduates are prepared for KNEC certification and employment as IT support technicians, network administrators, or computer technicians in organizations, schools, cyber cafes, and technology service providers across Kenya.",
    programHighlights: [
      "Computer hardware and maintenance",
      "Office software applications",
      "Networking and internet basics",
      "Database systems",
      "IT support and troubleshooting",
      "Entrepreneurship in ICT"
    ],
    whoIsThisFor: [
      "You want to pursue an IT career in support or administration",
      "You enjoy working with computers and networks",
      "You aim to transition into higher-level ICT courses later"
    ],
    admissionRequirements: [
      "KCSE certificate or slip",
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-primary",
    iconComponent: <Monitor className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default ICTCraft;
