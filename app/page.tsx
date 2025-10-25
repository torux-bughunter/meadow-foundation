import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InitiativeProvider } from "@/components/initiative-provider"
import { InitiativeCard } from "@/components/initiative-card"
import { ArrowRight, Users, Heart, TrendingUp, Calendar, User, ExternalLink, Stethoscope, BookOpen, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <InitiativeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-coral/5 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary-foreground border-secondary/30">
                  Medow Foundation - Empowering Communities
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  Transforming lives through physiotherapy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Medow Foundation raises awareness, shares inspiring stories, and connects communities with
                  evidence-based physiotherapy care. Together, we're making healing accessible to everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50">
                  <Link href="/contact">
                    Get Involved
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-coral p-1">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <Image
                    src="/cover.jpeg"
                    alt="Medow Foundation physiotherapy session showing patient care and rehabilitation"
                    width={600}
                    height={450}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section id="our-work" className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline">Our Work</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Making an Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through our dedicated efforts, we're transforming lives and communities through physiotherapy care and education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-coral">100+</div>
              <div className="text-muted-foreground">Patients Served Each Day</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-coral">$20,000+</div>
              <div className="text-muted-foreground">Raised</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-coral">1K+</div>
              <div className="text-muted-foreground">Awareness Raised</div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Initiatives */}
      <section id="initiatives" className="py-20 bg-coral-bg border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline">Our Initiatives</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Making a Difference Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our key programs and initiatives designed to bring physiotherapy care and education to communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Physiotherapy Clinic */}
            <InitiativeCard initiative="clinic">
              <div className="aspect-video relative bg-gradient-to-br from-coral/10 to-coral/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Stethoscope className="w-16 h-16 text-coral" />
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="text-xl mb-3">Physiotherapy Clinic in India</CardTitle>
                <CardDescription className="mb-4 flex-1">
                  Expert, affordable physiotherapy care accessible to underserved communities with modern equipment and personalized treatment plans.
                </CardDescription>
                <Button variant="coral" className="w-full mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </InitiativeCard>

            {/* Blogs */}
            <Link href="/blog" className="h-full">
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 border-border hover:border-coral/30 h-full flex flex-col">
                <div className="aspect-video relative bg-gradient-to-br from-coral/10 to-coral/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-coral" />
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <CardTitle className="text-xl mb-3">Our Blog</CardTitle>
                  <CardDescription className="mb-4 flex-1">
                    Practical tips, inspiring stories, and expert insights about physiotherapy and community health education.
                  </CardDescription>
                  <Button variant="coral" className="w-full mt-auto">
                    Read Our Blog
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Spelling Bee */}
            <InitiativeCard initiative="spelling-bee">
              <div className="aspect-video relative bg-gradient-to-br from-coral/10 to-coral/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-coral" />
                </div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="text-xl mb-3">MEDOW Spelling Bee</CardTitle>
                <CardDescription className="mb-4 flex-1">
                  Fun and educational spelling competition with expert guidance from 2025 Scripps National Spelling Bee Champion Faizan Zaki, 2024 Scripps National Spelling Bee 3rd place Shradha Rachamreddy, and 2023 Scripps National Spelling Bee 14th place Avyay Kodali.
                </CardDescription>
                <Button variant="coral" className="w-full mt-auto">
                  Sign Up Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </InitiativeCard>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="py-20 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline">Our Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated professionals committed to making physiotherapy accessible and advancing community health worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Avyay Kodali */}
            <Card className="text-center border-border hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/avyay.png"
                    alt="Avyay Kodali"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Avyay Kodali</h3>
                <p className="text-sm text-primary font-medium mb-2">Co-Founder</p>
              </CardContent>
            </Card>

            {/* Dhanvi Kodali */}
            <Card className="text-center border-border hover:border-secondary/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/dhanvi.png"
                    alt="Dhanvi Kodali"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Dhanvi Kodali</h3>
                <p className="text-sm text-secondary font-medium mb-2">Co-Founder</p>
              </CardContent>
            </Card>

            {/* Shradha Rachamreddy */}
            <Card className="text-center border-border hover:border-accent/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/shradha.png"
                    alt="Shradha Rachamreddy"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Shradha Rachamreddy</h3>
                <p className="text-sm text-accent font-medium mb-2">Regional Director</p>
              </CardContent>
            </Card>

            {/* Shravya */}
            <Card className="text-center border-border hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/shravya.png"
                    alt="Shravya"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Shravya Dumbala</h3>
                <p className="text-sm text-primary font-medium mb-2">Regional Director</p>
              </CardContent>
            </Card>

            {/* Yashika Aduma */}
            <Card className="text-center border-border hover:border-secondary/30 transition-all duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/yashika.png"
                    alt="Yashika Aduma"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">Yashika Aduma</h3>
                <p className="text-sm text-secondary font-medium mb-2">Regional Director</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your support helps us reach more communities and transform more lives through physiotherapy care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50">
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </InitiativeProvider>
  )
}
