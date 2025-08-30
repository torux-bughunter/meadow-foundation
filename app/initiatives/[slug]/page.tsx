import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, Calendar, ArrowLeft, Award, Heart, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// Mock initiative data - in real app this would come from CMS
const initiatives = [
  {
    id: 1,
    title: "Mobile Physiotherapy Clinics",
    slug: "mobile-physiotherapy-clinics",
    summary:
      "Bringing professional physiotherapy services directly to underserved rural communities through our mobile clinic program.",
    description: `
      <h2>Bridging the Healthcare Gap</h2>
      <p>Rural communities often face significant barriers to accessing quality physiotherapy services. Our Mobile Physiotherapy Clinics program addresses this challenge by bringing professional care directly to where it's needed most.</p>
      
      <h3>How It Works</h3>
      <p>Our specially equipped mobile units travel to rural communities on a scheduled basis, providing:</p>
      <ul>
        <li>Comprehensive physiotherapy assessments</li>
        <li>Treatment for musculoskeletal conditions</li>
        <li>Post-injury rehabilitation</li>
        <li>Preventive care and education</li>
        <li>Equipment and exercise prescription</li>
      </ul>
      
      <h3>Community Impact</h3>
      <p>Since launching this program, we've seen remarkable improvements in community health outcomes. Patients who previously had to travel hours for treatment now receive care in their own neighborhoods.</p>
      
      <h3>Success Stories</h3>
      <p>Maria, a 65-year-old farmer, was able to return to work after receiving treatment for chronic back pain through our mobile clinic. "I thought I'd have to live with the pain forever," she says. "Now I can work my land again."</p>
    `,
    image: "/mobile-physio-rural.png",
    gallery: [
      "/mobile-clinic-exterior.png",
      "/mobile-clinic-interior.png",
      "/mobile-clinic-treatment.png",
      "/mobile-clinic-community.png",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Clinics", "Rural Health", "Accessibility"],
    category: "clinics",
    location: "Rural Communities",
    participants: "500+ patients served",
    status: "Active",
    startDate: "2023-06-01",
    impact: {
      patientsServed: 547,
      communitiesReached: 12,
      treatmentSessions: 1200,
      satisfactionRate: 96,
      travelTimeReduced: "75%",
    },
    goals: {
      patientsTarget: 750,
      communitiesTarget: 15,
      fundingTarget: 50000,
      fundingRaised: 32000,
    },
    outcomes: [
      "Reduced average travel time to physiotherapy services by 75%",
      "Achieved 96% patient satisfaction rate",
      "Provided over 1,200 treatment sessions",
      "Established partnerships with 12 rural communities",
    ],
  },
]

const relatedBlogPosts = [
  {
    id: 1,
    title: "Community Outreach: Bringing Physiotherapy to Rural Areas",
    slug: "community-outreach-rural-physiotherapy",
    coverImage: "/rural-physiotherapy-outreach.png",
    readingTime: "6 min read",
  },
  {
    id: 2,
    title: "Patient Success Story: Recovery After Stroke",
    slug: "patient-success-story-stroke-recovery",
    coverImage: "/stroke-recovery-story.png",
    readingTime: "7 min read",
  },
]

export default function InitiativeDetailPage({ params }: { params: { slug: string } }) {
  const initiative = initiatives.find((i) => i.slug === params.slug)

  if (!initiative) {
    notFound()
  }

  const fundingProgress = (initiative.goals.fundingRaised / initiative.goals.fundingTarget) * 100
  const patientsProgress = (initiative.impact.patientsServed / initiative.goals.patientsTarget) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <Image src={initiative.image || "/placeholder.svg"} alt={initiative.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="text-white">
              <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/20 mb-4">
                <Link href="/initiatives">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Initiatives
                </Link>
              </Button>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">{initiative.status}</Badge>
                {initiative.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{initiative.title}</h1>

              <p className="text-xl text-white/90 mb-6 max-w-3xl">{initiative.summary}</p>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {initiative.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {initiative.participants}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Started{" "}
                  {new Date(initiative.startDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{initiative.impact.patientsServed}</div>
                    <div className="text-sm text-muted-foreground">Patients Served</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{initiative.impact.communitiesReached}</div>
                    <div className="text-sm text-muted-foreground">Communities</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{initiative.impact.treatmentSessions}</div>
                    <div className="text-sm text-muted-foreground">Sessions</div>
                  </CardContent>
                </Card>

                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{initiative.impact.satisfactionRate}%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground mb-12"
                dangerouslySetInnerHTML={{ __html: initiative.description }}
              />

              {/* Video */}
              {initiative.videoUrl && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl font-semibold mb-6">See Our Impact</h2>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={initiative.videoUrl}
                      title={`${initiative.title} Video`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Gallery */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-semibold mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {initiative.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${initiative.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-semibold mb-6">Key Outcomes</h2>
                <div className="space-y-4">
                  {initiative.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between py-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Support Initiative
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button variant="ghost" size="sm">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Donation Widget */}
                <Card className="border-border">
                  <CardHeader>
                    <h3 className="font-semibold text-lg">Support This Initiative</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us expand this program to reach more communities
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Funding Progress</span>
                        <span>
                          ${initiative.goals.fundingRaised.toLocaleString()} / $
                          {initiative.goals.fundingTarget.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={fundingProgress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">{Math.round(fundingProgress)}% funded</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Patients Goal</span>
                        <span>
                          {initiative.impact.patientsServed} / {initiative.goals.patientsTarget}
                        </span>
                      </div>
                      <Progress value={patientsProgress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.round(patientsProgress)}% of target reached
                      </p>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/donate?initiative=${initiative.slug}`}>Donate Now</Link>
                    </Button>

                    <div className="text-xs text-muted-foreground">
                      <p>$50 funds one patient visit</p>
                      <p>$200 covers a full day clinic</p>
                      <p>$1000 supports a month of operations</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="border-border">
                  <CardHeader>
                    <h3 className="font-semibold">Quick Stats</h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Travel Time Reduced</span>
                      <span className="font-semibold">{initiative.impact.travelTimeReduced}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Patient Satisfaction</span>
                      <span className="font-semibold">{initiative.impact.satisfactionRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Communities Served</span>
                      <span className="font-semibold">{initiative.impact.communitiesReached}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Get Involved</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interested in volunteering or partnering with this initiative?
                    </p>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.readingTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
