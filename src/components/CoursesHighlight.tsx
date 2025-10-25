import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Wrench, 
  Monitor, 
  ArrowRight,
  Clock,
  Users,
  Award
} from "lucide-react";
import rollerTraining from "@/assets/roller-training.jpg";
import mechanicTraining from "@/assets/mechanic-training.jpg";
import ictStudentLearning from "@/assets/ict-student-learning.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CoursesHighlight = () => {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal({ delay: 0.2 });
  const courses = [
    {
      icon: Truck,
      title: "Driving & Plant Operation",
      description: "Master heavy plant machinery operation including excavators, bulldozers, cranes, and more.",
      duration: "3-6 months",
      students: "200+",
      image: rollerTraining,
      features: ["Excavator Operation", "Bulldozer Training", "Crane Certification", "Forklift License"],
      color: "from-accent to-accent-light"
    },
    {
      icon: Wrench,
      title: "Engineering & Mechanics",
      description: "Comprehensive training in mechanics, welding, plumbing, and electrical systems.",
      duration: "6-12 months",
      students: "150+",
      image: mechanicTraining,
      features: ["Auto Mechanics", "Welding Certification", "Plumbing", "Electrical Systems"],
      color: "from-primary to-primary-light"
    },
    {
      icon: Monitor,
      title: "ICT & Computing",
      description: "Essential computer skills and technology training for the digital workplace.",
      duration: "3-6 months",
      students: "120+",
      image: ictStudentLearning,
      features: ["Computer Packages", "Web Design", "Programming", "ICT Fundamentals"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header ref={headerRef as React.RefObject<HTMLElement>} className="section-header">
          <h2 className="section-title">
            Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of technical and vocational courses designed 
            to equip you with industry-relevant skills and certifications.
          </p>
        </header>

        {/* Courses Grid */}
        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.title}
                className="course-card group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                    loading="eager"
                    width="400"
                    height="192"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  
                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} enrolled</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <Award className="w-3 h-3 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    to={
                      course.title === "Driving & Plant Operation" ? "/schools/driving-plant-operation" :
                      course.title === "Engineering & Mechanics" ? "/schools/engineering" :
                      course.title === "ICT & Computing" ? "/schools/computing" :
                      "/schools"
                    }
                  >
                    <Button className="w-full group/btn hover:scale-105 transition-all duration-300" variant="outline">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find Your Perfect Course?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We offer customized training programs and corporate solutions. 
              Contact our admissions team to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schools">
                <Button size="lg" variant="secondary">
                  View All Courses
                </Button>
              </Link>
              <Button size="lg" variant="outline-hero">
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHighlight;