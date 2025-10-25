"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, MapPin, Users, Clock } from "lucide-react"

interface InitiativeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initiative: 'clinic' | 'blog' | 'spelling-bee' | null
}

export function InitiativeDialog({ open, onOpenChange, initiative }: InitiativeDialogProps) {
  const handleSpellingBeeSignup = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdB8n3pB2duLmliscjk7oV9wZu7TqcOzQIx3CgFw89UGOkd4Q/viewform', '_blank')
  }

  const renderClinicContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
          Healthcare Initiative
        </Badge>
        <Badge variant="outline">India</Badge>
      </div>
      
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Our Physiotherapy Clinic in India provides expert, affordable care close to those in need! With trained professionals, modern equipment, and personalized treatment plans, these clinics help people recover from injuries, manage chronic pain, and improve mobility. Accessible in marginalized areas, they bring quality healthcare within easy reach for individuals and families who are underserved.
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Expert Care</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Accessible Locations</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Personalized Treatment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Flexible Scheduling</span>
          </div>
        </div>
      </div>
      
    </div>
  )

  const renderBlogContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
          Educational Content
        </Badge>
        <Badge variant="outline">Coming Soon</Badge>
      </div>
      
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Looking for practical tips, inspiring stories, and expert insights? Our blog section is currently under development and will be launching soon!
        </p>
        
        <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
          <h4 className="font-semibold text-foreground mb-2">What to expect:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Evidence-based physiotherapy tips and exercises</li>
            <li>• Patient success stories and recovery journeys</li>
            <li>• Expert insights from our healthcare professionals</li>
            <li>• Community health education and awareness</li>
          </ul>
        </div>
      </div>
      
      <Button variant="outline" className="w-full" disabled>
        Coming Soon
      </Button>
    </div>
  )

  const renderSpellingBeeContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
          Educational Event
        </Badge>
        <Badge variant="outline">November 16th</Badge>
      </div>
      
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Join our fun and educational Spelling Bee! Challenge yourself, boost your vocabulary, and win exciting prizes. Learn from experts, including 2025 Scripps National Spelling Bee Champion Faizan Zaki. Sign up now with just one click!
        </p>
        
        <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="font-medium">Event Date: November 16th, 10:00AM</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-medium">Location: 1050 S Preston Rd #116, Celina, TX 75009</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-medium">Grades 1 - 8</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button onClick={handleSpellingBeeSignup} className="w-full bg-accent hover:bg-accent/90">
          <ExternalLink className="w-4 h-4 mr-2" />
          Sign Up Now
        </Button>
      </div>
    </div>
  )

  const getTitle = () => {
    switch (initiative) {
      case 'clinic':
        return 'Physiotherapy Clinic in India'
      case 'blog':
        return 'Our Blog'
      case 'spelling-bee':
        return 'MEDOW Spelling Bee'
      default:
        return ''
    }
  }

  const getDescription = () => {
    switch (initiative) {
      case 'clinic':
        return 'Expert physiotherapy care accessible to underserved communities'
      case 'blog':
        return 'Educational content and inspiring stories coming soon'
      case 'spelling-bee':
        return 'Educational spelling competition with prizes and expert guidance'
      default:
        return ''
    }
  }

  const renderContent = () => {
    switch (initiative) {
      case 'clinic':
        return renderClinicContent()
      case 'blog':
        return renderBlogContent()
      case 'spelling-bee':
        return renderSpellingBeeContent()
      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{getTitle()}</DialogTitle>
          <DialogDescription className="text-base">
            {getDescription()}
          </DialogDescription>
        </DialogHeader>
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}
