import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import heavyMachineryImage from "@/assets/heavy-machinery.jpg";
import excavatorBackhoe from "@/assets/gallery/excavator-backhoe-training.jpg";
import motorGrader from "@/assets/gallery/motor-grader-training.jpg";
import rollerTraining from "@/assets/gallery/road-roller-training.jpg";
import forkliftTraining from "@/assets/forklift-training.jpg";
import backhoeOperation from "@/assets/gallery/backhoe-operation-demo.jpg";
import loaderTraining from "@/assets/gallery/front-loader-training.jpg";

const PlantOperatorTraining = () => {
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
      image: rollerTraining,
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
        "Moving materials within sites",
        "Lifting materials to high places",
        "Transporting containers at ports",
        "Carrying luggage at airports"
      ]
    },
    {
      name: "Backhoe",
      image: backhoeOperation,
      sections: [
        {
          title: "Front Bucket:",
          uses: [
            "Carrying materials",
            "Loading lorries",
            "Levelling"
          ]
        },
        {
          title: "Hoe:",
          uses: [
            "Digging trenches",
            "Demolishing minor constructions",
            "Constructing sewage lines",
            "Loading and dumping",
            "Working at dumping sites"
          ]
        }
      ]
    },
    {
      name: "Shovel",
      image: loaderTraining,
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
      image: heavyMachineryImage,
      uses: [
        "Ploughing",
        "Harrowing",
        "Transporting materials",
        "Planting",
        "Cutting and rolling grass"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plant Operator Training - Heavy Machinery Operation | IPMTTI"
        description="Professional plant operator training at IPMTTI. Learn to operate excavators, graders, rollers, forklifts, backhoes, and more. NTSA-certified heavy machinery courses in Thika, Kenya."
        keywords="plant operator training, heavy machinery operation, excavator training, grader training, forklift certification, backhoe operation, NTSA training, construction equipment, Kenya"
        canonical="/plant-operator-training"
      />
      <Header />

      <main>
        {/* Hero Section with Yellow Theme */}
        <section className="relative py-20 overflow-hidden">
          {/* Yellow gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* NTSA Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src={ntsaLogo} 
                  alt="NTSA - National Transport and Safety Authority" 
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Plant Operator Training
              </h1>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  At IPMTTI, our Plant Operator training equips you with practical skills in handling heavy machinery 
                  safely and effectively. Whether you want to work in construction, roads, quarries, airports, or farms, 
                  we have the right program for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Machinery Training Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
                Heavy Machinery Training
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn to operate industry-standard heavy equipment used in construction, agriculture, and public works.
              </p>
            </div>

            {/* Machines Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={machine.image} 
                      alt={`${machine.name} training at IPMTTI`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {machine.name}
                    </h3>
                  </div>
                  
                  <CardContent className="p-6">
                    {machine.sections ? (
                      // Backhoe with sections
                      <div className="space-y-4">
                        {machine.sections.map((section, sIdx) => (
                          <div key={sIdx}>
                            <h4 className="font-semibold text-primary mb-2">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.uses.map((use, uIdx) => (
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
                      // Regular machines with uses
                      <ul className="space-y-2">
                        {machine.uses.map((use, uIdx) => (
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

        {/* Contact & Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="shadow-2xl border-2 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                    Ready to Start Your Training?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    For pricing details and course schedules, get in touch with our admissions team today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact">
                      <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                        Contact Us
                      </Button>
                    </a>
                    <a href="/apply">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                        Apply Now
                      </Button>
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
                      <a href="tel:+254725782912" className="hover:text-primary transition-colors">
                        📞 +254 725 782 912
                      </a>
                      <a href="https://wa.me/254725782912" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        💬 WhatsApp
                      </a>
                      <a href="mailto:international.machinery.inst@gmail.com" className="hover:text-primary transition-colors">
                        ✉️ Email Us
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlantOperatorTraining;
