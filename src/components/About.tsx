import { Award, Users, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import nitaLogo from "@/assets/nita-logo.png";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import knecLogo from "@/assets/knec-logo.png";

const About = () => {
  const schools = [
    { name: "School of Driving & Plant Operation", programs: "driving, heavy plant operation" },
    { name: "School of Engineering", programs: "masonry, plumbing, welding, electricals, mechanics" },
    { name: "School of Computing & Informatics", programs: "ICT, programming, web design, computer packages" },
    
  ];

  const reasons = [
    "Practical, hands-on training with real industry equipment",
    "Accredited by NITA & NTSA",
    "Wide range of programs tailored to today's job market",
    "Experienced trainers with industry backgrounds",
    "Over 6 years of impact, with hundreds of alumni succeeding across Kenya and beyond"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Who We Are</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to the <strong>International Plant Machinery & Technical Training Institute (IPMTTI)</strong>, 
                a leading vocational and technical training institute located in Thika, Kiambu County, Kenya. 
                For over 6 years, IPMTTI has been committed to equipping students with hands-on skills and 
                industry-ready knowledge that prepare them for successful careers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-primary/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years Excellence</div>
            </div>
            <div className="text-center p-6 bg-accent/10 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">2000+</div>
              <div className="text-muted-foreground">Alumni</div>
            </div>
            <div className="text-center p-6 bg-secondary/10 rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-2">5</div>
              <div className="text-muted-foreground">Schools</div>
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Job Placement</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary/5 border-primary/20">
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

          <Card className="bg-accent/5 border-accent/20">
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

        {/* Accreditation */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Accreditation</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              IPMTTI is proudly registered and accredited by the National Industrial Training Authority (NITA) and recognized by the National Transport and Safety Authority (NTSA), ensuring our programs meet national industry standards.<br /><br />
              NITA – National Industrial Training Authority<br />
              NTSA – National Transport and Safety Authority<br />
              KNEC – Kenya National Examinations Council
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a 
              href="https://www.nita.go.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-105"
            >
              <img 
                src={nitaLogo} 
                alt="NITA – National Industrial Training Authority"
                className="h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a 
              href="https://www.ntsa.go.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-105"
            >
              <img 
                src={ntsaLogo} 
                alt="NTSA – National Transport and Safety Authority"
                className="h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a 
              href="https://www.knec.ac.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-105"
            >
              <img 
                src={knecLogo} 
                alt="KNEC – Kenya National Examinations Council"
                className="h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">What We Offer</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-card-foreground mb-2">{school.name}</h4>
                  <p className="text-sm text-muted-foreground">{school.programs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Why Choose Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;