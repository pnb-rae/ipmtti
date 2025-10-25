import { Award, Users, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import SEOHead from "@/components/SEOHead";
import nitaLogo from "@/assets/nita-logo.png";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import knecLogo from "@/assets/knec-logo.png";

const About = () => {
  const schools = [
    { name: "School of Driving & Plant Operation", programs: "driving, heavy plant operation" },
    { name: "School of Engineering", programs: "masonry, plumbing, welding, electricals, mechanics" },
    { name: "School of Cosmetology", programs: "hairdressing, beauty therapy, nail technology, spa management" },
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
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About IPMTTI | Kenya's Premier Technical Training Institute"
        description="Learn about IPMTTI’s mission, accreditation (NITA, NTSA, KNEC), programs, and hands-on approach to vocational training in Thika, Kenya."
        keywords="About IPMTTI, technical institute Thika, NITA accredited, NTSA, KNEC, vocational training Kenya"
        canonical="/about"
      />
      {/* JSON-LD: AboutPage + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About IPMTTI",
            "url": "https://ipmtti.vercel.app/about",
            "description": "About International Plant Machinery & Technical Training Institute (IPMTTI) in Thika, Kenya",
            "publisher": {
              "@type": "Organization",
              "name": "International Plant Machinery & Technical Training Institute",
              "url": "https://ipmtti.vercel.app"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ipmtti.vercel.app" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ipmtti.vercel.app/about" }
            ]
          })
        }}
      />
      <SocialSidebar />
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                About IPMTTI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our journey of excellence in technical and vocational education, 
                empowering students for over 6 years with industry-ready skills and certifications.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title">Who We Are</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
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
                  <div className="text-3xl font-bold text-secondary mb-2">6</div>
                  <div className="text-muted-foreground">Schools</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Job Placement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title">Our Purpose</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-card-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
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
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To be a premier center of excellence in technical and vocational education, 
                    producing skilled professionals who transform industries and communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Accreditation */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">Our Accreditation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                IPMTTI is proudly registered and accredited by the National Industrial Training Authority (NITA), 
                recognized by the National Transport and Safety Authority (NTSA), and registered with the Kenya National 
                Examinations Council (KNEC), ensuring our programs meet national industry standards.
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-12 mb-16 flex-wrap">
              <a 
                href="https://www.nita.go.ke/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-105"
              >
                <img 
                  src={nitaLogo} 
                  alt="NITA – National Industrial Training Authority"
                  className="h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
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
                  className="h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
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
                  className="h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title">Why Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground font-medium text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <h2 className="section-title">Overview of Schools & Programs</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {schools.map((school, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-card-foreground mb-2">{school.name}</h4>
                    <p className="text-sm text-muted-foreground">{school.programs}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="btn-hero">
                <a href="/schools">
                  Explore All Programs
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;