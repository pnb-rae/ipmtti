import { Award, Users, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import nitaLogo from "@/assets/nita-logo.png";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import knecLogo from "@/assets/knec-logo.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutPreview = () => {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ delay: 0.2 });
  const missionRef = useScrollReveal({ delay: 0.3 });
  const accreditationRef = useScrollReveal({ delay: 0.4 });
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header ref={headerRef as React.RefObject<HTMLElement>} className="section-header">
          <h2 className="section-title">About IPMTTI</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands of students choose IPMTTI for their technical education journey
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div ref={contentRef as React.RefObject<HTMLDivElement>}>
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Who We Are</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                International Plant Machinery & Technical Training Institute (IPMTTI) is a leading vocational 
                and technical training institute located in Thika, Kiambu County, Kenya. For over 6 years, 
                we have been committed to equipping students with hands-on skills and industry-ready 
                knowledge that prepare them for successful careers.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to excellence has made us a trusted name in technical education, 
                with thousands of graduates now working across various industries in Kenya and beyond.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 scroll-reveal-item">
            <div className="text-center p-6 bg-primary/10 rounded-lg transition-smooth hover:shadow-brand hover:-translate-y-2 count-up">
              <div className="text-3xl font-bold text-primary mb-2" data-target="6">6+</div>
              <div className="text-muted-foreground">Years Excellence</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg transition-smooth hover:shadow-brand hover:-translate-y-2 count-up">
              <div className="text-3xl font-bold text-accent mb-2" data-target="2000">2000+</div>
              <div className="text-muted-foreground">Alumni</div>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-lg transition-smooth hover:shadow-brand hover:-translate-y-2 count-up">
              <div className="text-3xl font-bold text-secondary mb-2" data-target="6">6</div>
              <div className="text-muted-foreground">Schools</div>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg transition-smooth hover:shadow-brand hover:-translate-y-2 count-up">
              <div className="text-3xl font-bold text-primary mb-2" data-target="98">98%</div>
              <div className="text-muted-foreground">Job Placement</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Preview */}
        <div ref={missionRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-primary/5 border-primary/20 transition-smooth hover:shadow-brand hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-card-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower learners with practical, market-driven training that builds competence, 
                confidence, and character for the modern workplace.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20 transition-smooth hover:shadow-brand hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-card-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be a premier center of excellence in technical and vocational education, 
                producing skilled professionals who transform industries and communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Accreditation Section */}
        <div ref={accreditationRef as React.RefObject<HTMLDivElement>} className="mb-12">
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">Our Accreditation</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                IPMTTI is proudly registered and accredited by the National Industrial Training Authority (NITA), 
                Kenya National Examinations Council (KNEC), and recognized by the National Transport and Safety Authority (NTSA), 
                ensuring our programs meet national industry standards.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center">
                  <a 
                    href="https://www.nita.go.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-110"
                  >
                    <img 
                      src={nitaLogo} 
                      alt="NITA - National Industrial Training Authority" 
                      className="h-16 w-auto object-contain mx-auto mb-2 bg-white rounded-lg p-2 shadow-md"
                    />
                    <p className="text-xs text-muted-foreground font-medium">NITA – National Industrial<br />Training Authority</p>
                  </a>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://www.ntsa.go.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-110"
                  >
                    <img 
                      src={ntsaLogo} 
                      alt="NTSA - National Transport and Safety Authority" 
                      className="h-16 w-auto object-contain mx-auto mb-2 bg-white rounded-lg p-2 shadow-md"
                    />
                    <p className="text-xs text-muted-foreground font-medium">NTSA – National Transport<br />and Safety Authority</p>
                  </a>
                </div>

                <div className="text-center">
                  <a 
                    href="https://www.knec.ac.ke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-110"
                  >
                    <img 
                      src={knecLogo} 
                      alt="KNEC - Kenya National Examinations Council" 
                      className="h-16 w-auto object-contain mx-auto mb-2 bg-white rounded-lg p-2 shadow-md"
                    />
                    <p className="text-xs text-muted-foreground font-medium">KNEC – Kenya National<br />Examinations Council</p>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learn More Button */}
        <div className="text-center scroll-reveal-item">
          <Button asChild size="lg" className="btn-hero group">
            <a href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;