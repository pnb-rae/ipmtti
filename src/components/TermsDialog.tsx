import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";

interface TermsDialogProps {
  type: "terms" | "school-rules" | "fee-agreement" | "photo-consent" | "hostel-rules";
  trigger?: React.ReactNode;
}

const TermsDialog = ({ type, trigger }: TermsDialogProps) => {
  const getContent = () => {
    switch (type) {
      case "terms":
        return {
          title: "Terms and Conditions",
          content: (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">1. Acceptance of Terms</h3>
              <p>By enrolling at IPMTTI, you agree to abide by all institute policies, rules, and regulations.</p>

              <h3 className="font-semibold text-lg">2. Student Obligations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain regular attendance (minimum 75% required)</li>
                <li>Complete all coursework and assignments on time</li>
                <li>Respect institute property, staff, and fellow students</li>
                <li>Follow safety protocols during practical training</li>
                <li>Wear appropriate attire and safety gear as required</li>
              </ul>

              <h3 className="font-semibold text-lg">3. Academic Integrity</h3>
              <p>Students must maintain academic honesty. Cheating, plagiarism, or any form of academic dishonesty will result in disciplinary action.</p>

              <h3 className="font-semibold text-lg">4. Enrollment & Registration</h3>
              <p>Registration is complete only upon payment of required fees and submission of all necessary documents.</p>

              <h3 className="font-semibold text-lg">5. Cancellation & Refund</h3>
              <p>Course cancellations must be made in writing. Refund policies apply as per the fee agreement terms.</p>
            </div>
          ),
        };

      case "school-rules":
        return {
          title: "School Rules and Regulations",
          content: (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Attendance Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students must maintain at least 75% attendance to qualify for examinations</li>
                <li>Punctuality is mandatory - classes start at 8:00 AM sharp</li>
                <li>Late arrivals must report to the administration office</li>
                <li>Absences must be reported and justified with proper documentation</li>
              </ul>

              <h3 className="font-semibold text-lg">Conduct Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respectful behavior towards staff, instructors, and fellow students</li>
                <li>No use of alcohol, drugs, or prohibited substances on campus</li>
                <li>No weapons or dangerous items allowed on campus</li>
                <li>Proper dress code must be maintained at all times</li>
                <li>Mobile phones must be on silent during classes</li>
              </ul>

              <h3 className="font-semibold text-lg">Disciplinary Policies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Warnings will be issued for minor infractions</li>
                <li>Suspension may result from repeated violations</li>
                <li>Serious misconduct may lead to expulsion without refund</li>
                <li>All disciplinary actions follow a fair hearing process</li>
              </ul>

              <h3 className="font-semibold text-lg">Safety Protocols</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All safety equipment must be worn during practical sessions</li>
                <li>Follow instructor safety guidelines at all times</li>
                <li>Report any accidents or injuries immediately</li>
                <li>No unauthorized use of equipment or machinery</li>
              </ul>
            </div>
          ),
        };

      case "fee-agreement":
        return {
          title: "Fee Payment Agreement",
          content: (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Fee Structure</h3>
              <p>Course fees vary depending on the program selected. Full details are provided during registration.</p>

              <h3 className="font-semibold text-lg">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full payment is due before course commencement unless a payment plan is approved</li>
                <li>Installment plans are available upon request and approval</li>
                <li>Payment can be made via M-Pesa, bank transfer, or cash at the institute</li>
                <li>A receipt will be issued for all payments</li>
              </ul>

              <h3 className="font-semibold text-lg">Late Payment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Late fees may apply for overdue payments</li>
                <li>Students with outstanding fees may be barred from examinations</li>
                <li>Certificates will not be issued until all fees are cleared</li>
              </ul>

              <h3 className="font-semibold text-lg">Refund Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Withdrawal before course start: 80% refund of paid fees</li>
                <li>Withdrawal within first 2 weeks: 50% refund</li>
                <li>No refunds after 2 weeks of course commencement</li>
                <li>Refund processing may take 30-45 business days</li>
              </ul>

              <h3 className="font-semibold text-lg">Additional Costs</h3>
              <p>Additional costs may include examination fees, certification fees, materials, and equipment as per the course requirements.</p>
            </div>
          ),
        };

      case "photo-consent":
        return {
          title: "Photo and Media Consent",
          content: (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Use of Photographs and Videos</h3>
              <p>By granting this permission, you consent to IPMTTI using photographs, videos, or other media featuring you for the following purposes:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Website content and online galleries</li>
                <li>Social media posts (Facebook, Instagram, TikTok)</li>
                <li>Marketing materials and brochures</li>
                <li>Promotional videos and advertisements</li>
                <li>News articles and press releases</li>
              </ul>

              <h3 className="font-semibold text-lg">Your Rights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may withdraw consent at any time by notifying the institute in writing</li>
                <li>IPMTTI will not use your images for commercial purposes outside of promotional activities</li>
                <li>Your identity will not be shared with third parties without additional consent</li>
              </ul>

              <h3 className="font-semibold text-lg">Duration</h3>
              <p>This consent remains valid for the duration of your studies and up to 5 years after graduation, unless revoked in writing.</p>
            </div>
          ),
        };

      case "hostel-rules":
        return {
          title: "Hostel Rules and Regulations",
          content: (
            <div className="space-y-4">
              <p className="font-semibold">For Boarding Students Only</p>

              <h3 className="font-semibold text-lg">Check-in and Check-out</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check-in time: 4:00 PM onwards</li>
                <li>Check-out time: 10:00 AM on the last day</li>
                <li>Students must sign in/out at the hostel reception</li>
              </ul>

              <h3 className="font-semibold text-lg">Hostel Timings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gates close at 10:00 PM on weekdays</li>
                <li>Extended hours on weekends with prior permission</li>
                <li>Late entry requires valid reason and warden approval</li>
              </ul>

              <h3 className="font-semibold text-lg">Room Rules</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep rooms clean and tidy at all times</li>
                <li>Room inspections may be conducted periodically</li>
                <li>Damage to hostel property will be charged to the student</li>
                <li>Bed spaces cannot be exchanged without warden permission</li>
              </ul>

              <h3 className="font-semibold text-lg">Visitors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visitors allowed in common areas only during daytime hours</li>
                <li>All visitors must register at reception</li>
                <li>Overnight guests are not permitted</li>
              </ul>

              <h3 className="font-semibold text-lg">Prohibited Items</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alcohol and drugs</li>
                <li>Weapons or dangerous items</li>
                <li>Cooking appliances in rooms (except approved items)</li>
                <li>Pets and animals</li>
              </ul>

              <h3 className="font-semibold text-lg">Meal Times</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Breakfast: 7:00 AM - 8:00 AM</li>
                <li>Lunch: 1:00 PM - 2:00 PM</li>
                <li>Dinner: 7:00 PM - 8:00 PM</li>
              </ul>
            </div>
          ),
        };

      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="link" className="h-auto p-0 text-primary hover:text-primary/80">
            Read full document
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileText className="w-6 h-6 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription>
            Please read carefully before accepting
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="text-sm text-muted-foreground">{content}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
