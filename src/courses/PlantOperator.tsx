import { Truck, Clock, Users, Award, CheckCircle, ArrowRight, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import excavatorBackhoe from "@/assets/gallery/excavator-backhoe-training.jpg";
import motorGrader from "@/assets/gallery/motor-grader-training.jpg";
import roadRollerTraining from "@/assets/gallery/road-roller-training.jpg";
import forkliftTraining from "@/assets/forklift-training.jpg";
import backhoeOperation from "@/assets/gallery/backhoe-operation-demo.jpg";
import frontLoaderTraining from "@/assets/gallery/front-loader-training.jpg";
import heavyMachineryGeneric from "@/assets/heavy-machinery.jpg";

const PlantOperator = () => {
  const programs = [
    {
      name: "One Machine Program",
      duration: "1 week",
      description: "Focused training on a single machine type",
      machines: ["Choose any 1 machine from available options"],
      price: "Contact for pricing"
    },
    {
      name: "Three Machines Program", 
      duration: "4 weeks",
      description: "Comprehensive training on three different machines",
      machines: ["Choose any 3 machines from available options"],
      price: "Contact for pricing"
    },
    {
      name: "Six Machines Program",
      duration: "8 weeks", 
      description: "Complete plant operator certification",
      machines: ["Training on all 7 available machines"],
      price: "Contact for pricing"
    }
  ];

  const machines = [
    {
      name: "Excavator",
      image: excavatorBackhoe,
      uses: [
        "Digging trenches",
        "Excavation in quarries",
        "Loading lorries",
        "Demolishing buildings"
      ]
    },
    {
      name: "Grader (Road Machine)",
      image: motorGrader,
      uses: [
        "Grading roads",
        "Leveling",
        "Mixing materials (murram and cement)",
        "High banking"
      ]
    },
    {
      name: "Drum Roller",
      image: roadRollerTraining,
      uses: [
        "Compaction",
        "Leveling"
      ]
    },
    {
      name: "Forklift",
      image: forkliftTraining,
      uses: [
        "Loading and offloading materials",
        "Moving materials",
        "Lifting to high places",
        "Transporting containers (ports)",
        "Carrying luggage (airports)"
      ]
    },
    {
      name: "Backhoe",
      image: backhoeOperation,
      sections: [
        {
          title: "Front Bucket:",
          uses: [
            "Carrying and loading materials",
            "Leveling"
          ]
        },
        {
          title: "Hoe:",
          uses: [
            "Digging trenches",
            "Demolishing minor constructions",
            "Constructing sewage lines",
            "Dumping site work"
          ]
        }
      ]
    },
    {
      name: "Shovel",
      image: frontLoaderTraining,
      uses: [
        "Leveling",
        "Carrying materials",
        "Loading",
        "Demolishing",
        "Clearing vegetation",
        "Quarry/construction use"
      ]
    },
    {
      name: "Agricultural (Farm) Tractor",
      image: heavyMachineryGeneric,
      uses: [
        "Ploughing",
        "Harrowing",
        "Transporting materials",
        "Planting",
        "Cutting and rolling grass"
      ]
    }
  ];

  const safetyTopics = [
    "Pre-operation safety checks and inspections",
    "Personal protective equipment (PPE) requirements",
    "Safe operating procedures and best practices",
    "Emergency shutdown and response procedures",
    "Site safety awareness and hazard identification",
    "Equipment maintenance and daily servicing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/90 to-accent/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                <img src={ntsaLogo} alt="NTSA Logo" className="h-16 w-auto" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Plant Operator Training
              </h1>
              <p className="text-xl text-white drop-shadow-md max-w-4xl mx-auto mb-8">
                Hands-on training on heavy machinery including excavators, forklifts, graders, 
                rollers, backhoes, shovels and farm tractors with comprehensive safety training.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-white/30 text-white border-white/50 backdrop-blur-sm">NTSA Certified</Badge>
                <Badge className="bg-white/30 text-white border-white/50 backdrop-blur-sm">Real Equipment</Badge>
                <Badge className="bg-white/30 text-white border-white/50 backdrop-blur-sm">Safety First</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-accent/10 rounded-lg">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-2">1-8 Weeks</div>
                <div className="text-muted-foreground">Flexible Duration</div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-2">7 Types</div>
                <div className="text-muted-foreground">Heavy Machines</div>
              </div>
              <div className="text-center p-6 bg-secondary/10 rounded-lg">
                <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-2">NTSA</div>
                <div className="text-muted-foreground">Certification</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our Plant Operator Training provides comprehensive hands-on experience with heavy 
                  construction machinery. Students learn proper operation techniques, safety protocols, 
                  and maintenance procedures under the supervision of experienced instructors.
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
                    <h3 className="font-semibold text-lg mb-2">Certification</h3>
                    <p className="text-muted-foreground">NTSA Plant Operator Certificate</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Safety Training Includes</h3>
                <div className="space-y-3">
                  {safetyTopics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Program</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the training duration that matches your career goals and time availability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <div className="text-2xl font-bold text-accent">{program.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">
                      {program.description}
                    </p>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Includes:</h4>
                      {Array.isArray(program.machines) ? (
                        program.machines.map((machine, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span className="text-muted-foreground">{machine}</span>
                          </div>
                        ))
                      ) : (
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{program.machines}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Link to="/contact" className="block text-center font-medium text-primary hover:underline">
                        {program.price}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Available Machines */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Heavy Machinery Training</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn to operate industry-standard heavy equipment used in construction, agriculture, and public works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={(machine as any).image}
                      alt={`${machine.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                      {machine.name}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    {"sections" in machine ? (
                      <div className="space-y-4">
                        {(machine as any).sections.map((section: any, sIdx: number) => (
                          <div key={sIdx}>
                            <h4 className="font-semibold text-primary mb-2">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.uses.map((use: string, uIdx: number) => (
                                <li key={uIdx} className="flex items-start text-muted-foreground">
                                  <span className="text-accent mr-2">•</span>
                                  <span>{use}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {(machine as any).uses.map((use: string, uIdx: number) => (
                          <li key={uIdx} className="flex items-start text-muted-foreground">
                            <span className="text-accent mr-2 text-lg">•</span>
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">This Course is For You If:</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You want to work in construction or heavy industry</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You enjoy hands-on, practical work</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You want to earn a skilled trade certification</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">You're looking for high-demand job skills</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Admission Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Original National ID or Passport</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">3 recent passport size photos</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">School fee payment slip</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Heavy Machinery Career
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our plant operator training program and gain the skills employers demand 
              in construction and heavy industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline-hero" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlantOperator;