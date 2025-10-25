import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Clock, Award, Users, Palette } from "lucide-react";
import fashionImage from "@/assets/gallery/fashion-design.jpg";

const FashionPrograms = () => {
  const programs = [
    {
      title: "Fashion & Design - Diploma",
      description: "Comprehensive 9-term diploma covering advanced fashion design, pattern making, and business skills.",
      duration: "9 Terms",
      level: "Diploma",
      certification: "KNEC/CDACC",
      requirements: "KCSE grade C- or above",
      href: "/programs/fashion/fashion-design-diploma"
    },
    {
      title: "Fashion & Design - Certificate", 
      description: "6-term certificate program building practical skills in garment construction and design.",
      duration: "6 Terms",
      level: "Certificate",
      certification: "KNEC/CDACC",
      requirements: "KCSE grade D or above",
      href: "/programs/fashion/fashion-design-certificate"
    },
    {
      title: "Fashion & Design - Artisan",
      description: "3-term artisan program focusing on basic tailoring and dressmaking skills.",
      duration: "3 Terms", 
      level: "Artisan",
      certification: "KNEC/CDACC",
      requirements: "KCSE grade D- and below",
      href: "/programs/fashion/fashion-design-artisan"
    },
    {
      title: "Fashion & Design Grade I, II & III",
      description: "5-term progressive program covering fashion fundamentals to advanced techniques.",
      duration: "5 Terms",
      level: "Grade",
      certification: "NITA",
      requirements: "Open entry",
      href: "/programs/fashion/fashion-design-grades"
    },
    {
      title: "Dressmaking/Tailoring",
      description: "3-month intensive course in professional dressmaking and tailoring techniques.",
      duration: "3 Months",
      level: "Short Course",
      certification: "INTERNAL",
      requirements: "Open entry",
      href: "/programs/fashion/dressmaking-tailoring"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={fashionImage} 
              alt="Fashion design workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Scissors className="w-16 h-16 text-accent mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">School of Fashion & Design</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Unleash your creativity and master the art of fashion design. From pattern making to garment 
                construction, develop skills that turn your fashion vision into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Fashion & Design Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master the creative and technical skills needed to excel in Kenya's growing fashion industry.
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
              ))}
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12">What You'll Learn</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Palette className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design & Creativity</h3>
                      <p className="text-muted-foreground">
                        Fashion illustration, color theory, trend analysis, and creative design development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Scissors className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                      <p className="text-muted-foreground">
                        Pattern drafting, cutting techniques, garment construction, and finishing methods.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Business Skills</h3>
                      <p className="text-muted-foreground">
                        Entrepreneurship, fashion marketing, costing, and small business management.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Practice</h3>
                      <p className="text-muted-foreground">
                        Industry standards, quality control, client relations, and portfolio development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title mb-12">Career Opportunities</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scissors className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fashion Designer</h3>
                  <p className="text-muted-foreground text-sm">Create original designs for clothing, accessories, and fashion collections.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Tailor/Dressmaker</h3>
                  <p className="text-muted-foreground text-sm">Provide custom tailoring and dressmaking services for clients.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fashion Entrepreneur</h3>
                  <p className="text-muted-foreground text-sm">Start your own fashion business or clothing brand.</p>
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

export default FashionPrograms;