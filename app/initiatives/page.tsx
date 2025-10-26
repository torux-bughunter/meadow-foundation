import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { apostropheClient } from '@/lib/apostrophe-client'
import { Calendar, MapPin, Users, ArrowRight, Clock, Target } from "lucide-react"
import { Metadata } from 'next'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

// Page metadata
export const metadata: Metadata = {
  title: 'Our Initiatives - Medow Foundation',
  description: 'Explore our key programs and initiatives designed to bring physiotherapy care and education to communities worldwide.',
  openGraph: {
    title: 'Our Initiatives - Medow Foundation',
    description: 'Explore our key programs and initiatives designed to bring physiotherapy care and education to communities worldwide.',
    type: 'website',
  },
}

interface Initiative {
  _id: string
  title: string
  slug: string
  description?: string
  image?: {
    url: string
  }
  startDate?: string
  endDate?: string
  status?: string
  location?: string
  targetAudience?: string
}

export default async function InitiativesPage() {
  const initiatives: Initiative[] = await apostropheClient.getInitiatives()

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Initiatives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how we're making a difference in community health through innovative programs and outreach efforts.
            </p>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {initiatives.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">No initiatives yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Content will appear here once you create initiatives in the CMS. Start planning to make a difference!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initiatives.map((initiative: Initiative) => (
                  <article key={initiative._id} className="group bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20 hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                      {/* Placeholder image since image is not available in public API */}
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-16 h-16 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      {/* Status Badge */}
                      {initiative.status && (
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm ${
                            initiative.status === 'active' ? 'bg-coral/90 text-white' :
                            initiative.status === 'completed' ? 'bg-blue-500/90 text-white' :
                            initiative.status === 'planning' ? 'bg-yellow-500/90 text-white' :
                            'bg-gray-500/90 text-white'
                          }`}>
                            {initiative.status.charAt(0).toUpperCase() + initiative.status.slice(1)}
                          </span>
                        </div>
                      )}
                      {/* Date Badge */}
                      {initiative.startDate && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-background/90 text-foreground rounded-full text-xs font-medium shadow-lg backdrop-blur-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(initiative.startDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-tight">
                        {initiative.title}
                      </h2>
                      
                      {/* Description - Show placeholder since description is not available in public API */}
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed text-sm">
                        {initiative.description || "Learn more about this initiative and how it's making a difference in community health..."}
                      </p>
                      
                      {/* Meta Information */}
                      <div className="space-y-3 mb-4">
                        {initiative.location && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{initiative.location}</span>
                          </div>
                        )}
                        {initiative.targetAudience && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{initiative.targetAudience}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Learn More Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <a
                          href={`/initiatives/${initiative.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group/link transition-colors duration-200"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                        </a>
                        
                        {/* Initiative Type */}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Initiative
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Want to Get Involved?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in making physiotherapy accessible to everyone. Whether through volunteering, partnerships, or
              donations, every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
              >
                Volunteer With Us
              </a>
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border border-primary hover:bg-primary/10 rounded-md transition-colors"
              >
                Support Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
