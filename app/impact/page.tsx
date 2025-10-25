"use client"

import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Clock,
  Heart,
  FileText,
  ExternalLink,
  Award,
  Eye,
  Download,
  Shield,
} from "lucide-react"

// Mock data - in real app this would come from APIs
const kpiData = {
  totalRaised: 127500,
  targetRaised: 200000,
  peopleImpacted: 1247,
  targetPeople: 1500,
  siteTraffic: 15420,
  contentViews: 8930,
  volunteerHours: 2340,
  lastUpdated: "2024-01-15T10:30:00Z",
}

const donationsOverTime = [
  { month: "Jul 2023", amount: 8500 },
  { month: "Aug 2023", amount: 12300 },
  { month: "Sep 2023", amount: 15600 },
  { month: "Oct 2023", amount: 18900 },
  { month: "Nov 2023", amount: 22100 },
  { month: "Dec 2023", amount: 28400 },
  { month: "Jan 2024", amount: 31200 },
]

const impactByInitiative = [
  { name: "Mobile Clinics", people: 547, funding: 45000 },
  { name: "Education Programs", people: 312, funding: 28000 },
  { name: "Student Training", people: 156, funding: 22000 },
  { name: "Workplace Prevention", people: 215, funding: 18000 },
  { name: "Senior Programs", people: 156, funding: 14500 },
]

const fundingAllocation = [
  { name: "Direct Patient Care", value: 45, color: "#059669" },
  { name: "Education & Training", value: 30, color: "#10b981" },
  { name: "Community Outreach", value: 15, color: "#34d399" },
  { name: "Operations", value: 10, color: "#6ee7b7" },
]

const recentMilestones = [
  {
    id: 1,
    date: "2024-01-10",
    title: "Reached 1,200 patients served milestone",
    description: "Our mobile clinics have now provided care to over 1,200 patients across rural communities.",
    link: "/blog/1200-patients-milestone",
    proofLink: "https://drive.google.com/folder/milestone-1200-patients",
  },
  {
    id: 2,
    date: "2024-01-05",
    title: "New partnership with Regional Health Network",
    description: "Expanded our reach through strategic partnership, adding 3 new clinic locations.",
    link: "/initiatives/mobile-physiotherapy-clinics",
    proofLink: "https://drive.google.com/folder/partnership-agreement",
  },
  {
    id: 3,
    date: "2023-12-20",
    title: "Student training program graduation",
    description: "45 physiotherapy students completed our community-based training program.",
    link: "/initiatives/student-training-mentorship",
    proofLink: "https://drive.google.com/folder/graduation-certificates",
  },
  {
    id: 4,
    date: "2023-12-15",
    title: "Workplace injury prevention success",
    description: "Achieved 35% reduction in workplace injuries across partner businesses.",
    link: "/initiatives/workplace-injury-prevention",
    proofLink: "https://drive.google.com/folder/workplace-impact-report",
  },
]

const certificationLinks = [
  {
    title: "Annual Financial Report 2023",
    description: "Complete breakdown of income, expenses, and program allocations",
    link: "https://drive.google.com/folder/annual-report-2023",
    icon: FileText,
  },
  {
    title: "Program Impact Certifications",
    description: "Third-party verification of patient outcomes and community impact",
    link: "https://drive.google.com/folder/impact-certifications",
    icon: Award,
  },
  {
    title: "Donation Receipts & Records",
    description: "Transparent record of all donations and their allocation",
    link: "https://drive.google.com/folder/donation-records",
    icon: DollarSign,
  },
  {
    title: "Partnership Agreements",
    description: "Formal agreements with healthcare partners and community organizations",
    link: "https://drive.google.com/folder/partnerships",
    icon: Users,
  },
]

