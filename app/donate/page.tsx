"use client"

import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Shield,
  Lock,
  Users,
  Stethoscope,
  GraduationCap,
  Building,
  CheckCircle,
  CreditCard,
  Smartphone,
  Globe,
  ArrowRight,
  Info,
} from "lucide-react"

const donationAmounts = [
  { amount: 25, impact: "Provides educational materials for 5 patients" },
  { amount: 50, impact: "Funds one patient screening and assessment" },
  { amount: 100, impact: "Supports a full day of mobile clinic operations" },
  { amount: 250, impact: "Covers physiotherapy equipment for rural clinic" },
  { amount: 500, impact: "Sponsors a community health workshop" },
  { amount: 1000, impact: "Funds a month of student training program" },
]

const impactAreas = [
  {
    icon: Users,
    title: "Mobile Clinics",
    description: "Bringing physiotherapy to underserved communities",
    percentage: 40,
    color: "bg-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Training the next generation of physiotherapists",
    percentage: 30,
    color: "bg-green-500",
  },
  {
    icon: Stethoscope,
    title: "Patient Care",
    description: "Direct treatment and rehabilitation services",
    percentage: 20,
    color: "bg-purple-500",
  },
  {
    icon: Building,
    title: "Operations",
    description: "Administrative costs and infrastructure",
    percentage: 10,
    color: "bg-orange-500",
  },
]

