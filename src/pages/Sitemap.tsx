import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapIcon } from "lucide-react";

const Sitemap = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Admissions", href: "/apply" },
        { name: "Contact Us", href: "/contact" },
        { name: "Gallery", href: "/gallery" },
        { name: "Plant Operator Training", href: "/plant-operator-training" },
        { name: "Blog", href: "/resources/blog" },
        { name: "FAQ", href: "/resources/faq" },
      ]
    },
    {
      title: "Schools & Departments",
      links: [
        { name: "All Schools", href: "/schools" },
        { name: "Driving & Plant Operation", href: "/schools/driving-plant-operation" },
        { name: "Engineering", href: "/schools/engineering" },
        { name: "ICT & Computing", href: "/schools/computing" },
      ]
    },
    {
      title: "Engineering Courses",
      links: [
        { name: "Electrical Installation", href: "/programs/engineering/electrical-installation" },
        { name: "Electrical Wireman", href: "/programs/engineering/electrical-wireman" },
        { name: "Motor Vehicle Mechanic", href: "/programs/engineering/motor-vehicle-mechanic" },
        { name: "Motor Vehicle Electrician", href: "/programs/engineering/motor-vehicle-electrician" },
        { name: "Construction Plant Mechanic", href: "/programs/engineering/construction-plant-mechanic" },
        { name: "Welding & Fabrication", href: "/programs/engineering/welding-fabrication" },
        { name: "Plumbing", href: "/programs/engineering/plumbing" },
        { name: "Carpentry & Joinery", href: "/programs/engineering/carpentry-joinery" },
        { name: "Masonry", href: "/programs/engineering/masonry" },
        { name: "Painting & Decoration", href: "/programs/engineering/painting" },
      ]
    },
    {
      title: "ICT Courses",
      links: [
        { name: "ICT (Craft Certificate)", href: "/programs/ict/ict-craft" },
        { name: "Computer Packages", href: "/programs/ict/computer-packages" },
        { name: "Computer Programming", href: "/programs/ict/computer-programming" },
        { name: "Web Design", href: "/programs/ict/web-design" },
      ]
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Sitemap", href: "/sitemap" },
      ]
    }
  ];

  const getSectionId = (title: string) => {
    switch (title) {
      case "Engineering Courses":
        return "engineering-courses";
      case "ICT Courses":
        return "ict-courses";
      case "Main Pages":
        return "main-pages";
      case "Schools & Departments":
        return "schools-departments";
      case "Legal & Information":
        return "legal";
      default:
        return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }
  };

  return (
    <>
      <SEOHead 
        title="Sitemap | IPMTTI"
        description="Complete sitemap of IPMTTI website - find all our pages, courses, and resources in one place."
        keywords="sitemap, site navigation, IPMTTI pages, course directory"
        canonical="https://ipmtti.ac.ke/sitemap"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-background">
          <div className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapIcon className="w-10 h-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Sitemap</h1>
              </div>
              <p className="text-center text-lg opacity-90">
                Navigate through all pages and resources on our website
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title} id={getSectionId(section.title)} className="bg-card rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
