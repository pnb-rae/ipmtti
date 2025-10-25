import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Download,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import nitaLogo from "@/assets/nita-logo.png";
import ntsaLogo from "@/assets/ntsa-logo.jpg";
import knecLogo from "@/assets/knec-logo.png";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/apply" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/resources/blog" },
    { name: "News & Events", href: "/plant-operator-training" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Contact", href: "/contact" },
  ];

  const courses = [
    { name: "Driving & Plant Operation", href: "/schools/driving-plant-operation" },
    { name: "Engineering & Mechanics", href: "/schools/engineering" },
    { name: "ICT & Computing", href: "/schools/computing" },
  ];

  const resources = [
    { name: "Course Brochure", href: "/downloads/ipmtti-brochure.pdf", icon: Download },
    { name: "Application Form", href: "/apply", icon: ExternalLink },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-3 group">
              <img 
                src={schoolLogo} 
                alt="IPMTTI Logo" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-bold">IPMTTI</h3>
                <p className="text-sm text-primary-foreground/80">Technical Excellence</p>
              </div>
            </a>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading technical training institute in Kenya, empowering students with 
              practical skills and industry certifications. 6+ years of training excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
            <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps?ll=-1.060027,37.152674&z=17&t=m&hl=en&gl=KE&mapclient=embed&cid=760226344212203361" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Happy Valley, Thika. Off Garissa Road, Thika, Kiambu County, Kenya
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <div className="text-sm">
                  <a href="tel:+254715016300" className="hover:text-accent transition-colors block">
                    +254 715 016300
                  </a>
                  <a href="tel:+254723909804" className="hover:text-accent transition-colors block">
                    +254 723 909804
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:international.machinery.inst@gmail.com" className="text-sm hover:text-accent transition-colors">
                  international.machinery.inst@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/ipmtti/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="IPMTTI Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://web.facebook.com/p/International-Plant-Machinery-Training-Institute-100064092097753/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="IPMTTI Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@ipmtti?_t=ZM-8zpKqX2kRP2&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="IPMTTI TikTok"
              >
                <i className="bi bi-tiktok text-[20px]"></i>
              </a>
              <a 
                href="https://wa.me/254725782912"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="IPMTTI WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent hover:underline transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href}
                    className="text-primary-foreground/80 hover:text-accent hover:underline transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <a href="/schools">
                <Button size="sm" className="bg-accent hover:bg-accent-dark text-accent-foreground">
                  View All Courses
                </Button>
              </a>
            </div>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="text-primary-foreground/80 hover:text-accent hover:underline transition-colors text-sm flex items-center group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-accent" />
                      {resource.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-xs text-primary-foreground/70 mb-4">
                Get the latest blogs about courses, training, and admissions.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-sm placeholder:text-primary-foreground/50"
                />
                <Button size="sm" className="bg-accent hover:bg-accent-dark text-accent-foreground rounded-l-none">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-6">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground">
              <p className="font-medium">&copy; 2025. All Rights Reserved. IPMTTI.</p>
              <div className="flex space-x-4">
                <a href="/privacy" className="hover:text-accent hover:underline transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-accent hover:underline transition-colors">Terms of Service</a>
                <a href="/sitemap" className="hover:text-accent hover:underline transition-colors">Sitemap</a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <span className="text-sm text-primary-foreground font-semibold">Accredited by:</span>
              <div className="flex items-center flex-wrap justify-center gap-3">
                <a 
                  href="https://www.nita.go.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                >
                  NITA
                </a>
                <a 
                  href="https://www.ntsa.go.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                >
                  NTSA
                </a>
                <a 
                  href="https://www.knec.ac.ke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
                >
                  KNEC
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-accent-foreground">
            <span className="font-semibold">🚨 Emergency Hotline:</span>
            <a href="tel:+254715016300" className="font-bold hover:underline">
              +254 715 016300
            </a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+254723909804" className="font-bold hover:underline">
              +254 723 909804
            </a>
            <span className="text-sm opacity-90">Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;