import { Truck, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import drivingTrainingBg from "@/assets/gallery/heavy-machinery-training.jpg";

const DrivingPlantOperation = () => {
  const programs = [
    {
      id: "driving",
      title: "Driving Classes",
      description: "Professional driving lessons across multiple categories with NTSA certification",
      duration: "3 weeks each",
      examBody: "NTSA",
      categories: ["A2 (Motorcycle)", "B1 (Light Vehicle)", "C1 (Light Truck)", "D1 (Van/PSV)"],
      link: "/courses/driving-classes"
    },
    {
      id: "plant-operator", 
      title: "Plant Operator Training",
      description: "Hands-on training on heavy machinery: excavators, forklifts, graders, rollers, backhoes, shovels and farm tractors",
      duration: "1-8 weeks",
      examBody: "NTSA",
      categories: ["One Machine (1 week)", "Three Machines (4 weeks)", "Six Machines (8 weeks)"],
      link: "/courses/plant-operator"
    }
  ];

  const expectations = [
    "Hands-on practical training with real equipment",
    "Industry-relevant curriculum designed for employment",
    "Experienced and supportive NTSA-certified instructors",
    "Access to modern driving simulators and machinery",
    "Flexible scheduling including weekend classes",
    "Job placement assistance and career guidance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src={drivingTrainingBg}
              alt="Heavy machinery and driving training" 
              className="w-full h-full object-cover animate-scale-in"
              style={{ animationDuration: '1.5s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
          </div>
          <div className="relative container mx-auto px-4 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                School of Driving & Plant Operation
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto">
                Your training ground for professional driving and heavy equipment operation. 
                Thousands of graduates have succeeded with skills that pay.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our specialized training programs designed for different skill levels and career goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        <span>Certified by: {program.examBody}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Categories Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.categories.map((category) => (
                          <Badge key={category} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link to={program.link}>
                      <Button className="w-full group/btn">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
                    Our School of Driving & Plant Operation is the premier training facility for 
                    professional driving and heavy equipment operation in Kenya. With NTSA accreditation 
                    and state-of-the-art facilities, we provide affordable, comprehensive programs.
                  </p>
                  <p>
                    We equip learners with real-world skills in driving and heavy machine operation 
                    for construction, transport, agriculture, and public works sectors. Our graduates 
                    are highly sought after by employers across the country.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Badge variant="secondary" className="text-sm">NTSA Accredited</Badge>
                  <Badge variant="secondary" className="text-sm">Industry Equipment</Badge>
                  <Badge variant="secondary" className="text-sm">Job Placement</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center p-6 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-muted-foreground">Pass Rate</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary mb-2">2000+</div>
                  <div className="text-muted-foreground">Graduates</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive approach ensures you're job-ready upon graduation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expectations.map((expectation, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{expectation}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have built careers with our training programs.
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

export default DrivingPlantOperation;