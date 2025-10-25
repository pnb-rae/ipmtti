import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const resp = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            message: formData.message,
            date: new Date().toISOString(),
          },
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || 'Failed to send');
      }

      const result = await resp.json();
      if (result.ok) {
        setSubmitMessage('✅ Your message has been sent via Email and WhatsApp! We\'ll get back to you within 24 hours.');
      } else {
        setSubmitMessage('⚠️ Something went wrong. Please try again.');
      }
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        newsletter: false
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitMessage('⚠️ Something went wrong. Please try again or contact us directly via WhatsApp: +254 725 782 912');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const courseOptions = [
    { value: 'select-placeholder', label: '-- Select One --', disabled: true },
    { label: 'School of Driving & Plant Operator', isGroup: true },
    { value: 'driving', label: 'Driving' },
    { value: 'plant-operator', label: 'Plant Operator' },
    { label: 'School of Engineering', isGroup: true },
    { value: 'masonry', label: 'Masonry' },
    { value: 'plumbing', label: 'Plumbing' },
    { value: 'painting', label: 'Painting' },
    { value: 'carpentry-joinery', label: 'Carpentry and Joinery' },
    { value: 'construction-plant-mechanics', label: 'Construction Plant Mechanics' },
    { value: 'welding-fabrication', label: 'Welding and Fabrication' },
    { value: 'electrical-wireman', label: 'Electrical Wireman' },
    { value: 'electrical-installation', label: 'Electrical Installation' },
    { value: 'motor-vehicle-electrician', label: 'Motor Vehicle Electrician' },
    { value: 'motor-vehicle-mechanic', label: 'Motor Vehicle Mechanic' },
    { label: 'School of Cosmetology', isGroup: true },
    { value: 'hairdressing-beauty-therapy', label: 'Hairdressing and Beauty Therapy' },
    { value: 'hairdressing', label: 'Hairdressing' },
    { value: 'beauty-therapy', label: 'Beauty Therapy' },
    { value: 'nail-technology', label: 'Nail Technology' },
    { value: 'weaving-braiding', label: 'Weaving and Braiding' },
    { value: 'barbering', label: 'Barbering' },
    { value: 'dreadlocks', label: 'Dreadlocks' },
    { value: 'body-massage', label: 'Body Massage' },
    { value: 'spa-management', label: 'Spa Management' },
    { label: 'School of Computing & Informatics', isGroup: true },
    { value: 'information-communication-technology', label: 'Information Communication Technology' },
    { value: 'computer-programming', label: 'Computer Programming' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'computer-packages', label: 'Computer Packages' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact IPMTTI | Admissions & Enquiries"
        description="Contact IPMTTI admissions team in Thika, Kenya. Call, WhatsApp, or email us for program enquiries, admissions support, or corporate training."
        keywords="contact IPMTTI, admissions contact, vocational college Thika contact, WhatsApp IPMTTI, email IPMTTI"
        canonical="/contact"
      />
      {/* JSON-LD: ContactPage + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact IPMTTI",
            "url": "https://ipmtti.co.ke/contact",
            "description": "Contact International Plant Machinery & Technical Training Institute",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+254-725-782-912",
              "contactType": "customer service",
              "areaServed": "KE"
            }],
            "publisher": {
              "@type": "Organization",
              "name": "International Plant Machinery & Technical Training Institute",
              "url": "https://ipmtti.co.ke"
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
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://ipmtti.co.ke/contact" }
            ]
          })
        }}
      />
      <SocialSidebar />
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to start your journey? We're here to help you every step of the way. 
                Get in touch with our admissions team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section id="contact" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-card-foreground">Get in Touch</h2>
                
                <div className="grid gap-6 mb-8">
                  <Card className="hover:shadow-brand transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">Phone Numbers</h3>
                          <div className="flex flex-col space-y-1 text-muted-foreground">
                            <a href="tel:+254725782912" className="hover:text-primary transition-colors">+254 725 782 912</a>
                            <a href="tel:+254704777114" className="hover:text-primary transition-colors">+254 704 777 114</a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-brand transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">WhatsApp</h3>
                          <a 
                            href="https://wa.me/254725782912" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            +254 725 782 912
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-brand transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">Email Address</h3>
                          <a 
                            href="mailto:international.machinery.inst@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            international.machinery.inst@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-brand transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-card-foreground">Visit Us</h3>
                          <a 
                            href="https://maps.app.goo.gl/RFHWkZzZ2AFaKHA1A" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            Happy Valley, Thika. Off Garissa Road, Thika, Kiambu County, Kenya
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-brand transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground">Working Hours</h3>
                          <p className="text-muted-foreground">Mon to Sat: 8:00 a.m. - 5:00 p.m.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-sm font-medium text-muted-foreground">Follow us:</span>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.instagram.com/ipmtti/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IPMTTI Instagram"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://web.facebook.com/p/International-Plant-Machinery-Training-Institute-100064092097753/?_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IPMTTI Facebook"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@ipmtti?_t=ZM-8zpKqX2kRP2&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IPMTTI TikTok"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <i className="bi bi-tiktok text-[20px]"></i>
                    </a>
                    <a
                      href="https://wa.me/254725782912"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IPMTTI WhatsApp"
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Google Maps */}
                <Card>
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0763658475935!2d37.152674!3d-1.060027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f42dfaa9c51d5%3A0xa8a8f51c6c5e6e1!2sInternational%20Plant%20Machinery%20%26%20Technical%20Training%20Institute!5e0!3m2!1sen!2ske!4v1735803000000!5m2!1sen!2ske"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: "0.5rem 0.5rem 0 0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="IPMTTI Location - Happy Valley, Thika"
                    ></iframe>
                    <div className="p-4 border-t">
                      <a
                        href="https://www.google.com/maps?ll=-1.060027,37.152674&z=17&t=m&hl=en&gl=KE&mapclient=embed&cid=760226344212203361"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-brand">
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Have questions about our programs? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {submitMessage && (
                      <div className={`p-4 rounded-lg mb-6 ${
                        submitMessage.includes('Thank you') 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        {submitMessage}
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course">Course of Interest</Label>
                        <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                          <SelectTrigger id="course">
                            <SelectValue placeholder="-- Select One --" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {courseOptions.map((option, index) => (
                              option.isGroup ? (
                                <div key={index} className="px-2 py-1.5 text-sm font-semibold text-muted-foreground bg-muted">
                                  {option.label}
                                </div>
                              ) : (
                                <SelectItem 
                                  key={option.value || index} 
                                  value={option.value} 
                                  disabled={option.disabled}
                                >
                                  {option.label}
                                </SelectItem>
                              )
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm font-normal">
                          I'd like to receive updates about courses and events
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full btn-hero group"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Emergency Contact Highlight */}
                <Card className="mt-6 bg-accent/10 border-accent">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-accent mb-2">🚨 Emergency Contact</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For urgent admissions queries or emergency support, contact us directly:
                    </p>
                    <div className="flex flex-col space-y-2">
                      <a href="tel:+254725782912" className="font-bold text-accent hover:underline">
                        +254 725 782 912
                      </a>
                      <a href="tel:+254704777114" className="font-bold text-accent hover:underline">
                        +254 704 777 114
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Available 24/7</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;