import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { markdownService } from '@/lib/markdown-service'

interface InitiativeDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const initiatives = await markdownService.getInitiatives()
  return initiatives.map((initiative) => ({
    slug: initiative.slug,
  }))
}

export async function generateMetadata({ params }: InitiativeDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const initiative = await markdownService.getInitiative(resolvedParams.slug)
  
  if (!initiative) {
    return {
      title: 'Initiative Not Found',
      description: 'The requested initiative could not be found.'
    }
  }

  return {
    title: initiative.title,
    description: initiative.description,
    openGraph: {
      title: initiative.title,
      description: initiative.description,
      type: 'article',
    },
  }
}

export default async function InitiativeDetailPage({ params }: InitiativeDetailPageProps) {
  const resolvedParams = await params
  const initiative = await markdownService.getInitiative(resolvedParams.slug)
  
  if (!initiative) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          {initiative.image && (
            <img 
              src={initiative.image} 
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
              <p className="text-xl text-white/90 mb-4">
                {initiative.description}
              </p>
              <div className="flex items-center gap-4">
                {initiative.start_date && (
                  <span className="text-white/80">
                    Started: {new Date(initiative.start_date).toLocaleDateString()}
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
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: initiative.content }} />
          </div>
          
          {initiative.impact_metrics && (
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
              <p className="text-muted-foreground">{initiative.impact_metrics}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
