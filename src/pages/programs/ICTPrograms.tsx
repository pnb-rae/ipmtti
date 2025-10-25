import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Clock, Award, Users, Code, Database } from "lucide-react";
import ictImage from "@/assets/ict-student-learning.jpg";

const ICTPrograms = () => {
  const programs = [
    {
      title: "Information Communication Technology - Craft Certificate",
      description: "Comprehensive 6-term program building competence in computer systems, software applications, and networking.",
      duration: "6 Terms",
      level: "Craft Certificate",
      certification: "KNEC/CDACC",
      requirements: "KCSE grade D or above",
      href: "/programs/ict/ict-craft"
    },
    {
      title: "Computer Programming",
      description: "6-month intensive course covering programming fundamentals and software development skills.",
      duration: "6 Months",
      level: "Short Course",
      certification: "INTERNAL",
      requirements: "KCSE grade D+ or above",
      href: "/programs/ict/computer-programming"
    },
    {
      title: "Web Design",
      description: "3-month course focusing on modern web design principles, HTML, CSS, and responsive design.",
      duration: "3 Months",
      level: "Short Course", 
      certification: "INTERNAL",
      requirements: "Open entry",
      href: "/programs/ict/web-design"
    },
    {
      title: "Computer Packages",
      description: "6-week intensive training in essential computer applications and office productivity tools.",
      duration: "6 Weeks",
      level: "Short Course",
      certification: "INTERNAL",
      requirements: "Open entry",
      href: "/programs/ict/computer-packages"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src={ictImage} 
              alt="ICT training classroom" 
              className="w-full h-full object-cover animate-scale-in"
              style={{ animationDuration: '1.5s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
          </div>
          <div className="relative container mx-auto px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Monitor className="w-16 h-16 text-accent mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">School of Computing & Informatics</h1>
              </div>
              <p className="text-xl text-white/90 leading-relaxed">
                Master digital technologies and computing skills that are in high demand. 
                Prepare for careers in IT support, software development, and digital services.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">ICT & Computing Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From basic computer literacy to advanced programming, develop the digital skills 
                that drive Kenya's growing technology sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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

        {/* What You'll Learn */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title mb-12">Digital Skills You'll Master</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Monitor className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hardware & Systems</h3>
                      <p className="text-muted-foreground">
                        Computer hardware, operating systems, troubleshooting, and system maintenance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Code className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Programming & Development</h3>
                      <p className="text-muted-foreground">
                        Programming languages, software development, and web development technologies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Database className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Networks & Databases</h3>
                      <p className="text-muted-foreground">
                        Network administration, database management, and internet technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Business Applications</h3>
                      <p className="text-muted-foreground">
                        Office productivity, business software, and IT entrepreneurship skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title mb-12">Your ICT Career Path</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">IT Support</h3>
                  <p className="text-muted-foreground text-sm">Technical support and system administration roles.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Web Developer</h3>
                  <p className="text-muted-foreground text-sm">Create websites and web applications for businesses.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Entry Specialist</h3>
                  <p className="text-muted-foreground text-sm">Manage databases and information systems.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Tech Entrepreneur</h3>
                  <p className="text-muted-foreground text-sm">Start your own tech business or consultancy.</p>
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

export default ICTPrograms;