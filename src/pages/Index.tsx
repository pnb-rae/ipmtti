import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import SEOHead from "@/components/SEOHead";
import SocialSidebar from "@/components/SocialSidebar";
import GraduationBanner from "@/components/GraduationBanner";
import BackToTop from "@/components/BackToTop";
import Chatbot from "@/components/Chatbot";

// Lazy load components below the fold
const CoursesHighlight = lazy(() => import("@/components/CoursesHighlight"));
const NewsEventsPreview = lazy(() => import("@/components/NewsEventsPreview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Admissions = lazy(() => import("@/components/Admissions"));
const FAQs = lazy(() => import("@/components/FAQs"));
const ContactPreview = lazy(() => import("@/components/ContactPreview"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <SchemaMarkup />
      <SocialSidebar />
      <BackToTop />
      <Chatbot />
      <Header />
      <GraduationBanner />
      <main>
        <Hero />
        <AboutPreview />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <CoursesHighlight />
          <NewsEventsPreview />
          <Testimonials />
          <Admissions />
          <FAQs />
          <ContactPreview />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
