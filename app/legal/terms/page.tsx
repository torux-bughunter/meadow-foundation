import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="w-fit mx-auto">
              Legal
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 1, 2024</p>
          </div>

          <Separator />

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Medow Foundation website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Medow Foundation's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for educational and informational purposes only and is not
                intended as medical advice. Always consult with a qualified healthcare professional before making any
                decisions about your health or treatment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for all activities that occur under
                your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Donations</h2>
              <p className="text-muted-foreground leading-relaxed">
                All donations are processed securely through third-party payment processors. Donations are
                non-refundable except as required by law. We will provide receipts for tax purposes as applicable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Content Guidelines</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users who contribute content to our platform agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Respect intellectual property rights</li>
                <li>Not post harmful, offensive, or inappropriate content</li>
                <li>Follow professional and ethical standards</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Medow Foundation or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Medow Foundation's website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which Medow Foundation operates, and you irrevocably submit to the exclusive jurisdiction of the courts in
                that state or location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Medow Foundation may revise these terms of service at any time without notice. By using this website, you are
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: legal@medowfoundation.org</p>
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
