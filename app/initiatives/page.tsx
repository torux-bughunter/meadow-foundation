import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Calendar, ArrowRight, Filter } from "lucide-react"

// Mock initiatives data - in real app this would come from CMS
const initiatives = [
  {
    id: 1,
    title: "Mobile Physiotherapy Clinics",
    slug: "mobile-physiotherapy-clinics",
    summary:
      "Bringing professional physiotherapy services directly to underserved rural communities through our mobile clinic program.",
    image: "/mobile-physio-rural.png",
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
    },
  },
  {
    id: 2,
    title: "Community Health Education Workshops",
    slug: "community-health-education-workshops",
    summary:
      "Interactive workshops teaching injury prevention, proper posture, and basic physiotherapy techniques to community groups.",
    image: "/community-physio-workshop.png",
    tags: ["Education", "Prevention", "Community"],
    category: "education",
    location: "Community Centers",
    participants: "300+ attendees",
    status: "Active",
    startDate: "2023-03-15",
    impact: {
      workshopsHeld: 24,
      participantsEducated: 312,
      materialsDistributed: 800,
    },
  },
  {
    id: 3,
    title: "Student Training & Mentorship Program",
    slug: "student-training-mentorship",
    summary:
      "Providing hands-on clinical experience and mentorship opportunities for physiotherapy students in community settings.",
    image: "/physiotherapy-student-training.png",
    tags: ["Education", "Training", "Students"],
    category: "education",
    location: "Multiple Sites",
    participants: "45 students",
    status: "Active",
    startDate: "2023-09-01",
    impact: {
      studentsTrained: 45,
      clinicalHours: 2400,
      mentorshipSessions: 180,
    },
  },
  {
    id: 4,
    title: "Workplace Injury Prevention Program",
    slug: "workplace-injury-prevention",
    summary:
      "Partnering with local businesses to reduce workplace injuries through ergonomic assessments and employee education.",
    image: "/workplace-injury-prevention.png",
    tags: ["Prevention", "Workplace", "Ergonomics"],
    category: "outreach",
    location: "Local Businesses",
    participants: "200+ employees",
    status: "Active",
    startDate: "2023-01-10",
    impact: {
      businessesPartnered: 8,
      employeesEducated: 215,
      injuryReduction: "35%",
    },
  },
  {
    id: 5,
    title: "Senior Mobility & Fall Prevention",
    slug: "senior-mobility-fall-prevention",
    summary:
      "Specialized programs for seniors focusing on balance training, strength building, and fall prevention strategies.",
    image: "/senior-mobility-program.png",
    tags: ["Seniors", "Prevention", "Mobility"],
    category: "clinics",
    location: "Senior Centers",
    participants: "150+ seniors",
    status: "Active",
    startDate: "2023-04-20",
    impact: {
      seniorsServed: 156,
      fallsReduced: "42%",
      mobilityImproved: "78%",
    },
  },
  {
    id: 6,
    title: "Sports Injury Recovery Clinic",
    slug: "sports-injury-recovery-clinic",
    summary:
      "Specialized rehabilitation services for athletes and sports enthusiasts, focusing on safe return to activity.",
    image: "/sports-injury-clinic.png",
    tags: ["Sports", "Rehabilitation", "Athletes"],
    category: "clinics",
    location: "Sports Facilities",
    participants: "120+ athletes",
    status: "Active",
    startDate: "2023-02-01",
    impact: {
      athletesTreated: 124,
      returnToSportRate: "92%",
      reinjuryRate: "8%",
    },
  },
]

const categories = [
  { value: "all", label: "All Initiatives" },
  { value: "clinics", label: "Clinical Services" },
  { value: "education", label: "Education & Training" },
  { value: "outreach", label: "Community Outreach" },
]

function InitiativeCard({ initiative }: { initiative: (typeof initiatives)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          src={initiative.image || "/placeholder.svg"}
          alt={initiative.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {initiative.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground">{initiative.tags[0]}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-serif font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
          <Link href={`/initiatives/${initiative.slug}`}>{initiative.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{initiative.summary}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {initiative.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            {initiative.participants}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            Started{" "}
            {new Date(initiative.startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {initiative.tags.slice(1).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/initiatives/${initiative.slug}`}>
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={`/donate?initiative=${initiative.slug}`}>Support This</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Initiatives</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how Meadow Foundation is making physiotherapy accessible to communities through innovative
              programs and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="font-semibold">Filter Initiatives</h2>
            </div>

            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="impact">Most Impact</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Want to Get Involved?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in making physiotherapy accessible to everyone. Whether through volunteering, partnerships, or
            donations, every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Volunteer With Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
