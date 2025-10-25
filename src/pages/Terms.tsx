import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service | IPMTTI"
        description="Read IPMTTI's terms of service governing the use of our website and training services."
        keywords="terms of service, terms and conditions, IPMTTI terms, student agreement"
        canonical="/terms"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 bg-background">
          <div className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileText className="w-10 h-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
              </div>
              <p className="text-center text-lg opacity-90">
                Last updated: January 2026
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using the IPMTTI website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Enrollment and Admission</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Applications must be truthful and complete</li>
                  <li>Meeting minimum requirements does not guarantee admission</li>
                  <li>IPMTTI reserves the right to accept or reject any application</li>
                  <li>Admission offers may be withdrawn if false information is provided</li>
                  <li>Students must comply with all admission requirements and deadlines</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Fees and Payments</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>All fees must be paid according to the published fee structure</li>
                  <li>Fee payment deadlines must be strictly observed</li>
                  <li>Registration fees are non-refundable</li>
                  <li>Students with outstanding fees may not sit for examinations</li>
                  <li>Certificates will only be issued upon full fee payment</li>
                  <li>Fee structures are subject to change with notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Student Conduct</h2>
                <p className="mb-4">Students are expected to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Maintain discipline and respect at all times</li>
                  <li>Attend all classes and practical sessions regularly</li>
                  <li>Follow all safety protocols during training</li>
                  <li>Respect institute property and equipment</li>
                  <li>Comply with all institute rules and regulations</li>
                  <li>Not engage in any illegal or harmful activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Academic Integrity</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Students must complete their own work</li>
                  <li>Plagiarism and cheating are strictly prohibited</li>
                  <li>Examination misconduct will result in penalties</li>
                  <li>Certificates obtained fraudulently will be revoked</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Liability and Insurance</h2>
                <p className="mb-4">
                  While IPMTTI takes reasonable precautions for student safety:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Students participate in practical training at their own risk</li>
                  <li>Students are responsible for their own insurance coverage</li>
                  <li>IPMTTI is not liable for personal injuries during training</li>
                  <li>Students must follow all safety instructions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Course Changes</h2>
                <p className="mb-4">
                  IPMTTI reserves the right to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Modify course content and schedules</li>
                  <li>Cancel courses with insufficient enrollment</li>
                  <li>Replace instructors as needed</li>
                  <li>Adjust training facilities and equipment</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="mb-4">
                  IPMTTI may terminate a student's enrollment for:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Violation of institute rules</li>
                  <li>Non-payment of fees</li>
                  <li>Academic dishonesty</li>
                  <li>Conduct that threatens safety or reputation</li>
                  <li>Repeated absences without valid reason</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p className="mb-4">
                  All course materials, content, and branding are the property of IPMTTI and may not be reproduced without permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                <p className="mb-4">
                  For questions about these terms, contact:
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

export default Terms;
