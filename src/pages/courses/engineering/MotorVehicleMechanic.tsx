import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Car } from "lucide-react";

const MotorVehicleMechanic = () => {
  const course = {
    title: "Motor Vehicle Mechanic (MVM)",
    description: "6-term grade program in automotive mechanics, maintenance, and repair.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Motor Vehicle Mechanic course trains learners to maintain, service, and repair motor vehicles used for transport and industry. It covers key areas such as the engine, transmission, suspension, braking system, steering system, electrical system, and hydraulic system. Through comprehensive theoretical instruction and hands-on workshop practice, students develop expertise in diagnosing mechanical problems, performing routine maintenance, and executing complex repairs. The curriculum includes modern diagnostic techniques, computer-aided systems, and adherence to manufacturer specifications. Graduates are equipped to work in garages, dealerships, fleet management companies, or establish their own automotive service businesses, meeting the growing demand for skilled automotive technicians.",
    programHighlights: [
      "Engine systems and overhaul",
      "Transmission and drivetrain",
      "Brake and suspension systems",
      "Fuel and exhaust systems",
      "Vehicle diagnostics and testing",
      "Preventive maintenance procedures"
    ],
    whoIsThisFor: [
      "You want a career as an auto mechanic",
      "You're passionate about vehicles and engines",
      "You want to open your own auto repair shop"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-primary to-accent",
    iconComponent: <Car className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default MotorVehicleMechanic;
