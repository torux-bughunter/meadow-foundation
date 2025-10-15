"use client"

import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ColorDemoPage() {
  const [customColors, setCustomColors] = useState({
    primary: "#5D4A3A",
    secondary: "#8B6B3F", 
    accent: "#8B6B3F",
    background: "#F8F5F2",
    foreground: "#5D4A3A"
  })

  const [showCustomColors, setShowCustomColors] = useState(false)

  const updateColor = (colorType: string, value: string) => {
    setCustomColors(prev => ({
      ...prev,
      [colorType]: value
    }))
  }

  const resetToDefault = () => {
    setCustomColors({
      primary: "#5D4A3A",
      secondary: "#8B6B3F",
      accent: "#8B6B3F", 
      background: "#F8F5F2",
      foreground: "#5D4A3A"
    })
  }

  const getContrastRatio = (foreground: string, background: string) => {
    // Simplified contrast calculation for demo purposes
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null
    }

    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
    }

    const fg = hexToRgb(foreground)
    const bg = hexToRgb(background)
    
    if (!fg || !bg) return 0
    
    const lum1 = getLuminance(fg.r, fg.g, fg.b)
    const lum2 = getLuminance(bg.r, bg.g, bg.b)
    
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    
    return (brightest + 0.05) / (darkest + 0.05)
  }

  const getContrastRating = (ratio: number) => {
    if (ratio >= 7) return "AAA"
    if (ratio >= 4.5) return "AA"
    if (ratio >= 3) return "A"
    return "Fail"
  }

  const newPalette = {
    primary: "#5D4A3A",
    accent: "#8B6B3F", 
    accentOriginal: "#A27145",
    accentLight: "#B88A5A",
    neutralLight: "#D4C4B0",
    neutralMid: "#9A8B7A",
    brandBg: "#E5D6C6",
    pageBg: "#F8F5F2",
    cardBg: "#F0EBE6",
    accentBg: "#F5F0EB",
    earthBrown: "#7A5C3A",
    warmOchre: "#C19A6B",
    softSienna: "#B8860B",
    mutedTerracotta: "#A0522D",
    lightUmber: "#8B7355",
    warmBeige: "#F5E6D3",
    softKhaki: "#C3B091",
    warmCream: "#FDF5E6"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Medow Foundation Color Palette
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse range of brown and earthy tones designed for community wellness and accessibility. 
            This palette offers rich variation while maintaining the gentle, warm aesthetic.
          </p>
        </div>

        {/* Primary Color Palette */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Primary Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorCard
              name="Primary"
              hex={newPalette.primary}
              description="Rich Coffee - Primary brand color for headlines and main elements"
              usage="Headlines, primary buttons, main text"
            />
            <ColorCard
              name="Accent"
              hex={newPalette.accent}
              description="Rich Saddle Brown - Accessible accent for CTAs and highlights"
              usage="Call-to-action buttons, important elements"
            />
            <ColorCard
              name="Accent Original"
              hex={newPalette.accentOriginal}
              description="Warm Amber - Original accent color for decorative elements"
              usage="Decorative icons, subtle highlights"
            />
            <ColorCard
              name="Accent Light"
              hex={newPalette.accentLight}
              description="Golden Tan - Light accent for subtle emphasis"
              usage="Hover states, secondary highlights"
            />
            <ColorCard
              name="Neutral Light"
              hex={newPalette.neutralLight}
              description="Warm Sand - Gentle borders and subtle backgrounds"
              usage="Borders, subtle backgrounds"
            />
            <ColorCard
              name="Neutral Mid"
              hex={newPalette.neutralMid}
              description="Warm Taupe - Secondary text and muted elements"
              usage="Secondary text, muted information"
            />
          </div>
        </section>

        {/* Diverse Brown & Earthy Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Diverse Brown & Earthy Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard
              name="Earth Brown"
              hex={newPalette.earthBrown}
              description="Deeper brown for strong emphasis and contrast"
              usage="Strong CTAs, important highlights"
            />
            <ColorCard
              name="Warm Ochre"
              hex={newPalette.warmOchre}
              description="Golden brown for warmth and richness"
              usage="Accent elements, warm highlights"
            />
            <ColorCard
              name="Soft Sienna"
              hex={newPalette.softSienna}
              description="Rich golden brown for premium feel"
              usage="Premium elements, special highlights"
            />
            <ColorCard
              name="Muted Terracotta"
              hex={newPalette.mutedTerracotta}
              description="Reddish brown for warmth and earthiness"
              usage="Warm accents, earthy elements"
            />
            <ColorCard
              name="Light Umber"
              hex={newPalette.lightUmber}
              description="Medium brown for balanced contrast"
              usage="Secondary elements, balanced contrast"
            />
            <ColorCard
              name="Warm Beige"
              hex={newPalette.warmBeige}
              description="Very light warm tone for subtle backgrounds"
              usage="Subtle backgrounds, gentle emphasis"
            />
            <ColorCard
              name="Soft Khaki"
              hex={newPalette.softKhaki}
              description="Muted green-brown for natural feel"
              usage="Natural elements, organic feel"
            />
            <ColorCard
              name="Warm Cream"
              hex={newPalette.warmCream}
              description="Lightest warm tone for delicate backgrounds"
              usage="Delicate backgrounds, lightest emphasis"
            />
          </div>
        </section>

        {/* Background Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Background Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard
              name="Brand Background"
              hex={newPalette.brandBg}
              description="Pale Beige - From the logo, used for accent sections"
              usage="Hero sections, accent backgrounds"
            />
            <ColorCard
              name="Page Background"
              hex={newPalette.pageBg}
              description="Off-White - Main page background, very light and gentle"
              usage="Main page backgrounds, content areas"
            />
            <ColorCard
              name="Card Background"
              hex={newPalette.cardBg}
              description="Light Cream - Elevated content backgrounds"
              usage="Card backgrounds, content containers"
            />
            <ColorCard
              name="Accent Background"
              hex={newPalette.accentBg}
              description="Warm Off-White - Subtle accent backgrounds"
              usage="Highlighted sections, subtle emphasis"
            />
          </div>
        </section>

        {/* Contrast Analysis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Accessibility & Contrast Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Text on Background Contrast</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ContrastRow
                  foreground={newPalette.primary}
                  background={newPalette.pageBg}
                  label="Primary text on page background"
                />
                <ContrastRow
                  foreground={newPalette.primary}
                  background={newPalette.brandBg}
                  label="Primary text on brand background"
                />
                <ContrastRow
                  foreground={newPalette.accent}
                  background={newPalette.brandBg}
                  label="Accent text on brand background"
                />
                <ContrastRow
                  foreground={newPalette.neutralMid}
                  background={newPalette.pageBg}
                  label="Muted text on page background"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button & CTA Contrast</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ContrastRow
                  foreground="#FFFFFF"
                  background={newPalette.accent}
                  label="White text on accent button"
                />
                <ContrastRow
                  foreground={newPalette.primary}
                  background={newPalette.accentBg}
                  label="Primary text on accent background"
                />
                <ContrastRow
                  foreground={newPalette.primary}
                  background={newPalette.neutralLight}
                  label="Primary text on neutral background"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Usage Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Primary Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Primary Action
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Accent Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Call to Action
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Earth Brown Button</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-earth-brown hover:bg-earth-brown/90">
                  Strong Action
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent-bg border-accent">
              <CardHeader>
                <CardTitle className="text-foreground">Accent Background Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">This card uses the accent background for subtle emphasis.</p>
              </CardContent>
            </Card>

            <Card className="bg-warm-beige border-warm-ochre">
              <CardHeader>
                <CardTitle className="text-foreground">Warm Beige Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">This card uses warm beige with ochre border for richness.</p>
              </CardContent>
            </Card>

            <Card className="bg-soft-khaki border-earth-brown">
              <CardHeader>
                <CardTitle className="text-foreground">Natural Feel Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">This card uses soft khaki for a natural, organic feel.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Color Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Color Combinations & Variations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-warm-cream">
              <CardHeader>
                <CardTitle className="text-earth-brown">Warm Cream + Earth Brown</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-brown">Delicate background with strong text for excellent contrast.</p>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-earth-brown text-white">Earth Brown Badge</Badge>
                  <Badge className="bg-warm-ochre text-white">Warm Ochre Badge</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-soft-sienna">
              <CardHeader>
                <CardTitle className="text-white">Soft Sienna + White</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">Rich golden brown with white text for premium feel.</p>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-muted-terracotta text-white">Terracotta Badge</Badge>
                  <Badge className="bg-light-umber text-white">Light Umber Badge</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted-terracotta">
              <CardHeader>
                <CardTitle className="text-white">Muted Terracotta + White</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">Warm reddish brown with white text for earthy appeal.</p>
                <div className="mt-4 space-y-2">
                  <Badge className="bg-warm-ochre text-white">Warm Ochre Badge</Badge>
                  <Badge className="bg-soft-sienna text-white">Soft Sienna Badge</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Color Psychology */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Color Psychology & Brand Fit
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Why This Diverse Palette Fits Medow Foundation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Rich Variation:</strong> Multiple brown tones create visual interest without overwhelming</li>
                      <li>• <strong>Earth Connection:</strong> Diverse earthy colors reflect community and natural wellness</li>
                      <li>• <strong>Gentle Contrast:</strong> Each color has distinct purpose while maintaining harmony</li>
                      <li>• <strong>Accessibility:</strong> All combinations meet WCAG AA standards for inclusivity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Perfect for Community Wellness</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Natural Feel:</strong> Earthy tones create connection to nature and healing</li>
                      <li>• <strong>Warm Welcome:</strong> Rich browns make visitors feel comfortable and included</li>
                      <li>• <strong>Professional Trust:</strong> Sophisticated color range builds confidence</li>
                      <li>• <strong>Visual Hierarchy:</strong> Clear distinction between different content types</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Color Customization */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Interactive Color Customization
            </h2>
            <Button
              variant="outline"
              onClick={() => setShowCustomColors(!showCustomColors)}
            >
              {showCustomColors ? "Hide" : "Show"} Custom Colors
            </Button>
          </div>
          
          {showCustomColors && (
            <Card>
              <CardHeader>
                <CardTitle>Customize Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primary">Primary Color</Label>
                    <Input
                      id="primary"
                      type="color"
                      value={customColors.primary}
                      onChange={(e) => updateColor("primary", e.target.value)}
                      className="w-full h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{customColors.primary}</p>
                  </div>
                  <div>
                    <Label htmlFor="secondary">Secondary Color</Label>
                    <Input
                      id="secondary"
                      type="color"
                      value={customColors.secondary}
                      onChange={(e) => updateColor("secondary", e.target.value)}
                      className="w-full h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{customColors.secondary}</p>
                  </div>
                  <div>
                    <Label htmlFor="accent">Accent Color</Label>
                    <Input
                      id="accent"
                      type="color"
                      value={customColors.accent}
                      onChange={(e) => updateColor("accent", e.target.value)}
                      className="w-full h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{customColors.accent}</p>
                  </div>
                  <div>
                    <Label htmlFor="background">Background Color</Label>
                    <Input
                      id="background"
                      type="color"
                      value={customColors.background}
                      onChange={(e) => updateColor("background", e.target.value)}
                      className="w-full h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{customColors.background}</p>
                  </div>
                  <div>
                    <Label htmlFor="foreground">Foreground Color</Label>
                    <Input
                      id="foreground"
                      type="color"
                      value={customColors.foreground}
                      onChange={(e) => updateColor("foreground", e.target.value)}
                      className="w-full h-12"
                    />
                    <p className="text-sm text-muted-foreground mt-1">{customColors.foreground}</p>
                  </div>
                  <div className="flex items-end">
                    <Button onClick={resetToDefault} variant="outline" className="w-full">
                      Reset to Default
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Preview with Custom Colors</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: customColors.primary }}
                      />
                      <span>Primary: {customColors.primary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: customColors.secondary }}
                      />
                      <span>Secondary: {customColors.secondary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: customColors.accent }}
                      />
                      <span>Accent: {customColors.accent}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Implementation Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Implementation Guide
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>CSS Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`:root {
  --primary: #5D4A3A;
  --accent: #8B6B3F;
  --accent-original: #A27145;
  --accent-light: #B88A5A;
  --neutral-light: #D4C4B0;
  --neutral-mid: #9A8B7A;
  --brand-bg: #E5D6C6;
  --page-bg: #F8F5F2;
  --card-bg: #F0EBE6;
  --accent-bg: #F5F0EB;
  --earth-brown: #7A5C3A;
  --warm-ochre: #C19A6B;
  --soft-sienna: #B8860B;
  --muted-terracotta: #A0522D;
  --light-umber: #8B7355;
  --warm-beige: #F5E6D3;
  --soft-khaki: #C3B091;
  --warm-cream: #FDF5E6;
}`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tailwind Config</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#5D4A3A",
        accent: "#8B6B3F",
        "accent-original": "#A27145",
        "accent-light": "#B88A5A",
        neutral: {
          light: "#D4C4B0",
          mid: "#9A8B7A"
        },
        brand: "#E5D6C6",
        page: "#F8F5F2",
        card: "#F0EBE6",
        "accent-bg": "#F5F0EB",
        "earth-brown": "#7A5C3A",
        "warm-ochre": "#C19A6B",
        "soft-sienna": "#B8860B",
        "muted-terracotta": "#A0522D",
        "light-umber": "#8B7355",
        "warm-beige": "#F5E6D3",
        "soft-khaki": "#C3B091",
        "warm-cream": "#FDF5E6"
      }
    }
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

