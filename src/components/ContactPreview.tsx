import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactPreview = () => {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ delay: 0.2 });
  return (
    <section id="contact-preview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header ref={headerRef as React.RefObject<HTMLElement>} className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Our admissions team is here to help you every step of the way.
          </p>
        </header>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <Card className="hover:shadow-brand transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Call Us</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <a href="tel:+254715016300" className="block hover:text-primary transition-colors">
                  +254 715 016300
                </a>
                <a href="tel:+254723909804" className="block hover:text-primary transition-colors">
                  +254 723 909804
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:shadow-brand transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Email Us</h3>
              <a 
                href="mailto:international.machinery.inst@gmail.com" 
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                international.machinery.inst@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="hover:shadow-brand transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Visit Us</h3>
              <a 
                href="https://maps.app.goo.gl/cYaBmcMoaRATm7Pg8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Happy Valley, Thika
              </a>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="hover:shadow-brand transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Working Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon to Sat<br />
                8:00 a.m. - 5:00 p.m.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Summary */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">Need Quick Help?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have questions about our programs, admissions process, or fee structure? 
            Our experienced admissions counselors are ready to guide you through your options 
            and help you choose the perfect course for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/254725782912" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group">
                WhatsApp Us Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button asChild size="lg" className="btn-hero group">
              <a href="/contact">
                Full Contact Details
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;