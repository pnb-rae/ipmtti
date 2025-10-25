import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Clock, Award, Users } from "lucide-react";

const HospitalityPrograms = () => {
  const programs = [
    {
      title: "Food and Beverage - Diploma",
      description: "Comprehensive 9-term diploma program preparing students for leadership roles in hospitality industry.",
      duration: "9 Terms",
      level: "Diploma",
      certification: "KNEC",
      href: "/programs/hospitality/food-beverage-diploma"
    },
    {
      title: "Food and Beverage - Certificate",
      description: "6-term certificate program building professional culinary and service skills.",
      duration: "6 Terms", 
      level: "Certificate",
      certification: "KNEC",
      href: "/programs/hospitality/food-beverage-certificate"
    },
    {
      title: "Food and Beverage - Artisan",
      description: "3-term artisan program focusing on practical food service and preparation skills.",
      duration: "3 Terms",
      level: "Artisan", 
      certification: "KNEC",
      href: "/programs/hospitality/food-beverage-artisan"
    },
    {
      title: "Pastry and Bakery",
      description: "2-month intensive course in professional baking and pastry techniques.",
      duration: "2 Months",
      level: "Short Course",
      certification: "NITA",
      href: "/programs/hospitality/pastry-bakery"
    },
    {
      title: "Basic Cookery",
      description: "2-month foundational cooking course covering essential culinary skills.",
      duration: "2 Months",
      level: "Short Course", 
      certification: "INTERNAL",
      href: "/programs/hospitality/basic-cookery"
    },
    {
      title: "Cake Baking & Decoration",
      description: "1-month specialized course in cake preparation and decorative techniques.",
      duration: "1 Month",
      level: "Short Course",
      certification: "INTERNAL", 
      href: "/programs/hospitality/cake-decoration"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <ChefHat className="w-16 h-16 text-accent mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">School of Hospitality</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Master the art of culinary excellence and hospitality service. Our comprehensive programs 
                prepare you for success in Kenya's thriving hospitality industry.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Our Hospitality Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From artisan-level skills to diploma qualifications, choose the program that matches your career goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="course-card group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {program.level}
                      </span>
                      <span className="text-sm text-muted-foreground">{program.certification}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{program.duration}</span>
                    </div>
                    
                    <Button asChild className="w-full group-hover:bg-primary/90">
                      <a href={program.href}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Hospitality Programs */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12">Why Choose IPMTTI Hospitality Programs?</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Industry-Standard Training</h3>
                      <p className="text-muted-foreground">
                        Learn with professional-grade equipment and techniques used in top hotels and restaurants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                      <p className="text-muted-foreground">
                        Learn from experienced chefs and hospitality professionals with industry expertise.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <ChefHat className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hands-On Experience</h3>
                      <p className="text-muted-foreground">
                        Practice in our fully equipped training kitchens and gain real-world experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Flexible Duration</h3>
                      <p className="text-muted-foreground">
                        Choose from short courses to comprehensive diploma programs based on your goals.
                      </p>
                    </div>
                  </div>
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

export default HospitalityPrograms;