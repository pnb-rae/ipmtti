import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AccessibilityWidget from "./components/AccessibilityWidget";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Schools from "./pages/Schools";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
const DrivingPlantOperation = lazy(() => import("./pages/schools/DrivingPlantOperation"));
const Engineering = lazy(() => import("./pages/schools/Engineering"));
const ICTPrograms = lazy(() => import("./pages/programs/ICTPrograms"));
const EngineeringPrograms = lazy(() => import("./pages/programs/EngineeringPrograms"));
const DrivingClasses = lazy(() => import("./courses/DrivingClasses"));
const PlantOperator = lazy(() => import("./courses/PlantOperator"));
const PlantOperatorTraining = lazy(() => import("./pages/PlantOperatorTraining"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Apply from "./pages/Apply";
const AdminApplications = lazy(() => import("./pages/AdminApplications"));

const ResourcesBlogIndex = lazy(() => import("./pages/resources/blog/index"));
const ResourcesFAQ = lazy(() => import("./pages/resources/faq"));
// Blog article pages
const BlogChooseCourse = lazy(() => import("./pages/resources/blog/choose-technical-course"));
const BlogPlantExpect = lazy(() => import("./pages/resources/blog/plant-operator-training-expect"));
const BlogAccreditation = lazy(() => import("./pages/resources/blog/accreditation-nita-ntsa-knec"));
const BlogWeldingCareers = lazy(() => import("./pages/resources/blog/welding-careers"));
const BlogSafetyEquipment = lazy(() => import("./pages/resources/blog/safety-equipment-training-matters"));
const BlogWomenBreakingBarriers = lazy(() => import("./pages/resources/blog/women-breaking-barriers"));
const BlogStudentStories = lazy(() => import("./pages/resources/blog/student-stories-classroom-to-site"));

// ICT courses
import ICTCraft from "./pages/courses/ict/ICTCraft";
import ComputerProgramming from "./pages/courses/ict/ComputerProgramming";
import WebDesign from "./pages/courses/ict/WebDesign";
import ComputerPackages from "./pages/courses/ict/ComputerPackages";

// Engineering courses
import Plumbing from "./pages/courses/engineering/Plumbing";
import ConstructionPlantMechanic from "./pages/courses/engineering/ConstructionPlantMechanic";
import ElectricalWireman from "./pages/courses/engineering/ElectricalWireman";
import ElectricalInstallation from "./pages/courses/engineering/ElectricalInstallation";
import Masonry from "./pages/courses/engineering/Masonry";
import CarpentryJoinery from "./pages/courses/engineering/CarpentryJoinery";
import Painting from "./pages/courses/engineering/Painting";
import WeldingFabrication from "./pages/courses/engineering/WeldingFabrication";
import MotorVehicleElectrician from "./pages/courses/engineering/MotorVehicleElectrician";
import MotorVehicleMechanic from "./pages/courses/engineering/MotorVehicleMechanic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AccessibilityWidget />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/schools/driving-plant-operation" element={<DrivingPlantOperation />} />
          <Route path="/schools/engineering" element={<Engineering />} />
          <Route path="/schools/computing" element={<ICTPrograms />} />
          <Route path="/programs/engineering" element={<EngineeringPrograms />} />
          <Route path="/courses/driving-classes" element={<DrivingClasses />} />
          <Route path="/courses/plant-operator" element={<PlantOperator />} />
          <Route path="/plant-operator-training" element={<PlantOperatorTraining />} />
          <Route path="/resources/blog" element={<ResourcesBlogIndex />} />
          <Route path="/resources/blog/choose-technical-course" element={<BlogChooseCourse />} />
          <Route path="/resources/blog/plant-operator-training-expect" element={<BlogPlantExpect />} />
          <Route path="/resources/blog/accreditation-nita-ntsa-knec" element={<BlogAccreditation />} />
          <Route path="/resources/blog/welding-careers" element={<BlogWeldingCareers />} />
          <Route path="/resources/blog/safety-equipment-training-matters" element={<BlogSafetyEquipment />} />
          <Route path="/resources/blog/women-breaking-barriers" element={<BlogWomenBreakingBarriers />} />
          <Route path="/resources/blog/student-stories-classroom-to-site" element={<BlogStudentStories />} />
          <Route path="/resources/faq" element={<ResourcesFAQ />} />
          
          {/* ICT Course Routes */}
          <Route path="/programs/ict/ict-craft" element={<ICTCraft />} />
          <Route path="/programs/ict/computer-programming" element={<ComputerProgramming />} />
          <Route path="/programs/ict/web-design" element={<WebDesign />} />
          <Route path="/programs/ict/computer-packages" element={<ComputerPackages />} />
          
          {/* Engineering Course Routes */}
          <Route path="/programs/engineering/plumbing" element={<Plumbing />} />
          <Route path="/programs/engineering/construction-plant-mechanic" element={<ConstructionPlantMechanic />} />
          <Route path="/programs/engineering/electrical-wireman" element={<ElectricalWireman />} />
          <Route path="/programs/engineering/electrical-installation" element={<ElectricalInstallation />} />
          <Route path="/programs/engineering/masonry" element={<Masonry />} />
          <Route path="/programs/engineering/carpentry-joinery" element={<CarpentryJoinery />} />
          <Route path="/programs/engineering/painting" element={<Painting />} />
          <Route path="/programs/engineering/welding-fabrication" element={<WeldingFabrication />} />
          <Route path="/programs/engineering/motor-vehicle-electrician" element={<MotorVehicleElectrician />} />
          <Route path="/programs/engineering/motor-vehicle-mechanic" element={<MotorVehicleMechanic />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
