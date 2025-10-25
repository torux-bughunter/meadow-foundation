"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Our Work", href: "/#our-work" },
  { name: "Initiatives", href: "/#initiatives" },
  { name: "Our Team", href: "/#our-team" },
  { name: "Blog", href: "/blog" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contact", href: "/contact" },
]

const scrollToSection = (href: string) => {
  if (href.startsWith('/#')) {
    const elementId = href.substring(2)
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center -ml-8">
            <Image
              src="/medow_nobg.png"
              alt="Medow Foundation"
              width={160}
              height={160}
              className="w-40 h-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.href.startsWith('/#')) {
                    scrollToSection(item.href)
                  } else {
                    window.location.href = item.href
                  }
                }}
                className="text-muted-foreground hover:text-coral transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href.startsWith('/#')) {
                      scrollToSection(item.href)
                    } else {
                      window.location.href = item.href
                    }
                    setIsOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-coral transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
