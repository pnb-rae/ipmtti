import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Instagram, Facebook, MessageCircle, Calendar, Car, Wrench, Scissors, Monitor, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const courses = [
    { name: "Driving & Plant Operation", href: "/schools/driving-plant-operation", icon: Car },
    { name: "Engineering (Mechanics, Welding)", href: "/schools/engineering", icon: Wrench },
    { name: "ICT & Computing", href: "/schools/computing", icon: Monitor },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <a href="tel:+254725782912" className="hover:text-accent transition-colors">+254 725 782 912</a>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <a href="mailto:international.machinery.inst@gmail.com" className="hover:text-accent transition-colors truncate">international.machinery.inst@gmail.com</a>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <a href="https://maps.app.goo.gl/cYaBmcMoaRATm7Pg8" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Happy Valley, Thika</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-accent font-semibold text-xs sm:text-sm hover:underline cursor-pointer flex items-center space-x-1 transition-colors">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Check Intakes...</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">Intake Schedules 2026</DialogTitle>
                  <DialogDescription>
                    View intake schedules for all our programs
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  {/* Driving & Plant Operation */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg text-primary mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-accent" />
                      Driving & Plant Operation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">Rolling intakes available</p>
                    <div className="bg-accent/10 p-3 rounded-md">
                      <p className="text-sm font-semibold text-accent">Every Week</p>
                      <p className="text-xs text-muted-foreground mt-1">Classes start every Monday. Apply anytime!</p>
                    </div>
                  </div>

                  {/* Engineering */}
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg text-primary mb-2">School of Engineering</h3>
                    <div className="grid gap-2">
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Next Intake</span>
                        <span className="text-sm text-accent font-semibold">January 2026</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Application Deadline</span>
                        <span className="text-sm">January 2026</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Orientation</span>
                        <span className="text-sm">January 8, 2026</span>
                      </div>
                    </div>
                  </div>

                  

                  {/* ICT & Computing */}
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">School of Computing & Informatics</h3>
                    <div className="grid gap-2">
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Next Intake</span>
                        <span className="text-sm text-accent font-semibold">January 2026</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Application Deadline</span>
                        <span className="text-sm">January 2026</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">Orientation</span>
                        <span className="text-sm">January 8, 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="hidden lg:flex items-center space-x-2">
              <a href="https://www.instagram.com/ipmtti/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="IPMTTI Instagram" className="text-primary-foreground hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://web.facebook.com/p/International-Plant-Machinery-Training-Institute-100064092097753/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" aria-label="IPMTTI Facebook" className="text-primary-foreground hover:text-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@ipmtti?_t=ZM-8zpKqX2kRP2&_r=1" target="_blank" rel="noopener noreferrer" aria-label="IPMTTI TikTok" className="text-primary-foreground hover:text-accent transition-colors">
                <i className="bi bi-tiktok text-[16px] leading-4 align-middle"></i>
              </a>
              <a href="https://wa.me/254725782912" target="_blank" rel="noopener noreferrer" aria-label="IPMTTI WhatsApp" className="text-primary-foreground hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 md:space-x-3 hover:scale-105 transition-all duration-300 group">
            <img 
              src={schoolLogo} 
              alt="IPMTTI - International Plant Machinery Training Technical Institute" 
              className="h-12 md:h-16 w-auto object-contain group-hover:rotate-3 transition-transform duration-300"
              loading="eager"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">IPMTTI</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Excellence in Standard and Quality</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/about" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${location.pathname === '/about' ? 'underline underline-offset-4 decoration-2' : ''}`}
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10">Schools & Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-6">
                    <NavigationMenuLink
                      href="/schools"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-b border-border mb-2"
                    >
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-accent" />
                        <div>
                          <div className="text-sm font-medium leading-none">View All Schools</div>
                          <p className="text-xs text-muted-foreground mt-1">Explore our comprehensive programs</p>
                        </div>
                      </div>
                    </NavigationMenuLink>
                    {courses.map((course) => {
                      const IconComponent = course.icon;
                      return (
                        <NavigationMenuLink
                          key={course.name}
                          href={course.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-primary" />
                            <div className="text-sm font-medium leading-none">{course.name}</div>
                          </div>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/gallery" 
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${location.pathname === '/gallery' ? 'underline underline-offset-4 decoration-2' : ''}`}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Resources (Dropdown) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-6">
                    <NavigationMenuLink
                      href="/resources/blog"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Blog</div>
                      <p className="text-xs text-muted-foreground mt-1">Articles and updates</p>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      href="/resources/faq"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">FAQ</div>
                      <p className="text-xs text-muted-foreground mt-1">Common questions</p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Spacer to push CTA group to the far right on desktop */}
          <div className="hidden lg:block ml-auto" aria-hidden="true" />

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 md:gap-4 lg:gap-6 ml-4 md:ml-6">
            <Button variant="outline" size="sm" className="rounded-lg transition-transform hover:scale-105" asChild>
              <a href="/downloads/ipmtti-brochure.pdf" download aria-label="Download IPMTTI brochure PDF">Download Brochure</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="/" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">Home</a>
              <a href="/about" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">About Us</a>
              <div className="px-4 py-2">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-medium">
                    Schools & Programs
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="/schools"
                      className="flex items-center gap-2 py-1 text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      <GraduationCap className="w-4 h-4" />
                      View All Schools
                    </a>
                    {courses.map((course) => {
                      const IconComponent = course.icon;
                      return (
                        <a
                          key={course.name}
                          href={course.href}
                          className="flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <IconComponent className="w-4 h-4" />
                          {course.name}
                        </a>
                      );
                    })}
                  </div>
                </details>
              </div>
              <a href="/gallery" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">Gallery</a>
              <a href="/contact" className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">Contact</a>
              <div className="px-4 py-2">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-medium">
                    Resources
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2 pl-4 space-y-2">
                    <a
                      href="/resources/blog"
                      className="flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </a>
                    <a
                      href="/resources/faq"
                      className="flex items-center gap-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      FAQ
                    </a>
                  </div>
                </details>
              </div>
              <div className="px-4 pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/downloads/ipmtti-brochure.pdf" download>Download Brochure</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;