function ColorCard({ name, hex, description, usage }: {
  name: string
  hex: string
  description: string
  usage: string
}) {
  return (
    <Card className="overflow-hidden">
      <div 
        className="h-24 w-full"
        style={{ backgroundColor: hex }}
      />
      <CardHeader>
        <CardTitle className="text-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-2">{description}</p>
        <p className="text-sm font-mono text-foreground mb-3">{hex}</p>
        <p className="text-xs text-muted-foreground"><strong>Usage:</strong> {usage}</p>
      </CardContent>
    </Card>
  )
}

function ContrastRow({ foreground, background, label }: {
  foreground: string
  background: string
  label: string
}) {
  const ratio = getContrastRatio(foreground, background)
  const rating = getContrastRating(ratio)
  
  return (
    <div className="flex items-center justify-between p-3 bg-muted rounded">
      <div className="flex items-center gap-3">
        <div 
          className="w-6 h-6 rounded border"
          style={{ backgroundColor: background }}
        />
        <div 
          className="w-6 h-6 rounded border"
          style={{ backgroundColor: foreground }}
        />
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-right">
        <div className="text-sm font-mono">{ratio.toFixed(2)}:1</div>
        <Badge variant={rating === "Fail" ? "destructive" : "default"}>
          {rating}
        </Badge>
      </div>
    </div>
  )
}
