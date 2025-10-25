import { Wrench, Clock, Award, CheckCircle, ArrowRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Engineering = () => {
  const programs = [
    {
      id: "plumbing",
      title: "Plumbing (Grade I, II, III)",
      description: "Become a skilled plumber with comprehensive training in pipe installation, repairs, and system maintenance",
      duration: "3 terms",
      examBody: "NITA",
      level: "Artisan",
      link: "/programs/engineering/plumbing"
    },
    {
      id: "construction-plant-mechanics", 
      title: "Construction Plant Mechanics",
      description: "Learn to maintain, service, and repair heavy construction machinery for industry readiness",
      duration: "3 terms",
      examBody: "NITA", 
      level: "Artisan",
      link: "/programs/engineering/construction-plant-mechanic"
    },
    {
      id: "electrical-wireman",
      title: "Electrical Wireman",
      description: "Master electrical systems, wiring, and troubleshooting for technical career opportunities",
      duration: "3 terms",
      examBody: "NITA",
      level: "Artisan", 
      link: "/programs/engineering/electrical-wireman"
    },
    {
      id: "electrical-installation",
      title: "Electrical Installation",
      description: "Learn electrical installation and safety protocols with artisan-level certification",
      duration: "3 terms",
      examBody: "KNEC",
      level: "Artisan",
      link: "/programs/engineering/electrical-installation"
    },
    {
      id: "masonry",
      title: "Masonry",
      description: "Hands-on skills in brickwork, stonework, and construction techniques",
      duration: "3 terms",
      examBody: "NITA",
      level: "Artisan",
      link: "/programs/engineering/masonry"
    },
    {
      id: "carpentry-joinery",
      title: "Carpentry & Joinery", 
      description: "Develop expertise in furniture making, joinery, and woodwork construction",
      duration: "3 terms",
      examBody: "NITA",
      level: "Artisan",
      link: "/programs/engineering/carpentry-joinery"
    },
    {
      id: "painting",
      title: "Painting",
      description: "Professional painting techniques, surface preparation, and finishing methods",
      duration: "3 months",
      examBody: "NITA",
      level: "Short Course",
      link: "/programs/engineering/painting"
    },
    {
      id: "welding-fabrication",
      title: "Welding & Fabrication",
      description: "Master welding, cutting, and fabrication skills for industrial applications",
      duration: "3 terms", 
      examBody: "NITA",
      level: "Artisan",
      link: "/programs/engineering/welding-fabrication"
    },
    {
      id: "motor-vehicle-electrician",
      title: "Motor Vehicle Electrician",
      description: "Specialize in automotive electrical systems, wiring, and diagnostics",
      duration: "3 terms",
      examBody: "NITA", 
      level: "Artisan",
      link: "/programs/engineering/motor-vehicle-electrician"
    },
    {
      id: "motor-vehicle-mechanic",
      title: "Motor Vehicle Mechanic",
      description: "Comprehensive vehicle repair, servicing, and maintenance training",
      duration: "3 terms",
      examBody: "KNEC",
      level: "Artisan", 
      link: "/programs/engineering/motor-vehicle-mechanic"
    }
  ];

  const expectations = [
    "Practical, skill-based learning with real-world applications", 
    "Supportive learning environment with personalized attention",
    "Experienced instructors with industry backgrounds",
    "Access to modern tools and workshop facilities",
    "Industry-relevant curriculum updated regularly",
    "Job placement assistance and career guidance",
    "Flexible payment plans and affordable fees",
    "Safe learning environment with proper safety protocols"
  ];

  const skills = [
    "Problem-solving and analytical thinking",
    "Hands-on technical expertise",
    "Safety protocols and workplace standards", 
    "Modern tool operation and maintenance",
    "Blueprint reading and technical documentation",
    "Quality control and inspection techniques"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent to-accent-light text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <Wrench className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                School of Engineering
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto">
                Build your future with practical engineering skills that matter. From plumbing to welding, 
                electrical to mechanics - gain job-ready skills with modern tools and expert instruction.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Engineering Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of engineering and technical programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {program.level}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {program.examBody}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {program.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-xs">
                        <Clock className="w-3 h-3 mr-2 text-accent" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <Award className="w-3 h-3 mr-2 text-accent" />
                        <span>Entry: Open</span>
                      </div>
                    </div>

                    <Link to={program.link}>
                      <Button className="w-full group/btn" size="sm">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Our School of Engineering provides comprehensive technical training for aspiring 
                    tradespeople and engineers. We focus on practical, hands-on learning that prepares 
                    students for immediate employment in their chosen fields.
                  </p>
                  <p>
                    With state-of-the-art workshops, experienced instructors, and industry-relevant 
                    curriculum, we ensure our graduates are equipped with the skills employers demand. 
                    Our programs combine theoretical knowledge with extensive practical application.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Badge variant="secondary" className="text-sm">NITA & KNEC Accredited</Badge>
                  <Badge variant="secondary" className="text-sm">Modern Workshops</Badge>
                  <Badge variant="secondary" className="text-sm">Industry Equipment</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">400+</div>
                  <div className="text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10</div>
                  <div className="text-muted-foreground">Specializations</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">92%</div>
                  <div className="text-muted-foreground">Job Placement</div>
                </div>
                <div className="text-center p-6 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">What to Expect</h2>
                <div className="space-y-4">
                  {expectations.map((expectation, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{expectation}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Skills You'll Develop</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Engineering Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our engineering programs and develop the practical skills that employers value. 
              Start building your technical career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/apply">Apply Now</a>
              </Button>
              <Button size="lg" variant="outline-hero" asChild>
                <a href="/downloads/ipmtti-brochure.pdf" download>Download Brochure</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Engineering;