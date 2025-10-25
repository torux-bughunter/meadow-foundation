import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-coral/5 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-secondary/20 text-secondary-foreground border-secondary/30">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              How It All Began
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A personal journey that transformed into a mission to make physiotherapy accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-xl leading-relaxed">
                It all started with our grandma. After her surgery, we watched her struggle to do even the simplest things like walking, standing, or getting around the house. It was hard seeing someone we love lose her confidence and independence.
              </p>
              
              <p className="text-xl leading-relaxed">
                That's when we discovered physiotherapy. With consistent care, she slowly began to walk again, regain her balance, and smile more. Watching her recovery reminded us how powerful physiotherapy can be.
              </p>

              <div className="my-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">The Turning Point</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  "Just like our grandma was saved through physiotherapy, we want others to be saved as well."
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                But when we looked around, we realized that many people in India don't have that same chance. Physiotherapy isn't easily accessible, and so many families don't even know how much it can help, especially the elderly and those struggling with movement after surgery or illness.
              </p>

              <p className="text-xl leading-relaxed">
                That's what inspired us to take action. Together, we partnered with NRI Seva to bring our vision to life and adopted two physiotherapy clinics in Hyderabad. Today, these clinics treat over 100 patients every day, completely free of cost. Every session is a step toward helping someone walk again, move again, and live again.
              </p>

              <div className="my-12 p-8 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl border border-secondary/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Patients Treated Daily</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">2</div>
                    <div className="text-sm text-muted-foreground">Clinics in Hyderabad</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Free Treatment</div>
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed">
                Our mission is simple: to spread awareness about the power of physiotherapy and make sure that no one is held back from healing because of where they live or what they can afford. Just like our grandma was saved through physiotherapy, we want others to be saved as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-coral-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="outline">Our Partnership</Badge>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Working with NRI Seva</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our partnership with NRI Seva has been instrumental in bringing our vision to life. Together, we've created a sustainable model for providing free physiotherapy care to underserved communities.
            </p>
            <div className="pt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Learn More About Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Help us continue making physiotherapy accessible to everyone, regardless of their circumstances.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50">
            <Link href="/contact">
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
