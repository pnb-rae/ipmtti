import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import graduationCertificateCeremony from "@/assets/gallery/graduation-certificate-ceremony.jpg";
import graduationCelebration from "@/assets/gallery/graduation-celebration.jpg";
import graduationStudentsCloseup from "@/assets/gallery/graduation-students-closeup.jpg";

const NewsEventsPreview = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Plant Operator Training",
      description: "Comprehensive heavy machinery operation courses including excavators, graders, and forklifts",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "NTSA Certified Programs",
      description: "Industry-recognized certifications for professional equipment operators",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Hands-On Training",
      description: "Real-world practice with modern construction and agricultural equipment",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest training programs, certifications, and industry news
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured: Graduation Ceremony */}
        <div className="mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow border-accent/20">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Section */}
              <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-8 h-8 text-accent" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">Upcoming Event</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Us for Graduation Ceremony 2025
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We are excited to announce our upcoming graduation ceremony! Join us as we celebrate our students who will be completing their training programs in Plant Operation, Motor Vehicle Mechanics, ICT, and more. This special occasion will honor their achievements and mark the beginning of their professional careers with industry-recognized certifications from NITA, NTSA, and KNEC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Industry Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Career Ready Graduates</span>
                  </div>
                </div>
              </div>

              {/* Photo Gallery Section */}
              <div className="grid grid-cols-2 gap-2 p-2 bg-muted/20">
                <div className="col-span-2 overflow-hidden rounded-lg">
                  <img 
                    src={graduationCertificateCeremony} 
                    alt="Graduate receiving certificate during graduation ceremony"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={graduationCelebration} 
                    alt="Graduates celebrating with balloons at graduation ceremony"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={graduationStudentsCloseup} 
                    alt="Graduates in caps and gowns during ceremony"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/plant-operator-training">
            <Button size="lg" className="group">
              Explore Plant Operator Training
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsPreview;
