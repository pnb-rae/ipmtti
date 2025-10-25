import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, CreditCard, Users } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application form with your personal details and course preferences."
    },
    {
      icon: CheckCircle,
      title: "Document Verification",
      description: "Provide required documents: ID copy, passport photos, and academic certificates."
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay registration fee through M-Pesa or bank transfer to secure your spot."
    },
    {
      icon: Users,
      title: "Orientation",
      description: "Attend orientation session and begin your journey to career success."
    }
  ];

  const requirements = [
    "Valid Kenyan ID or passport",
    "3 passport-size photographs",
    "KCPE/KCSE certificate (for applicable courses)",
    "Completed application form",
    "Registration fee payment"
  ];

  return (
    <section id="admissions" className="py-20 bg-background scroll-reveal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Start Your Journey Today</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Apply today and take the first step toward your career success. Admissions are open for January 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Application Steps */}
          <div>
            <h3 className="text-2xl font-bold text-card-foreground mb-8">Application Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements & Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Entry Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-card-foreground">
                  <Calendar className="w-5 h-5 text-accent animate-pulse" />
                  <span>Important Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg animate-slide-in-right transition-smooth hover:scale-105">
                  <span className="font-medium text-card-foreground">Next Intake</span>
                  <span className="text-accent font-bold">January 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg animate-fade-in transition-smooth hover:scale-105" style={{ animationDelay: '0.1s' }}>
                  <span className="font-medium text-card-foreground">Application Deadline</span>
                  <span className="text-muted-foreground">January 2026</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg animate-fade-in transition-smooth hover:scale-105" style={{ animationDelay: '0.2s' }}>
                  <span className="font-medium text-card-foreground">Orientation</span>
                  <span className="text-muted-foreground">January 8, 2026</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="py-12 px-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join over 2,000 successful graduates who chose IPMTTI for their career transformation. 
                Your success story starts with the right training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105"
                  asChild
                >
                  <a href="/apply">Apply Now</a>
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 border-2 border-white"
                  asChild
                >
                  <a href="/contact">Get More Information</a>
                </Button>
              </div>
              <p className="text-primary-foreground/80 text-sm mt-6">
                💬 Have questions? Contact us at{' '}
                <a href="tel:+254725782912" className="font-semibold hover:underline">
                  +254 725 782 912
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;