export default function ImpactPage() {
  const [timeRange, setTimeRange] = useState("12months")
  const [selectedMetric, setSelectedMetric] = useState("all")

  const fundingProgress = (kpiData.totalRaised / kpiData.targetRaised) * 100
  const peopleProgress = (kpiData.peopleImpacted / kpiData.targetPeople) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Impact</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent reporting on how your support is making a real difference in communities. Every metric is
              verified and backed by documentation.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Last updated:{" "}
              {new Date(kpiData.lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="12months">Last 12 Months</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metrics</SelectItem>
                  <SelectItem value="funding">Funding Only</SelectItem>
                  <SelectItem value="patients">Patient Impact</SelectItem>
                  <SelectItem value="programs">Program Metrics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://drive.google.com/folder/impact-certifications" target="_blank">
                  <Shield className="w-4 h-4 mr-2" />
                  View Certifications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-coral-bg rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-coral" />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://drive.google.com/folder/funding-proof" target="_blank">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Raised</p>
                  <p className="text-3xl font-bold text-foreground">${kpiData.totalRaised.toLocaleString()}</p>
                  <div className="space-y-1">
                    <Progress value={fundingProgress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {Math.round(fundingProgress)}% of ${kpiData.targetRaised.toLocaleString()} goal
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://drive.google.com/folder/patient-records" target="_blank">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">People Impacted</p>
                  <p className="text-3xl font-bold text-foreground">{kpiData.peopleImpacted.toLocaleString()}</p>
                  <div className="space-y-1">
                    <Progress value={peopleProgress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {Math.round(peopleProgress)}% of {kpiData.targetPeople.toLocaleString()} target
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://analytics.google.com/analytics/web/" target="_blank">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Site Visitors</p>
                  <p className="text-3xl font-bold text-foreground">{kpiData.siteTraffic.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Monthly unique visitors</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://drive.google.com/folder/volunteer-hours" target="_blank">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Volunteer Hours</p>
                  <p className="text-3xl font-bold text-foreground">{kpiData.volunteerHours.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">This year</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Donations Over Time */}
            <Card className="border-border">
              <CardHeader>
                <h3 className="font-semibold text-lg">Donations Over Time</h3>
                <p className="text-sm text-muted-foreground">Monthly donation trends showing growth trajectory</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={donationsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Donations"]} />
                    <Line type="monotone" dataKey="amount" stroke="#059669" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Impact by Initiative */}
            <Card className="border-border">
              <CardHeader>
                <h3 className="font-semibold text-lg">Impact by Initiative</h3>
                <p className="text-sm text-muted-foreground">People reached through each program</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={impactByInitiative}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="people" fill="#059669" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Funding Allocation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-1 border-border">
              <CardHeader>
                <h3 className="font-semibold text-lg">Funding Allocation</h3>
                <p className="text-sm text-muted-foreground">How your donations are used</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={fundingAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {fundingAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 border-border">
              <CardHeader>
                <h3 className="font-semibold text-lg">Allocation Breakdown</h3>
                <p className="text-sm text-muted-foreground">Detailed view of fund distribution</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {fundingAllocation.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold">{item.value}%</span>
                      <p className="text-xs text-muted-foreground">
                        ${((kpiData.totalRaised * item.value) / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href="https://drive.google.com/folder/financial-breakdown" target="_blank">
                      <FileText className="w-4 h-4 mr-2" />
                      View Detailed Financial Report
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Milestones */}
          <Card className="border-border mb-12">
            <CardHeader>
              <h3 className="font-semibold text-lg">Recent Milestones</h3>
              <p className="text-sm text-muted-foreground">
                Key achievements and program updates with verification links
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentMilestones.map((milestone) => (
                  <div key={milestone.id} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {new Date(milestone.date).toLocaleDateString()}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{milestone.description}</p>
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={milestone.link}>
                            Learn More
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={milestone.proofLink} target="_blank">
                            <Shield className="w-3 h-3 mr-1" />
                            View Proof
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Verification & Transparency */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transparency & Verification</h2>
            <p className="text-xl text-muted-foreground">
              All our impact metrics are backed by verifiable documentation and third-party certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationLinks.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                      <Button variant="outline" size="sm" asChild className="bg-transparent">
                        <Link href={cert.link} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Documents
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Questions about our impact reporting or need additional documentation?
            </p>
            <Button asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
