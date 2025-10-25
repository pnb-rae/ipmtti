import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Clock, Award, Users, Zap, Hammer, Car, Cog } from "lucide-react";
import engineeringImage from "@/assets/gallery/heavy-machinery-training.jpg";

const EngineeringPrograms = () => {
  const programs = [
    {
      title: "Plumbing Grade III, II, I",
      description: "6-term comprehensive plumbing program covering installation, maintenance, and repair techniques.",
      duration: "6 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      icon: Wrench,
      href: "/programs/engineering/plumbing"
    },
    {
      title: "Construction Plant Mechanic",
      description: "3-term specialized program for heavy machinery maintenance and repair.",
      duration: "3 Terms", 
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      icon: Cog,
      href: "/programs/engineering/construction-plant-mechanic"
    },
    {
      title: "Electrical Wireman III, II & I",
      description: "6-term electrical program covering wiring, installations, and electrical systems.",
      duration: "6 Terms",
      level: "Grade", 
      certification: "NITA",
      requirements: "Open entry",
      icon: Zap,
      href: "/programs/engineering/electrical-wireman"
    },
    {
      title: "Electrical Installation - Artisan",
      description: "6-term artisan program focusing on foundational electrical installation skills.",
      duration: "6 Terms",
      level: "Artisan",
      certification: "NITA", 
      requirements: "KCSE grade D- & below",
      icon: Zap,
      href: "/programs/engineering/electrical-installation"
    },
    {
      title: "Masonry III, II & I",
      description: "6-term program covering stone work, bricklaying, and construction techniques.",
      duration: "6 Terms",
      level: "Artisan",
      certification: "NITA",
      requirements: "Open entry",
      icon: Hammer,
      href: "/programs/engineering/masonry"
    },
    {
      title: "Carpentry & Joinery I, II, III", 
      description: "6-term program in woodworking, furniture making, and construction carpentry.",
      duration: "6 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      icon: Hammer,
      href: "/programs/engineering/carpentry-joinery"
    },
    {
      title: "Painting",
      description: "3-month course in professional painting techniques and surface preparation.",
      duration: "3 Months",
      level: "Grade",
      certification: "NITA", 
      requirements: "Open entry",
      icon: Wrench,
      href: "/programs/engineering/painting"
    },
    {
      title: "Welding and Fabrication I, II, III",
      description: "6-term comprehensive welding program covering various welding techniques and metal fabrication.",
      duration: "6 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      icon: Wrench,
      href: "/programs/engineering/welding-fabrication"
    },
    {
      title: "Motor Vehicle Electrician (MVE) I, II, III",
      description: "6-term program specializing in automotive electrical systems and diagnostics.",
      duration: "6 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry", 
      icon: Car,
      href: "/programs/engineering/motor-vehicle-electrician"
    },
    {
      title: "Motor Vehicle Mechanic (MVM)",
      description: "6-term comprehensive automotive mechanics program covering engine repair and maintenance.",
      duration: "6 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      icon: Car,
      href: "/programs/engineering/motor-vehicle-mechanic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={engineeringImage} 
              alt="Engineering students working on heavy machinery training" 
              className="w-full h-full object-cover animate-scale-in brightness-90"
              style={{ animationDuration: '1.5s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-light/90"></div>
          </div>
          <div className="relative container mx-auto px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Wrench className="w-16 h-16 text-accent mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">School of Engineering</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Build your future with hands-on engineering skills. From electrical installations to automotive 
                mechanics, master the technical trades that power Kenya's infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Engineering Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technical training programs designed to meet Kenya's growing demand 
                for skilled engineering professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card key={index} className="course-card group">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {program.level}
                        </span>
                        <span className="text-sm text-muted-foreground">{program.certification}</span>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <IconComponent className="w-6 h-6 text-accent mr-3" />
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {program.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {program.description}  
                      </p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          <span>{program.requirements}</span>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <a href={program.href}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engineering Specializations */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12">Engineering Specializations</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Electrical Engineering</h3>
                      <p className="text-muted-foreground">
                        Master electrical installations, wiring systems, and safety standards for residential and commercial projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Car className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automotive Engineering</h3>
                      <p className="text-muted-foreground">
                        Vehicle mechanics, electrical systems, diagnostics, and maintenance for all types of motor vehicles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Wrench className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Welding & Fabrication</h3>
                      <p className="text-muted-foreground">
                        Metal joining techniques, fabrication processes, and quality welding for construction and manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Hammer className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Construction Trades</h3>
                      <p className="text-muted-foreground">
                        Carpentry, masonry, plumbing, and painting skills essential for construction and building projects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Cog className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Heavy Machinery</h3>
                      <p className="text-muted-foreground">
                        Maintenance and repair of construction plant equipment, excavators, and heavy industrial machinery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
                      <p className="text-muted-foreground">
                        Safety protocols, quality standards, project management, and entrepreneurship skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title mb-12">Industry-Ready Skills</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">NITA Certified</h3>
                  <p className="text-muted-foreground text-sm">All programs meet national industry training standards and requirements.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Job Placement</h3>
                  <p className="text-muted-foreground text-sm">Strong industry connections and career support for all graduates.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hands-On Training</h3>
                  <p className="text-muted-foreground text-sm">Learn with industry-standard equipment and real-world projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EngineeringPrograms;