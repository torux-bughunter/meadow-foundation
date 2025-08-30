import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Clock, Users, Heart, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Get in Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">We'd Love to Hear From You</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you have questions, want to volunteer, or need support, our team is here to help. Reach out and join
            our community of healthcare advocates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-foreground">Contact Information</h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to connect with our team and get the support you need.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@meadowfoundation.org</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif font-semibold text-foreground">Office</h3>
                      <p className="text-muted-foreground">
                        123 Health Street
                        <br />
                        Medical City, MC 12345
                      </p>
                      <p className="text-sm text-muted-foreground">By appointment only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif font-semibold text-foreground">Office Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Forms */}
          <div className="space-y-8">
            {/* General Contact Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <CardTitle>Send us a Message</CardTitle>
                </div>
                <CardDescription>
                  Have a question or need support? We're here to help with any inquiries about physiotherapy or our
                  services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="services">Services Information</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
                </div>

                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Volunteer Interest Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <CardTitle>Volunteer With Us</CardTitle>
                </div>
                <CardDescription>
                  Interested in volunteering? Let us know your skills and availability, and we'll match you with the
                  right opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="volFirstName">First Name</Label>
                    <Input id="volFirstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volLastName">Last Name</Label>
                    <Input id="volLastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="volEmail">Email Address</Label>
                  <Input id="volEmail" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Professional Background</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your background" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
                      <SelectItem value="healthcare">Other Healthcare Professional</SelectItem>
                      <SelectItem value="student">Student (Healthcare)</SelectItem>
                      <SelectItem value="educator">Educator</SelectItem>
                      <SelectItem value="marketing">Marketing/Communications</SelectItem>
                      <SelectItem value="admin">Administrative</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Areas of Interest (select all that apply)</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content" />
                      <Label htmlFor="content" className="text-sm">
                        Content Creation & Writing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="outreach" />
                      <Label htmlFor="outreach" className="text-sm">
                        Community Outreach
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="clinical" />
                      <Label htmlFor="clinical" className="text-sm">
                        Clinical Services
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="education" />
                      <Label htmlFor="education" className="text-sm">
                        Educational Programs
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="events" />
                      <Label htmlFor="events" className="text-sm">
                        Event Planning
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="admin-vol" />
                      <Label htmlFor="admin-vol" className="text-sm">
                        Administrative Support
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Textarea
                    id="availability"
                    placeholder="Tell us about your availability and time commitment..."
                    className="min-h-[80px]"
                  />
                </div>

                <Button className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Submit Volunteer Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
