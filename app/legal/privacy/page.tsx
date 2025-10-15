import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              Legal
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 1, 2024</p>
          </div>

          <Separator />

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Medow Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Professional credentials and background</li>
                  <li>Volunteer interests and availability</li>
                  <li>Donation information (processed securely through third-party payment processors)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Automatically Collected Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process donations and send receipts</li>
                <li>Communicate with volunteers and supporters</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>With service providers who assist in our operations (payment processors, email services)</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your personal information</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can
                control cookie settings through your browser preferences. Some features may not function properly if
                cookies are disabled.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information
                from children under 13. If we become aware that we have collected such information, we will take steps
                to delete it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: privacy@medowfoundation.org</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>
                  Address: 123 Health Street
                  <br />
                  Medical City, MC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
