import { Truck, Clock, Users, Award, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DrivingClasses = () => {
  const categories = [
    {
      code: "A2",
      name: "Light Motorcycle",
      description: "≥50cc engine capacity, 1 passenger allowed",
      minimumAge: 18,
      duration: "3 weeks",
      practicalHours: "15 hours"
    },
    {
      code: "B1", 
      name: "Light Vehicle",
      description: "Private cars, ≤7 passengers including driver",
      minimumAge: 18,
      duration: "3 weeks",
      practicalHours: "20 hours"
    },
    {
      code: "C1",
      name: "Light Truck", 
      description: "≤7,500kg Gross Vehicle Weight",
      minimumAge: 22,
      duration: "3 weeks",
      practicalHours: "25 hours"
    },
    {
      code: "D1",
      name: "Van/PSV",
      description: "Public Service Vehicle, ≤14 passengers", 
      minimumAge: 22,
      duration: "3 weeks",
      practicalHours: "30 hours"
    }
  ];

  const programHighlights = [
    "Professional road skills development",
    "Comprehensive theory and practical lessons", 
    "Mock tests and exam preparation",
    "Experienced NTSA-certified instructors",
    "Modern training vehicles and equipment",
    "Flexible scheduling including weekends",
    "Highway and city driving experience",
    "Defensive driving techniques"
  ];

  const admissionRequirements = [
    "Original National ID or Passport",
    "3 recent passport size photos",
    "Active eCitizen account", 
    "School fee payment slip or receipt",
    "Medical certificate (for commercial licenses)",
    "Good conduct certificate (for PSV licenses)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Driving Classes
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Master road skills with professional lessons and pass your driving test with confidence. 
                NTSA-certified training across all license categories.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-white/20 text-white border-white/30">NTSA Certified</Badge>
                <Badge className="bg-white/20 text-white border-white/30">All Categories</Badge>
                <Badge className="bg-white/20 text-white border-white/30">95% Pass Rate</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-2">3 Weeks</div>
                <div className="text-muted-foreground">Duration per Category</div>
              </div>
              <div className="text-center p-6 bg-accent/10 rounded-lg">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center p-6 bg-secondary/10 rounded-lg">
                <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-2">NTSA</div>
                <div className="text-muted-foreground">Certified Body</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our comprehensive driving program covers everything from basic vehicle operation 
                  to advanced road safety techniques. With experienced instructors and modern training 
                  vehicles, we ensure you're fully prepared for both the NTSA test and real-world driving.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Faculty</h3>
                    <p className="text-muted-foreground">Driving & Plant Operator School</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Entry Requirements</h3>
                    <p className="text-muted-foreground">Open to all qualifying applicants</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Start Dates</h3>
                    <p className="text-muted-foreground">Ongoing intake - Start any Monday</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
                <div className="space-y-3">
                  {programHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* License Categories */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">License Categories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the category that matches your career goals and age requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.code} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      {category.code}
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center">
                      {category.description}
                    </p>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Min. Age:</span>
                        <span className="font-medium">{category.minimumAge} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{category.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Practice:</span>
                        <span className="font-medium">{category.practicalHours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Admission Requirements</h2>
                <p className="text-lg text-muted-foreground">
                  Simple requirements to get you started on your driving journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {admissionRequirements.map((requirement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-2" />
                      This Course is For You If:
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You want to learn professional driving skills</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You need a driving license for employment</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You want to start a transport business</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You prefer hands-on, practical training</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You want to pass your test on the first try</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Accommodation</h3>
                <p className="text-muted-foreground">
                  Optional accommodation is available for out-of-town students at an additional fee. 
                  Contact our admissions office for rates and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Your License?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your driving journey today with Kenya's most trusted driving school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/apply">Apply Now</a>
              </Button>
              <Button size="lg" variant="outline-hero" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DrivingClasses;