import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | IPMTTI"
        description="Read IPMTTI's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, IPMTTI privacy, personal information"
        canonical="/privacy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-background">
          <div className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-10 h-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-center text-lg opacity-90">
                Last updated: January 2026
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  At International Plant Machinery Training & Technical Institute (IPMTTI), we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name, email address, phone number, and physical address</li>
                  <li>Educational background and qualifications</li>
                  <li>Application and enrollment information</li>
                  <li>Payment and financial information</li>
                  <li>Photographs and videos taken during training</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Process your application and enrollment</li>
                  <li>Provide educational services and training</li>
                  <li>Communicate about courses, events, and updates</li>
                  <li>Issue certificates and credentials</li>
                  <li>Improve our services and facilities</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>NITA, NTSA, and KNEC for certification and accreditation purposes</li>
                  <li>Government agencies as required by law</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Potential employers with your consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access your personal information</li>
                  <li>Request corrections to your data</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with the Data Protection Commissioner</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                <p className="mb-4">
                  Our website uses cookies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  For questions about this privacy policy or to exercise your rights, contact us:
                </p>
                <ul className="list-none mb-4">
                  <li>Email: <a href="mailto:international.machinery.inst@gmail.com" className="underline hover:no-underline">international.machinery.inst@gmail.com</a></li>
                  <li>Phone: +254 715 016300 / +254 723 909804</li>
                  <li>Address: Happy Valley, Thika. Off Garissa Road, Kiambu County, Kenya</li>
                </ul>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
