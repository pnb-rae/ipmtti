import { 
  Truck, 
  Wrench, 
  Scissors, 
  Monitor, 
  Palette
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchoolCard from "@/components/SchoolCard";
import SEOHead from "@/components/SEOHead";

const Schools = () => {
  const schools = [
    {
      title: "School of Driving & Plant Operation",
      description: "Master professional driving and heavy equipment operation with NTSA-accredited programs. Hands-on training with real equipment prepares you for careers in construction, transport, and public works.",
      programCount: 2,
      studentCount: "500+",
      icon: <Truck className="w-6 h-6 text-white" />,
      link: "/schools/driving-plant-operation",
      color: "from-primary to-primary-light"
    },
    {
      title: "School of Engineering",
      description: "Build your future with practical engineering skills. From plumbing to welding, electrical to mechanics - gain hands-on knowledge with modern tools and industry-relevant curriculum.",
      programCount: 10,
      studentCount: "400+",
      icon: <Wrench className="w-6 h-6 text-white" />,
      link: "/schools/engineering",
      color: "from-accent to-accent-light"
    },
    {
      title: "School of Cosmetology",
      description: "Where creativity meets opportunity. Professional beauty training for aspiring stylists and beauty enthusiasts with experienced trainers and personalized instruction.",
      programCount: 9,
      studentCount: "200+",
      icon: <Scissors className="w-6 h-6 text-white" />,
      link: "/schools/cosmetology",
      color: "from-secondary to-secondary-light"
    },
    {
      title: "School of Computing & Informatics",
      description: "Gateway to digital skills covering Microsoft Office, programming, web design, and essential computer literacy for the modern workplace.",
      programCount: 4,
      studentCount: "300+",
      icon: <Monitor className="w-6 h-6 text-white" />,
      link: "/schools/computing",
      color: "from-primary to-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Schools & Programs | IPMTTI"
        description="Explore IPMTTI's Schools: Driving & Plant Operation, Engineering, Cosmetology, and Computing & Informatics. Hands-on, accredited training programs."
        keywords="IPMTTI schools, programs, driving school, plant operator, engineering courses, cosmetology, computing"
        canonical="/schools"
      />
      {/* JSON-LD: FAQ for Schools */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are your programs accredited?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Programs are accredited or recognized by NITA, NTSA and examined by KNEC where applicable." }
              },
              {
                "@type": "Question",
                "name": "Do you offer practical training?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. All programs are hands-on with modern equipment and real-world scenarios." }
              },
              {
                "@type": "Question",
                "name": "Do you have job placement support?",
                "acceptedAnswer": { "@type": "Answer", "text": "We provide industrial attachments and career support. Many graduates secure roles through our partner network." }
              }
            ]
          })
        }}
      />
      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ipmtti.co.ke" },
              { "@type": "ListItem", "position": 2, "name": "Schools & Programs", "item": "https://ipmtti.co.ke/schools" }
            ]
          })
        }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schools & Programs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose from our comprehensive range of technical and vocational training programs 
              designed to equip you with industry-relevant skills and certifications.
            </p>
          </div>
        </section>

        {/* Schools Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schools.map((school, index) => (
                <SchoolCard
                  key={school.title}
                  {...school}
                />
              ))}
            </div>

            {/* Can't Find Your Course Section */}
            <div className="mt-16 text-center max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Can't Find Your Perfect Course?</h3>
                <p className="text-muted-foreground mb-6">
                  We offer customized training programs and corporate solutions. Contact our admissions team to discuss your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/schools">
                    <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                      View All Courses
                    </button>
                  </a>
                  <a href="/contact">
                    <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors">
                      Contact Admissions
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schools;