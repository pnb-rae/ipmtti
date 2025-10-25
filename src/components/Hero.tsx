import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, CheckCircle } from "lucide-react";
import campusBuilding from "@/assets/gallery/campus-building.jpg";
import ipmttiSchoolVan from "@/assets/gallery/ipmtti-school-van.jpg";
import equipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";
import heavyMachineryTraining from "@/assets/gallery/heavy-machinery-training.jpg";
import classroomTraining from "@/assets/gallery/classroom-training.jpg";
import electricalInstallation from "@/assets/gallery/electrical-installation.jpg";
import constructionTraining from "@/assets/gallery/construction-training.jpg";
import rollerTraining from "@/assets/roller-training.jpg";
import forkliftTraining from "@/assets/forklift-training.jpg";
import excavatorBackhoeTraining from "@/assets/gallery/excavator-backhoe-training.jpg";
import mechanicsPracticalTraining from "@/assets/gallery/mechanics-practical-training.jpg";
import automotiveMechanics from "@/assets/gallery/automotive-mechanics.jpg";
import electricalWiringWorkshop from "@/assets/gallery/electrical-wiring-workshop.jpg";
import frontLoaderTraining from "@/assets/gallery/front-loader-training.jpg";
import studentsGroup from "@/assets/gallery/students-group.jpg";
import nitaLogo from "@/assets/nita-logo.png";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import knecLogo from "@/assets/knec-logo.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgroundImages = [
    { url: campusBuilding, position: 'center' },
    { url: heavyMachineryTraining, position: 'center' },
    { url: equipmentYardAerial, position: 'center' },
    { url: ipmttiSchoolVan, position: 'center' },
    { url: classroomTraining, position: 'center' },
    { url: electricalInstallation, position: 'center' },
    { url: constructionTraining, position: 'center' },
    { url: rollerTraining, position: 'center' },
    { url: forkliftTraining, position: 'center' },
    { url: excavatorBackhoeTraining, position: 'center' },
    { url: mechanicsPracticalTraining, position: 'center' },
    { url: automotiveMechanics, position: 'center' },
    { url: electricalWiringWorkshop, position: 'center' },
    { url: frontLoaderTraining, position: 'center' },
    { url: studentsGroup, position: 'center' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    { icon: Award, text: "NITA Accredited", description: "Certified Programs" },
    { icon: Users, text: "2,000+", description: "Graduates Placed" },
    { icon: Clock, text: "6+ Years", description: "Training Excellence" },
    { icon: CheckCircle, text: "98%", description: "Success Rate" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${image.url})`,
            backgroundPosition: image.position,
            willChange: index === currentImageIndex ? 'opacity' : 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8 animate-fade-in hover:animate-none transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-block animate-float">
                <span className="bg-accent px-4 py-2 rounded-full text-sm font-semibold text-accent-foreground hover:scale-105 transition-transform cursor-pointer">
                  🎓 Admissions Open for January 2026
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-accent block mb-3 text-2xl md:text-3xl">
                  International Plant Machinery & Technical Training Institute
                </span>
                Transform Your Career with 
                <span className="text-white block mt-2">
                  Technical Excellence
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Join Kenya's premier technical training institute. Master practical skills in 
                driving, heavy plant operation, engineering, and ICT 
                with hands-on training from industry experts.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-white/90">Industry-Certified Programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-white/90">Job Placement Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-white/90">Modern Facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-white/90">Flexible Payment Plans</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero" 
                className="group animate-pulse-glow hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/apply">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline-hero"
                className="hover:scale-105 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="/apply">
                  Apply Now - January 2026
                </a>
              </Button>
            </div>

            {/* Contact Quick Action */}
            <div className="pt-4 text-white/80">
              <p className="text-sm mb-2">Need guidance? Call us now:</p>
              <a href="tel:+254725782912" className="text-accent font-bold text-lg hover:text-accent-light transition-colors">
                +254 725 782 912
              </a>
            </div>
          </div>

          {/* Right Column - Trust Badges */}
          <div className="space-y-8 lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              {trustBadges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div 
                    key={index}
                    className="trust-badge animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <IconComponent className="w-8 h-8 text-accent mb-3 mx-auto" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {badge.text}
                    </div>
                    <div className="text-sm text-white/80">
                      {badge.description}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accreditation Logos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-white font-semibold mb-6">Accredited & Recognized By:</h3>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a 
                  href="https://www.nita.go.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:-rotate-3"
                >
                  <img 
                    src={nitaLogo} 
                    alt="NITA – National Industrial Training Authority" 
                    className="h-12 w-auto object-contain bg-white/90 rounded p-2 hover:shadow-lg transition-shadow duration-300"
                    loading="eager"
                  />
                </a>
                <a 
                  href="https://www.ntsa.go.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <img 
                    src={ntsaLogo} 
                    alt="NTSA – National Transport and Safety Authority" 
                    className="h-12 w-auto object-contain bg-white/90 rounded p-2 hover:shadow-lg transition-shadow duration-300"
                    loading="eager"
                  />
                </a>
                <a 
                  href="https://www.knec.ac.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:-rotate-3"
                >
                  <img 
                    src={knecLogo} 
                    alt="KNEC – Kenya National Examinations Council" 
                    className="h-12 w-auto object-contain bg-white/90 rounded p-2 hover:shadow-lg transition-shadow duration-300"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;