import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import johnKamauImage from "@/assets/alumni/john-kamau.jpg";
import graceWanjikuImage from "@/assets/alumni/grace-wanjiku.jpg";
import peterOtienoImage from "@/assets/alumni/peter-otieno.jpg";
import samuelKiprotichImage from "@/assets/alumni/samuel-kiprotich.jpg";
import janeAkinyiImage from "@/assets/alumni/jane-akinyi.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const headerRef = useScrollReveal();
  const statsRef = useScrollReveal({ delay: 0.2 });
  const carouselRef = useScrollReveal({ delay: 0.3 });
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 4000, // Slower on mobile
      stopOnInteraction: false, 
      stopOnMouseEnter: true 
    })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayPlugin.current]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  const testimonials = [
    {
      name: "John Kamau",
      role: "Heavy Plant Operator",
      company: "Kenya Power",
      image: johnKamauImage,
      content: "IPMTTI transformed my career completely. The hands-on training with real machinery gave me the confidence and skills I needed. Within 3 months of graduation, I landed a job as a heavy plant operator with Kenya Power.",
      rating: 5,
      course: "Heavy Plant Operation"
    },
    {
      name: "Peter Otieno",
      role: "Automotive Technician",
      company: "Toyota Kenya",
      image: peterOtienoImage,
      content: "The mechanics program at IPMTTI is top-notch. The workshop facilities are modern and the instructors ensure every student gets practical experience. I'm now working at Toyota Kenya as a senior technician.",
      rating: 5,
      course: "Auto Mechanics"
    },
    {
      name: "Samuel Kiprotich",
      role: "Web Developer",
      company: "Tech Startup",
      image: samuelKiprotichImage,
      content: "The ICT program opened doors I never knew existed. The instructors kept up with current technology trends and the practical projects prepared us for real work scenarios. I now work for a leading tech company.",
      rating: 5,
      course: "ICT & Computing"
    },
    {
      name: "Jane Akinyi",
      role: "Professional Welder",
      company: "Construction Industry",
      image: janeAkinyiImage,
      content: "As a woman in welding, IPMTTI provided a supportive environment where I could learn and excel. The certification I received is recognized industry-wide, and I'm now working on major construction projects.",
      rating: 5,
      course: "Welding Certification"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header ref={headerRef as React.RefObject<HTMLElement>} className="section-header">
          <h2 className="section-title">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers and built successful 
            futures through our comprehensive training programs.
          </p>
        </header>

        {/* Statistics */}
        <div ref={statsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
            <div className="text-muted-foreground">Graduates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Student Rating</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div ref={carouselRef as React.RefObject<HTMLDivElement>} className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="relative overflow-hidden transition-smooth hover:shadow-brand hover:-translate-y-2 h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <Quote className="w-12 h-12 text-primary" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-accent" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-card-foreground mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Profile */}
                      <div className="flex items-center space-x-4 mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name} - ${testimonial.course} Graduate`}
                            className="w-full h-full object-cover"
                            loading="eager"
                            width="48"
                            height="48"
                            decoding="async"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-card-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                          <div className="text-xs text-accent font-medium">
                            {testimonial.course} Graduate
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who chose IPMTTI for their career transformation. 
              Your success story starts with the right training.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="hero"
                asChild
              >
                <a href="/apply">Start Your Journey Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;