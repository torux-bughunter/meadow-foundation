import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Download, ExternalLink, Search, BookOpen, HelpCircle, LinkIcon } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Resources & Guides
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Evidence-Based Resources for Better Health
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Access comprehensive guides, educational materials, and trusted resources to support your physiotherapy
            journey and overall well-being.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input type="search" placeholder="Search resources, guides, and FAQs..." className="pl-10 py-3 text-lg" />
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold text-foreground">Downloadable Guides</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Free, evidence-based guides created by our team of physiotherapy experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Back Pain Prevention Guide</CardTitle>
                <CardDescription>
                  Comprehensive guide to preventing and managing lower back pain through exercise and lifestyle changes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>24 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Workplace Ergonomics Handbook</CardTitle>
                <CardDescription>
                  Essential tips for setting up your workspace to prevent repetitive strain injuries and promote good
                  posture.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>18 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Senior Mobility Exercises</CardTitle>
                <CardDescription>
                  Safe and effective exercises designed specifically for older adults to maintain strength, balance, and
                  independence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>32 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Sports Injury Prevention</CardTitle>
                <CardDescription>
                  Evidence-based strategies for athletes and coaches to prevent common sports injuries and optimize
                  performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>28 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Post-Surgery Recovery</CardTitle>
                <CardDescription>
                  Guidelines for safe recovery and rehabilitation following common orthopedic surgeries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>36 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-lg">Chronic Pain Management</CardTitle>
                <CardDescription>
                  Holistic approaches to managing chronic pain conditions through movement, education, and lifestyle
                  modifications.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>42 pages • PDF</span>
                  <Badge variant="outline">Free</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Common questions about physiotherapy, our services, and how to get involved
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-is-physiotherapy" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                What is physiotherapy and how can it help me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Physiotherapy is a healthcare profession that helps people restore, maintain, and maximize their
                strength, function, movement, and overall well-being. It can help with injury recovery, chronic pain
                management, post-surgical rehabilitation, and prevention of future problems through exercise, manual
                therapy, and education.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-to-see-physiotherapist" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                When should I see a physiotherapist?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                You should consider seeing a physiotherapist if you experience persistent pain, have difficulty with
                daily activities, are recovering from injury or surgery, want to prevent future injuries, or need help
                managing a chronic condition. Many conditions benefit from early intervention, so don't wait for
                problems to worsen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-find-physiotherapist" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                How do I find a qualified physiotherapist?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Look for physiotherapists who are licensed in your state/province and registered with professional
                associations. Ask for referrals from your doctor, check online directories, and consider factors like
                location, specialization, and insurance coverage. Our clinic finder tool can help you locate qualified
                practitioners in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="what-to-expect" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                What should I expect during my first physiotherapy appointment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Your first appointment typically includes a comprehensive assessment of your condition, medical history,
                and functional abilities. The physiotherapist will perform physical tests, discuss your goals, and
                develop a personalized treatment plan. Bring comfortable clothing, any relevant medical records, and a
                list of current medications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-volunteer" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                How can I volunteer with Meadow Foundation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We welcome volunteers from all backgrounds! You can help with community outreach, content creation,
                administrative tasks, or provide professional services if you're a healthcare practitioner. Visit our
                Contact page to express your interest, and we'll match you with opportunities that fit your skills and
                availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="insurance-coverage" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-semibold">
                Is physiotherapy covered by insurance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Coverage varies by insurance plan and location. Many health insurance plans cover physiotherapy when
                prescribed by a physician. Check with your insurance provider about coverage limits, copays, and
                approved providers. Some of our community programs offer sliding scale fees for those without adequate
                coverage.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <div className="flex items-center space-x-2">
              <LinkIcon className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold text-foreground">Professional Resources</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Trusted organizations and resources for physiotherapy professionals and patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground">Professional Associations</h3>
                <div className="space-y-3">
                  <Link
                    href="https://www.apta.org"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">American Physical Therapy Association</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.wcpt.org"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">World Confederation for Physical Therapy</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.physiotherapy.ca"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Canadian Physiotherapy Association</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground">Research & Evidence</h3>
                <div className="space-y-3">
                  <Link
                    href="https://www.cochrane.org"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Cochrane Library</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.pedro.org.au"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">PEDro Database</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://pubmed.ncbi.nlm.nih.gov"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">PubMed</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground">Patient Education</h3>
                <div className="space-y-3">
                  <Link
                    href="https://www.moveforwardpt.com"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Move Forward PT</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.physiopedia.com"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Physiopedia</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.painscience.com"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Pain Science</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif font-semibold text-foreground">Find a Clinic</h3>
                <div className="space-y-3">
                  <Link
                    href="https://www.apta.org/findapt"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">APTA Find a PT</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.healthgrades.com"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Healthgrades</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  <Link
                    href="https://www.zocdoc.com"
                    target="_blank"
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm">Zocdoc</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </Link>
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
