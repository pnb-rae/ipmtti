import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Car } from "lucide-react";

const MotorVehicleElectrician = () => {
  const course = {
    title: "Motor Vehicle Electrician (MVE) I, II, III",
    description: "6-term grade program in automotive electrical systems and diagnostics.",
    faculty: "School of Engineering",
    duration: "6 Terms",
    examBody: "NITA",
    level: "Grade",
    entry: "Open to all",
    startDates: "Intakes every term",
    overview: "The Motor Vehicle Electrical course trains learners to install, maintain, and repair electrical and electronic systems in motor vehicles, covering lighting, starting, charging, ignition systems, wiring, and electronic control units (ECUs). With the increasing complexity of modern vehicle electronics, this program provides essential skills in circuit testing, fault diagnosis, and component replacement. Students work with multimeters, diagnostic scanners, and specialized tools to troubleshoot electrical issues in cars, trucks, and buses. The course emphasizes understanding wiring diagrams, safety procedures, and the integration of computer systems in vehicles. Graduates find employment in automotive workshops, vehicle manufacturers, and specialized auto-electrical service centers.",
    programHighlights: [
      "Automotive electrical theory",
      "Battery, charging, and starting systems",
      "Lighting and signaling systems",
      "Electronic control systems",
      "Diagnostics and fault-finding",
      "Wiring and circuit repair"
    ],
    whoIsThisFor: [
      "You want to specialize in automotive electrical systems",
      "You're interested in modern vehicle technology",
      "You want to work in auto repair shops or dealerships"
    ],
    admissionRequirements: [
      "National ID / passport",
      "2 passport photos",
      "Completed application form"
    ],
    accommodation: "Optional, on request",
    gradientColors: "from-accent to-primary",
    iconComponent: <Car className="w-12 h-12 text-white" />
  };

  return <CourseDetailTemplate course={course} />;
};

export default MotorVehicleElectrician;