const trustSignals = [
  { icon: Shield, text: "SSL Secured" },
  { icon: Lock, text: "PCI Compliant" },
  { icon: CheckCircle, text: "501(c)(3) Nonprofit" },
  { icon: Globe, text: "Transparent Impact" },
]

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "paypal", name: "PayPal", icon: Smartphone },
]

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [employerMatch, setEmployerMatch] = useState(false)
  const [newsletter, setNewsletter] = useState(true)
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  })

  const getCurrentAmount = () => {
    if (customAmount && !selectedAmount) {
      return Number.parseFloat(customAmount) || 0
    }
    return selectedAmount || 0
  }

  const getCurrentImpact = () => {
    const amount = getCurrentAmount()
    const impactItem = donationAmounts.find((item) => item.amount <= amount)
    return impactItem?.impact || "Makes a meaningful difference in our community programs"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your donation helps us bring quality physiotherapy care to communities that need it most. Every
              contribution makes a real difference in someone's recovery journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <h2 className="font-serif text-2xl font-semibold">Make a Donation</h2>
                  <p className="text-muted-foreground">
                    Choose your donation amount and frequency to support our programs.
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Donation Type */}
                  <Tabs
                    value={donationType}
                    onValueChange={(value) => setDonationType(value as "one-time" | "monthly")}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="one-time">One-Time</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    </TabsList>

                    <TabsContent value="one-time" className="mt-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Make a one-time contribution to support our current programs.
                      </p>
                    </TabsContent>

                    <TabsContent value="monthly" className="mt-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Join our monthly giving program for sustained impact. Cancel anytime.
                      </p>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary">
                          Monthly donors receive exclusive updates and impact reports!
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Select Amount {donationType === "monthly" && "(per month)"}
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {donationAmounts.map((item) => (
                        <Button
                          key={item.amount}
                          variant={selectedAmount === item.amount ? "default" : "outline"}
                          className="h-auto p-4 flex flex-col items-center"
                          onClick={() => {
                            setSelectedAmount(item.amount)
                            setCustomAmount("")
                          }}
                        >
                          <span className="text-lg font-bold">${item.amount}</span>
                          <span className="text-xs text-center mt-1 opacity-80">
                            {item.impact.split(" ").slice(0, 4).join(" ")}...
                          </span>
                        </Button>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Label htmlFor="custom-amount" className="text-sm font-medium">
                        Other Amount:
                      </Label>
                      <div className="relative flex-1 max-w-xs">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="0.00"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value)
                            setSelectedAmount(null)
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Impact Display */}
                  {getCurrentAmount() > 0 && (
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Your Impact</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            ${getCurrentAmount()}
                            {donationType === "monthly" && "/month"} {getCurrentImpact()}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Employer Match */}
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="employer-match" 
                      checked={employerMatch} 
                      onCheckedChange={(checked) => setEmployerMatch(checked === true)} 
                    />
                    <div className="space-y-1">
                      <Label htmlFor="employer-match" className="text-sm font-medium cursor-pointer">
                        My employer offers matching gifts
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Double your impact! We'll help you submit the matching gift request.
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {paymentMethods.map((method) => (
                        <Button
                          key={method.id}
                          variant={paymentMethod === method.id ? "default" : "outline"}
                          className="h-auto p-4 justify-start"
                          onClick={() => setPaymentMethod(method.id)}
                        >
                          <method.icon className="w-5 h-5 mr-3" />
                          {method.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Donor Information</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={donorInfo.firstName}
                          onChange={(e) => setDonorInfo({ ...donorInfo, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={donorInfo.lastName}
                          onChange={(e) => setDonorInfo({ ...donorInfo, lastName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email" className="text-sm">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={donorInfo.phone}
                          onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="address" className="text-sm">
                          Address
                        </Label>
                        <Input
                          id="address"
                          value={donorInfo.address}
                          onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-sm">
                          City
                        </Label>
                        <Input
                          id="city"
                          value={donorInfo.city}
                          onChange={(e) => setDonorInfo({ ...donorInfo, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-sm">
                          State
                        </Label>
                        <Select
                          value={donorInfo.state}
                          onValueChange={(value) => setDonorInfo({ ...donorInfo, state: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            {/* Add more states as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zip" className="text-sm">
                          ZIP Code
                        </Label>
                        <Input
                          id="zip"
                          value={donorInfo.zip}
                          onChange={(e) => setDonorInfo({ ...donorInfo, zip: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Opt-in */}
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="newsletter" 
                      checked={newsletter} 
                      onCheckedChange={(checked) => setNewsletter(checked === true)} 
                    />
                    <div className="space-y-1">
                      <Label htmlFor="newsletter" className="text-sm font-medium cursor-pointer">
                        Subscribe to our newsletter
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Stay updated on our impact and upcoming initiatives.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button size="lg" className="w-full" disabled={getCurrentAmount() <= 0}>
                    {paymentMethod === "paypal" ? "Continue with PayPal" : "Complete Donation"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Trust Signals */}
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-border">
                    {trustSignals.map((signal, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <signal.icon className="w-4 h-4" />
                        {signal.text}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Impact Breakdown */}
                <Card className="border-border">
                  <CardHeader>
                    <h3 className="font-semibold text-lg">How Your Donation Helps</h3>
                    <p className="text-sm text-muted-foreground">
                      See exactly how your contribution supports our programs
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {impactAreas.map((area, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <area.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">{area.title}</span>
                          </div>
                          <span className="text-sm font-semibold">{area.percentage}%</span>
                        </div>
                        <Progress value={area.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">{area.description}</p>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                        <Link href="/impact">
                          View Detailed Impact Report
                          <Info className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Impact */}
                <Card className="border-border">
                  <CardHeader>
                    <h3 className="font-semibold">Recent Impact</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">1,247</div>
                      <div className="text-sm text-muted-foreground">Patients served this year</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-primary">24</div>
                        <div className="text-xs text-muted-foreground">Communities reached</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-primary">156</div>
                        <div className="text-xs text-muted-foreground">Students trained</div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href="/impact">See Full Impact Dashboard</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Tax Information */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Tax Deductible</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Meadow Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the
                      full extent allowed by law.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      EIN: 12-3456789
                      <br />
                      You will receive an email receipt for your records.
                    </p>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Questions?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Need help with your donation or want to discuss other ways to support us?
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href="/contact">Contact Our Team</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Other Ways to Support</h2>
            <p className="text-xl text-muted-foreground">There are many ways to make a difference in our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
                <p className="text-muted-foreground mb-4">
                  Join our team of dedicated volunteers and directly impact patient care.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-8">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Corporate Partnership</h3>
                <p className="text-muted-foreground mb-4">
                  Partner with us to support employee wellness and community health.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Planned Giving</h3>
                <p className="text-muted-foreground mb-4">
                  Create a lasting legacy through planned gifts and bequests.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">Explore Options</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
