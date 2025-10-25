import { Clock, Users, Award, CheckCircle, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface CourseDetail {
  title: string;
  description: string;
  faculty: string;
  duration: string;
  examBody: string;
  level: string;
  entry: string;
  startDates: string;
  overview: string;
  programHighlights: string[];
  whoIsThisFor: string[];
  admissionRequirements: string[];
  accommodation?: string;
  gradientColors: string;
  iconComponent: React.ReactNode;
}

interface CourseDetailTemplateProps {
  course: CourseDetail;
}

const CourseDetailTemplate = ({ course }: CourseDetailTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${course.title} | IPMTTI`}
        description={course.description}
        keywords={`${course.title}, ${course.examBody}, ${course.level}, vocational training, IPMTTI, Thika Kenya`}
        canonical={`/courses/${encodeURIComponent(course.title.toLowerCase().replace(/\s+/g, '-'))}`}
      />
      {/* JSON-LD: Course + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": course.title,
            "description": course.description,
            "provider": {
              "@type": "Organization",
              "name": "International Plant Machinery & Technical Training Institute",
              "sameAs": "https://ipmtti.co.ke"
            },
            "educationalCredentialAwarded": course.level,
            "offers": {
              "@type": "Offer",
              "url": "https://ipmtti.co.ke/apply",
              "availability": "https://schema.org/InStock"
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ipmtti.co.ke" },
              { "@type": "ListItem", "position": 2, "name": "Schools", "item": "https://ipmtti.co.ke/schools" },
              { "@type": "ListItem", "position": 3, "name": course.title }
            ]
          })
        }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className={`py-20 bg-gradient-to-br ${course.gradientColors} text-white`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                {course.iconComponent}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                {course.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-white/20 text-white border-white/30">{course.examBody} Certified</Badge>
                <Badge className="bg-white/20 text-white border-white/30">{course.level} Level</Badge>
                <Badge className="bg-white/20 text-white border-white/30">Practical Training</Badge>
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
                <div className="text-2xl font-bold text-primary mb-2">{course.duration}</div>
                <div className="text-muted-foreground">Duration</div>
              </div>
              <div className="text-center p-6 bg-accent/10 rounded-lg">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-accent mb-2">{course.examBody}</div>
                <div className="text-muted-foreground">Certification Body</div>
              </div>
              <div className="text-center p-6 bg-secondary/10 rounded-lg">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold text-secondary mb-2">{course.level}</div>
                <div className="text-muted-foreground">Qualification Level</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {course.overview}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Faculty</h3>
                    <p className="text-muted-foreground">{course.faculty}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Entry Requirements</h3>
                    <p className="text-muted-foreground">{course.entry}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Start Dates</h3>
                    <p className="text-muted-foreground">{course.startDates}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
                <div className="space-y-3">
                  {course.programHighlights.map((highlight, index) => (
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

        {/* Admission Requirements */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Admission Requirements & Suitability</h2>
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
                      {course.admissionRequirements.map((requirement, index) => (
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
                      {course.whoIsThisFor.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {course.accommodation && (
                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Accommodation
                  </h3>
                  <p className="text-muted-foreground">
                    {course.accommodation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 bg-gradient-to-r ${course.gradientColors} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start This Program?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards your new career. Apply today and join thousands of successful graduates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/apply">Apply Now</a>
              </Button>
              <Button size="lg" variant="outline-hero" asChild>
                <a href="/contact">Contact Admissions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailTemplate;