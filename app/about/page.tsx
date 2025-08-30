import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, Target, Download, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            About Meadow Foundation
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Making Physiotherapy Accessible to Every Community
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our mission is to make physiotherapy knowledge accessible to every community—reducing pain, restoring
            mobility, and enabling independence through evidence-based care and education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Physiotherapy is a cornerstone of healthcare that helps millions recover from injury, manage chronic
                  conditions, and maintain optimal physical function. Yet many communities lack access to quality
                  physiotherapy services and education.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We bridge this gap by raising awareness, providing education, and connecting communities with
                  evidence-based physiotherapy resources. Through our initiatives, we empower individuals to take
                  control of their physical health and well-being.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold">Care</h3>
                  <p className="text-sm text-muted-foreground">Compassionate, patient-centered approach</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold">Community</h3>
                  <p className="text-sm text-muted-foreground">Building connections and support networks</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold">Impact</h3>
                  <p className="text-sm text-muted-foreground">Measurable outcomes and lasting change</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/community-physio-workshop.png"
                  alt="Physiotherapist working with patient in community setting"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Physiotherapy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif font-bold text-foreground">What is Physiotherapy?</h2>
            <p className="text-xl text-muted-foreground">
              Understanding the science and practice behind movement and rehabilitation
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-foreground">Evidence-Based Practice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Physiotherapy is a healthcare profession that uses scientifically proven techniques to assess,
                  diagnose, and treat conditions affecting movement and function. Our practitioners combine clinical
                  expertise with the latest research to deliver effective, personalized care.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-serif font-semibold text-foreground">Injury Recovery</h4>
                  <p className="text-sm text-muted-foreground">
                    Helping patients recover from sports injuries, workplace accidents, and surgical procedures through
                    targeted rehabilitation programs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-serif font-semibold text-foreground">Chronic Condition Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting individuals with arthritis, back pain, and other long-term conditions to maintain
                    function and quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-serif font-semibold text-foreground">Prevention & Wellness</h4>
                  <p className="text-sm text-muted-foreground">
                    Teaching proper movement patterns and exercises to prevent injury and optimize physical performance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-serif font-semibold text-foreground">Specialized Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Addressing specific populations including pediatrics, geriatrics, neurological conditions, and
                    women's health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated healthcare professionals and advocates working to make physiotherapy accessible to all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Dr. Sarah Chen, Founder & Clinical Director"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-semibold text-foreground">Dr. Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder & Clinical Director</p>
                  <p className="text-xs text-muted-foreground">
                    15+ years in community physiotherapy, PhD in Rehabilitation Sciences
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com/in/sarahchen" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Dr. James Wilson, Research Director"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-semibold text-foreground">Dr. James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Research Director</p>
                  <p className="text-xs text-muted-foreground">
                    Sports physiotherapy specialist, published researcher in injury prevention
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com/in/jameswilson" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Maria Rodriguez, Community Outreach Manager"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-semibold text-foreground">Maria Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Community Outreach Manager</p>
                  <p className="text-xs text-muted-foreground">
                    Former patient advocate, specializes in rural healthcare access
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://linkedin.com/in/mariarodriguez" target="_blank">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">Advisory Board</h2>
            <p className="text-xl text-muted-foreground">
              Leading experts guiding our mission and ensuring clinical excellence
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Dr. Emily Thompson"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-semibold text-foreground">Dr. Emily Thompson</h3>
                    <p className="text-sm text-muted-foreground">
                      Director of Community Health Services, Regional Medical Center
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Leading expert in community health integration and healthcare accessibility
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Prof. Michael Chang"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif font-semibold text-foreground">Prof. Michael Chang</h3>
                    <p className="text-sm text-muted-foreground">Chair of Physiotherapy, University Medical School</p>
                    <p className="text-sm text-muted-foreground">
                      Renowned researcher in movement science and rehabilitation technology
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">Our Partners</h2>
            <p className="text-xl text-muted-foreground">
              Collaborating with leading organizations to expand our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/healthcare-association-logo.png"
                    alt="Healthcare Foundation"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">National Healthcare Foundation</h3>
                    <p className="text-sm text-muted-foreground">Primary funding partner</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supporting our rural outreach programs and community education initiatives since 2020.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/physiotherapy-college-logo.png"
                    alt="Physiotherapy College"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">State Physiotherapy College</h3>
                    <p className="text-sm text-muted-foreground">Educational partner</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Providing student volunteers and clinical expertise for our community programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">Annual Reports</h2>
            <p className="text-xl text-muted-foreground">Transparency in our operations and impact measurement</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif font-semibold text-foreground">2023 Annual Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete overview of programs, financials, and community impact
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-serif font-semibold text-foreground">2022 Annual Report</h3>
                    <p className="text-sm text-muted-foreground">Growth year highlights and expanded community reach</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
