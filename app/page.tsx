import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Heart, TrendingUp, Calendar, User, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Meadow Foundation - Empowering Communities
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  Transforming lives through physiotherapy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Meadow Foundation raises awareness, shares inspiring stories, and connects communities with
                  evidence-based physiotherapy care. Together, we're making healing accessible to everyone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/donate">
                    Donate Now
                    <Heart className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/initiatives">
                    Read Stories
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <Image
                    src="/placeholder-8eef2.png"
                    alt="Meadow Foundation physiotherapy session showing patient care and rehabilitation"
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-primary">25,000+</div>
              <div className="text-muted-foreground">Lives Transformed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-primary">$250,000</div>
              <div className="text-muted-foreground">Community Investment</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-serif font-bold text-primary">75+</div>
              <div className="text-muted-foreground">Healthcare Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Meadow Foundation in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we're creating lasting change in communities through innovative physiotherapy programs,
              education, and compassionate care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/community-physio-workshop.png"
                  alt="Community physiotherapy workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">Community Workshops</h3>
                <p className="text-muted-foreground">
                  Free educational sessions teaching injury prevention and basic physiotherapy techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/mobile-physio-rural.png" alt="Mobile physiotherapy clinic" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">Mobile Clinics</h3>
                <p className="text-muted-foreground">
                  Bringing professional physiotherapy services directly to underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/physiotherapy-student-training.png"
                  alt="Student training program"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">Training Programs</h3>
                <p className="text-muted-foreground">
                  Developing the next generation of physiotherapy professionals and advocates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Featured Initiative */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline">Featured Initiative</Badge>
                <h2 className="text-3xl font-serif font-bold text-foreground">Rural Mobility Project</h2>
              </div>

              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/rural-physiotherapy-outreach.png"
                    alt="Rural Mobility Project in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Our flagship initiative brings comprehensive physiotherapy services to rural communities, focusing
                    on elderly care and mobility restoration. Over 500 patients served in the past year.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>500+ served</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>85% improvement</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/initiatives/rural-mobility">
                        Learn More
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Latest Blog Posts */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline">Latest Stories</Badge>
                <h2 className="text-3xl font-serif font-bold text-foreground">From Our Community</h2>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 15, 2024</span>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      <span>Dr. Sarah Chen</span>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href="/blog/back-pain-prevention" className="hover:text-primary transition-colors">
                        5 Simple Exercises to Prevent Back Pain at Work
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      Learn evidence-based techniques to maintain spinal health during long work days.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 12, 2024</span>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      <span>Maria Rodriguez</span>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href="/blog/recovery-story" className="hover:text-primary transition-colors">
                        My Journey Back to Mobility: A Patient's Story
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      A personal account of recovery through physiotherapy after a major accident.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 10, 2024</span>
                      <span>•</span>
                      <User className="w-4 h-4" />
                      <span>Dr. James Wilson</span>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href="/blog/sports-injury-prevention" className="hover:text-primary transition-colors">
                        Sports Injury Prevention for Young Athletes
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      Essential tips for coaches and parents to keep young athletes healthy and active.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/blog">
                  View All Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Trusted Healthcare Partner</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex justify-center">
                <Image
                  src="/healthcare-association-logo.png"
                  alt="Healthcare Association"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/physiotherapy-college-logo.png"
                  alt="Physiotherapy College"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/medical-foundation-logo.png"
                  alt="Medical Foundation"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/rehabilitation-institute-logo.png"
                  alt="Rehabilitation Institute"
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>

            <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
              "The Meadow Foundation has been instrumental in bridging the gap between professional physiotherapy and
              community education. Their evidence-based approach and unwavering commitment to accessibility makes them
              an invaluable partner in advancing healthcare equity."
            </blockquote>
            <cite className="text-sm font-medium text-foreground">
              — Dr. Emily Thompson, Director of Community Health Services
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Join the Meadow Foundation Movement</h2>
          <p className="text-xl opacity-90">
            Become part of our growing community of healthcare advocates, dedicated volunteers, and passionate
            supporters working to make quality physiotherapy accessible to every community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">
                Volunteer With Us
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/donate">
                Support Our Mission
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
