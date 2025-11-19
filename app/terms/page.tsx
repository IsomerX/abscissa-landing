import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Voriq AI",
  description: "Terms of Service for Voriq AI services and applications",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Voriq AI&apos;s services, website, or applications (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and Voriq AI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
            <p>
              Voriq AI provides enterprise-grade artificial intelligence solutions, including but not limited to OCR (Optical Character Recognition), document processing, data analysis, and other AI-powered services. We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration and Security</h2>
            <h3 className="text-xl font-medium mb-2">3.1 Account Creation</h3>
            <p className="mb-4">
              To access certain features of our Services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">3.2 Eligibility</h3>
            <p>
              You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
            <h3 className="text-xl font-medium mb-2">4.1 Permitted Use</h3>
            <p className="mb-4">
              You may use our Services only for lawful purposes and in accordance with these Terms.
            </p>

            <h3 className="text-xl font-medium mb-2">4.2 Prohibited Activities</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of Voriq AI or third parties</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Use automated systems (bots, scrapers) without prior written consent</li>
              <li>Engage in any activity that could harm Voriq AI, our users, or third parties</li>
              <li>Resell or redistribute the Services without authorization</li>
              <li>Use the Services to process illegal content or for fraudulent purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
            <h3 className="text-xl font-medium mb-2">5.1 Our Intellectual Property</h3>
            <p className="mb-4">
              The Services, including all content, features, functionality, software, code, designs, graphics, and trademarks, are owned by Voriq AI and are protected by international copyright, trademark, patent, and other intellectual property laws. You may not use our intellectual property without our prior written consent.
            </p>

            <h3 className="text-xl font-medium mb-2">5.2 Your Content</h3>
            <p className="mb-4">
              You retain ownership of any content, data, or materials you submit to our Services (&quot;User Content&quot;). By submitting User Content, you grant Voriq AI a worldwide, non-exclusive, royalty-free license to use, process, store, and analyze your User Content solely for the purpose of providing and improving our Services.
            </p>

            <h3 className="text-xl font-medium mb-2">5.3 Feedback</h3>
            <p>
              If you provide feedback, suggestions, or ideas about our Services, you grant Voriq AI the right to use such feedback without any obligation or compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Billing</h2>
            <h3 className="text-xl font-medium mb-2">6.1 Fees</h3>
            <p>
              Certain features of our Services may require payment. You agree to pay all applicable fees as described in your service plan or agreement. All fees are non-refundable unless otherwise stated.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">6.2 Billing</h3>
            <p>
              You authorize Voriq AI to charge your designated payment method for all fees incurred. You are responsible for providing accurate billing information and updating it as needed.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">6.3 Price Changes</h3>
            <p>
              We reserve the right to modify our pricing with reasonable notice. Continued use of the Services after a price change constitutes acceptance of the new pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
            <p>
              Your use of our Services is subject to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Service Level and Availability</h2>
            <p className="mb-4">
              While we strive to provide reliable and uninterrupted Services, we do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services will be available at all times or without interruption</li>
              <li>The Services will be error-free or completely secure</li>
              <li>Any specific results or outcomes will be achieved</li>
              <li>All defects will be corrected</li>
            </ul>
            <p className="mt-4">
              We reserve the right to perform scheduled maintenance and updates, which may temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-medium mb-2">9.1 Disclaimer of Warranties</h3>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. VORIQ AI DOES NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THE RESULTS OBTAINED WILL BE ACCURATE OR RELIABLE.
            </p>

            <h3 className="text-xl font-medium mb-2">9.2 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VORIQ AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Voriq AI, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or related to your use of the Services, violation of these Terms, or infringement of any rights of third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <h3 className="text-xl font-medium mb-2">11.1 Termination by You</h3>
            <p>
              You may terminate your account at any time by contacting us or using the account termination feature in your account settings.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">11.2 Termination by Us</h3>
            <p className="mb-4">
              We may suspend or terminate your access to the Services at any time, with or without notice, for any reason, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Prolonged inactivity</li>
              <li>At our discretion for business or security reasons</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">11.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Services will immediately cease. We may delete your data after a reasonable period following termination, subject to applicable law and our data retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
            <h3 className="text-xl font-medium mb-2">12.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Voriq AI is incorporated, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">12.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property infringement or violations of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. General Provisions</h2>
            <h3 className="text-xl font-medium mb-2">13.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement between you and Voriq AI regarding the Services.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">13.2 Modifications</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website or through other communications. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">13.3 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">13.4 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">13.5 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold">Voriq AI</p>
              <p>Email: legal@voriq.ai</p>
              <p>Website: <Link href="/" className="text-primary hover:underline">www.voriq.ai</Link></p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              By using Voriq AI&apos;s Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
