import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { apostropheClient } from '@/lib/apostrophe-client'

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
  impactMetrics?: string
}

interface InitiativeDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const initiatives: Initiative[] = await apostropheClient.getInitiatives()
  return initiatives.map((initiative: Initiative) => ({
    slug: initiative.slug,
  }))
}

export async function generateMetadata({ params }: InitiativeDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const initiative = await apostropheClient.getInitiative(resolvedParams.slug)
  
  if (!initiative) {
    return {
      title: 'Initiative Not Found',
      description: 'The requested initiative could not be found.'
    }
  }

  return {
    title: initiative.title,
    description: initiative.description || '',
    openGraph: {
      title: initiative.title,
      description: initiative.description || '',
      type: 'article',
    },
  }
}

export default async function InitiativeDetailPage({ params }: InitiativeDetailPageProps) {
  const resolvedParams = await params
  const initiative = await apostropheClient.getInitiative(resolvedParams.slug)
  
  if (!initiative) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <section className="relative">
          <div className="relative h-96 overflow-hidden">
            {initiative.image && (
              <img 
                src={initiative.image.url} 
                alt={initiative.title} 
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="text-white">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {initiative.title}
                </h1>
                {initiative.description && (
                  <p className="text-xl text-white/90 mb-4">
                    {initiative.description}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  {initiative.startDate && (
                    <span className="text-white/80">
                      Started: {new Date(initiative.startDate).toLocaleDateString()}
                    </span>
                  )}
                  {initiative.status && (
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {initiative.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {initiative.location && (
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">{initiative.location}</p>
                </div>
              )}
              {initiative.targetAudience && (
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
                  <p className="text-muted-foreground">{initiative.targetAudience}</p>
                </div>
              )}
            </div>
            
            {initiative.impactMetrics && (
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: initiative.impactMetrics }} />
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
