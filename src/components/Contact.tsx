import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, MessageCircle } from "lucide-react";

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

      if (!resp.ok) throw new Error('Failed to send');

      setSubmitMessage('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        newsletter: false
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
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
                        <a href="tel:+254715016300" className="hover:text-primary transition-colors">
                          +254 715 016300
                        </a>
                        <a href="tel:+254723909804" className="hover:text-primary transition-colors">
                          +254 723 909804
                        </a>
                      </div>
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
                        href="https://maps.app.goo.gl/cYaBmcMoaRATm7Pg8" 
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
                  height="250"
                  style={{ border: 0, borderRadius: "0.5rem 0.5rem 0 0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IPMTTI Location Map"
                ></iframe>
                <div className="p-4 border-t">
                  <a
                    href="https://maps.app.goo.gl/cYaBmcMoaRATm7Pg8"
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
                        aria-describedby="firstName-error"
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
                        aria-describedby="lastName-error"
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
                      aria-describedby="email-error"
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
                      aria-describedby="phone-help"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest</Label>
                    <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                      <SelectTrigger id="course" className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
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
                      aria-describedby="message-error"
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
                    className="w-full btn-hero group transition-transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-2xl">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="mb-4 text-orange-100">Call our emergency contact for urgent inquiries</p>
              <a 
                href="tel:+254725782912"
                className="inline-flex items-center space-x-2 text-2xl font-bold hover:text-orange-200 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>+254 725 782 912</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;