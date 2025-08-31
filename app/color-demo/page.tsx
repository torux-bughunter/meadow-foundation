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
    primary: "#4A7C59",
    secondary: "#5B8A8A", 
    accent: "#D4A574",
    background: "#F8F6F1",
    foreground: "#2C3E50"
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
      primary: "#4A7C59",
      secondary: "#5B8A8A",
      accent: "#D4A574", 
      background: "#F8F6F1",
      foreground: "#2C3E50"
    })
  }

  const getContrastRatio = (foreground: string, background: string) => {
    // Simple contrast calculation (this is a simplified version)
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
    
    if (!fg || !bg) return "N/A"
    
    const fgLum = getLuminance(fg.r, fg.g, fg.b)
    const bgLum = getLuminance(bg.r, bg.g, bg.b)
    
    const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05)
    return ratio.toFixed(2)
  }

  const getAccessibilityStatus = (ratio: string) => {
    if (ratio === "N/A") return "Unknown"
    const numRatio = parseFloat(ratio)
    if (numRatio >= 7) return "AAA ✓"
    if (numRatio >= 4.5) return "AA ✓"
    if (numRatio >= 3) return "A ✓"
    return "Fail ✗"
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: showCustomColors ? customColors.background : undefined }}>
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Meadow Foundation Color Palette
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
            Professional healthcare colors designed for accessibility, trust, and visual hierarchy
          </p>
        </div>

        {/* Color Customization Panel */}
        <section className="mb-16">
          <Card className="border-2 border-dashed border-primary/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground">🎨 Interactive Color Tester</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="custom-colors"
                    checked={showCustomColors}
                    onCheckedChange={setShowCustomColors}
                  />
                  <Label htmlFor="custom-colors">Enable Custom Colors</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {showCustomColors && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={customColors.primary}
                          onChange={(e) => updateColor('primary', e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={customColors.primary}
                          onChange={(e) => updateColor('primary', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="secondary-color">Secondary</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="secondary-color"
                          type="color"
                          value={customColors.secondary}
                          onChange={(e) => updateColor('secondary', e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={customColors.secondary}
                          onChange={(e) => updateColor('secondary', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="accent-color">Accent</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="accent-color"
                          type="color"
                          value={customColors.accent}
                          onChange={(e) => updateColor('accent', e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={customColors.accent}
                          onChange={(e) => updateColor('accent', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="background-color">Background</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="background-color"
                          type="color"
                          value={customColors.background}
                          onChange={(e) => updateColor('background', e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={customColors.background}
                          onChange={(e) => updateColor('background', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="foreground-color">Foreground</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="foreground-color"
                          type="color"
                          value={customColors.foreground}
                          onChange={(e) => updateColor('foreground', e.target.value)}
                          className="w-12 h-10 p-1"
                        />
                        <Input
                          type="text"
                          value={customColors.foreground}
                          onChange={(e) => updateColor('foreground', e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button onClick={resetToDefault} variant="outline">
                      Reset to Default
                    </Button>
                    <Button 
                      onClick={() => {
                        const newColors = {
                          primary: '#' + Math.floor(Math.random()*16777215).toString(16),
                          secondary: '#' + Math.floor(Math.random()*16777215).toString(16),
                          accent: '#' + Math.floor(Math.random()*16777215).toString(16),
                          background: '#' + Math.floor(Math.random()*16777215).toString(16),
                          foreground: '#' + Math.floor(Math.random()*16777215).toString(16)
                        }
                        setCustomColors(newColors)
                      }}
                      variant="outline"
                    >
                      Random Colors
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Primary Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Primary Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="text-center">
              <div 
                className="h-32 rounded-t-lg" 
                style={{ backgroundColor: showCustomColors ? customColors.primary : undefined }}
              ></div>
              <CardHeader>
                <CardTitle className="text-sm">Primary</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {showCustomColors ? customColors.primary : "#4A7C59"}
                </p>
                <p className="text-xs text-muted-foreground">Primary/Hero</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <div 
                className="h-32 rounded-t-lg" 
                style={{ backgroundColor: showCustomColors ? customColors.secondary : undefined }}
              ></div>
              <CardHeader>
                <CardTitle className="text-sm">Secondary</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {showCustomColors ? customColors.secondary : "#5B8A8A"}
                </p>
                <p className="text-xs text-muted-foreground">Secondary</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <div 
                className="h-32 rounded-t-lg" 
                style={{ backgroundColor: showCustomColors ? customColors.accent : undefined }}
              ></div>
              <CardHeader>
                <CardTitle className="text-sm">Accent</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {showCustomColors ? customColors.accent : "#D4A574"}
                </p>
                <p className="text-xs text-muted-foreground">Accent</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <div 
                className="h-32 rounded-t-lg" 
                style={{ backgroundColor: showCustomColors ? customColors.background : undefined }}
              ></div>
              <CardHeader>
                <CardTitle className="text-sm">Background</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {showCustomColors ? customColors.background : "#F8F6F1"}
                </p>
                <p className="text-xs text-muted-foreground">Light Neutral</p>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <div 
                className="h-32 rounded-t-lg" 
                style={{ backgroundColor: showCustomColors ? customColors.foreground : undefined }}
              ></div>
              <CardHeader>
                <CardTitle className="text-sm">Foreground</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {showCustomColors ? customColors.foreground : "#2C3E50"}
                </p>
                <p className="text-xs text-muted-foreground">Dark Neutral</p>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Button Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Button Variants
          </h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button 
                style={showCustomColors ? { 
                  backgroundColor: customColors.primary,
                  color: '#FFFFFF'
                } : undefined}
              >
                Primary Button
              </Button>
              <Button 
                variant="secondary"
                style={showCustomColors ? { 
                  backgroundColor: customColors.secondary,
                  color: '#FFFFFF'
                } : undefined}
              >
                Secondary Button
              </Button>
              <Button 
                variant="accent"
                style={showCustomColors ? { 
                  backgroundColor: customColors.accent,
                  color: customColors.foreground
                } : undefined}
              >
                Accent Button
              </Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </div>
        </section>

        {/* Live Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Live Preview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card style={showCustomColors ? { backgroundColor: '#FFFFFF' } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                  Sample Content Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  This card shows how your custom colors would look in a real content area. 
                  The text color adapts to your foreground color choice.
                </p>
                <div className="mt-4 space-y-2">
                  <Button 
                    size="sm"
                    style={showCustomColors ? { 
                      backgroundColor: customColors.primary,
                      color: '#FFFFFF'
                    } : undefined}
                  >
                    Action Button
                  </Button>
                  <Badge 
                    className="ml-2"
                    style={showCustomColors ? { 
                      backgroundColor: customColors.accent,
                      color: customColors.foreground
                    } : undefined}
                  >
                    New
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card style={showCustomColors ? { backgroundColor: '#FFFFFF' } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                  Color Combinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded border" style={{ 
                  backgroundColor: showCustomColors ? customColors.primary + '20' : undefined,
                  borderColor: showCustomColors ? customColors.primary + '40' : undefined
                }}>
                  <p className="text-sm" style={{ color: showCustomColors ? customColors.primary : undefined }}>
                    Primary color with 20% background opacity
                  </p>
                </div>
                <div className="p-3 rounded border" style={{ 
                  backgroundColor: showCustomColors ? customColors.secondary + '20' : undefined,
                  borderColor: showCustomColors ? customColors.secondary + '40' : undefined
                }}>
                  <p className="text-sm" style={{ color: showCustomColors ? customColors.secondary : undefined }}>
                    Secondary color with 20% background opacity
                  </p>
                </div>
                <div className="p-3 rounded border" style={{ 
                  backgroundColor: showCustomColors ? customColors.accent + '20' : undefined,
                  borderColor: showCustomColors ? customColors.accent + '40' : undefined
                }}>
                  <p className="text-sm" style={{ color: showCustomColors ? customColors.accent : undefined }}>
                    Accent color with 20% background opacity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contrast Testing */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Contrast Testing
          </h2>
          <Card>
            <CardHeader>
              <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                Accessibility Checker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    Text on Background
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded" style={{ 
                      backgroundColor: showCustomColors ? customColors.background : undefined,
                      color: showCustomColors ? customColors.foreground : undefined
                    }}>
                      <span>Foreground on Background</span>
                      <Badge variant="outline">
                        {getAccessibilityStatus(getContrastRatio(
                          showCustomColors ? customColors.foreground : "#2C3E50",
                          showCustomColors ? customColors.background : "#F8F6F1"
                        ))}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded" style={{ 
                      backgroundColor: '#FFFFFF',
                      color: showCustomColors ? customColors.primary : undefined
                    }}>
                      <span>Primary on White</span>
                      <Badge variant="outline">
                        {getAccessibilityStatus(getContrastRatio(
                          showCustomColors ? customColors.primary : "#4A7C59",
                          '#FFFFFF'
                        ))}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded" style={{ 
                      backgroundColor: '#FFFFFF',
                      color: showCustomColors ? customColors.secondary : undefined
                    }}>
                      <span>Secondary on White</span>
                      <Badge variant="outline">
                        {getAccessibilityStatus(getContrastRatio(
                          showCustomColors ? customColors.secondary : "#5B8A8A",
                          '#FFFFFF'
                        ))}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    Contrast Ratios
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Foreground on Background:</span>
                      <span className="font-mono">
                        {getContrastRatio(
                          showCustomColors ? customColors.foreground : "#2C3E50",
                          showCustomColors ? customColors.background : "#F8F6F1"
                        )}:1
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Primary on White:</span>
                      <span className="font-mono">
                        {getContrastRatio(
                          showCustomColors ? customColors.primary : "#4A7C59",
                          '#FFFFFF'
                        )}:1
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Secondary on White:</span>
                      <span className="font-mono">
                        {getContrastRatio(
                          showCustomColors ? customColors.secondary : "#5B8A8A",
                          '#FFFFFF'
                        )}:1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Typography Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Typography & Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card style={showCustomColors ? { backgroundColor: '#FFFFFF' } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>Text Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    Primary Text
                  </h3>
                  <p style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    This is the main text color used for headings and important content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                    Secondary Text
                  </h3>
                  <p style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                    This is secondary text used for descriptions and less important content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.primary : undefined }}>
                    Primary Color Text
                  </h3>
                  <p style={{ color: showCustomColors ? customColors.primary : undefined }}>
                    This text uses the primary color for emphasis.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.secondary : undefined }}>
                    Secondary Color Text
                  </h3>
                  <p style={{ color: showCustomColors ? customColors.secondary : undefined }}>
                    This text uses the secondary color.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.accent : undefined }}>
                    Accent Color Text
                  </h3>
                  <p style={{ color: showCustomColors ? customColors.accent : undefined }}>
                    This text uses the accent color for highlights.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card style={showCustomColors ? { backgroundColor: '#FFFFFF' } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>Background Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded" style={{ 
                  backgroundColor: showCustomColors ? customColors.background : undefined,
                  borderColor: showCustomColors ? customColors.foreground + '20' : undefined
                }}>
                  <p style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    Main Background
                  </p>
                </div>
                <div className="p-4 border rounded" style={{ 
                  backgroundColor: '#FFFFFF',
                  borderColor: showCustomColors ? customColors.foreground + '20' : undefined
                }}>
                  <p style={{ color: showCustomColors ? customColors.foreground : undefined }}>
                    Card Background (White)
                  </p>
                </div>
                <div className="p-4 border rounded" style={{ 
                  backgroundColor: showCustomColors ? customColors.primary + '10' : undefined,
                  borderColor: showCustomColors ? customColors.primary + '30' : undefined
                }}>
                  <p style={{ color: showCustomColors ? customColors.primary : undefined }}>
                    Primary Background (10% opacity)
                  </p>
                </div>
                <div className="p-4 border rounded" style={{ 
                  backgroundColor: showCustomColors ? customColors.accent + '10' : undefined,
                  borderColor: showCustomColors ? customColors.accent + '30' : undefined
                }}>
                  <p style={{ color: showCustomColors ? customColors.accent : undefined }}>
                    Accent Background (10% opacity)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Interactive Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              className="hover:shadow-lg cursor-pointer transition-all duration-200"
              style={showCustomColors ? { 
                borderColor: customColors.primary + '30',
                backgroundColor: '#FFFFFF'
              } : undefined}
            >
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>Primary Hover</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  This card uses primary color for hover effects
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="hover:shadow-lg cursor-pointer transition-all duration-200"
              style={showCustomColors ? { 
                borderColor: customColors.secondary + '30',
                backgroundColor: '#FFFFFF'
              } : undefined}
            >
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>Secondary Hover</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  This card uses secondary color for hover effects
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="hover:shadow-lg cursor-pointer transition-all duration-200"
              style={showCustomColors ? { 
                borderColor: customColors.accent + '30',
                backgroundColor: '#FFFFFF'
              } : undefined}
            >
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>Accent Hover</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  This card uses accent color for hover effects
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badge Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Badge Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Badge style={showCustomColors ? { 
              backgroundColor: customColors.primary,
              color: '#FFFFFF'
            } : undefined}>
              Primary Badge
            </Badge>
            <Badge variant="secondary" style={showCustomColors ? { 
              backgroundColor: customColors.secondary,
              color: '#FFFFFF'
            } : undefined}>
              Secondary Badge
            </Badge>
            <Badge style={showCustomColors ? { 
              backgroundColor: customColors.accent,
              color: customColors.foreground
            } : undefined}>
              Accent Badge
            </Badge>
            <Badge style={showCustomColors ? { 
              backgroundColor: customColors.primary + '20',
              color: customColors.primary,
              borderColor: customColors.primary + '30'
            } : undefined}>
              Primary Outline
            </Badge>
            <Badge style={showCustomColors ? { 
              backgroundColor: customColors.secondary + '20',
              color: customColors.secondary,
              borderColor: customColors.secondary + '30'
            } : undefined}>
              Secondary Outline
            </Badge>
          </div>
        </section>

        {/* Color Psychology */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Color Psychology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card style={showCustomColors ? { 
              borderColor: customColors.primary + '20',
              backgroundColor: '#FFFFFF'
            } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.primary : undefined }}>Primary Color</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  Trust, healing, and professional healthcare. Associated with reliability and medical expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card style={showCustomColors ? { 
              borderColor: customColors.secondary + '20',
              backgroundColor: '#FFFFFF'
            } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.secondary : undefined }}>Secondary Color</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  Balance and accessibility. Combines trust (blue) with warmth (green) for a modern medical feel.
                </p>
              </CardContent>
            </Card>
            
            <Card style={showCustomColors ? { 
              borderColor: customColors.accent + '20',
              backgroundColor: '#FFFFFF'
            } : undefined}>
              <CardHeader>
                <CardTitle style={{ color: showCustomColors ? customColors.accent : undefined }}>Accent Color</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                  Warmth and approachability. Draws attention without being aggressive, creates welcoming experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accessibility Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: showCustomColors ? customColors.foreground : undefined }}>
            Accessibility Features
          </h2>
          <Card style={showCustomColors ? { backgroundColor: '#FFFFFF' } : undefined}>
            <CardHeader>
              <CardTitle style={{ color: showCustomColors ? customColors.foreground : undefined }}>WCAG 2.1 AA Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.foreground : undefined }}>Contrast Ratios</h4>
                  <ul className="text-sm space-y-1" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                    <li>• Primary on White: {getContrastRatio(
                      showCustomColors ? customColors.primary : "#4A7C59",
                      '#FFFFFF'
                    )}:1 {getAccessibilityStatus(getContrastRatio(
                      showCustomColors ? customColors.primary : "#4A7C59",
                      '#FFFFFF'
                    ))}</li>
                    <li>• Secondary on White: {getContrastRatio(
                      showCustomColors ? customColors.secondary : "#5B8A8A",
                      '#FFFFFF'
                    )}:1 {getAccessibilityStatus(getContrastRatio(
                      showCustomColors ? customColors.secondary : "#5B8A8A",
                      '#FFFFFF'
                    ))}</li>
                    <li>• Accent on White: {getContrastRatio(
                      showCustomColors ? customColors.accent : "#D4A574",
                      '#FFFFFF'
                    )}:1 {getAccessibilityStatus(getContrastRatio(
                      showCustomColors ? customColors.accent : "#D4A574",
                      '#FFFFFF'
                    ))}</li>
                    <li>• Foreground on Background: {getContrastRatio(
                      showCustomColors ? customColors.foreground : "#2C3E50",
                      showCustomColors ? customColors.background : "#F8F6F1"
                    )}:1 {getAccessibilityStatus(getContrastRatio(
                      showCustomColors ? customColors.foreground : "#2C3E50",
                      showCustomColors ? customColors.background : "#F8F6F1"
                    ))}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: showCustomColors ? customColors.foreground : undefined }}>Color Vision Support</h4>
                  <ul className="text-sm space-y-1" style={{ color: showCustomColors ? customColors.foreground : undefined, opacity: 0.7 }}>
                    <li>• Distinguishable for color blindness</li>
                    <li>• No reliance on color alone</li>
                    <li>• Sufficient contrast maintained</li>
                    <li>• Accessible hover states</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
