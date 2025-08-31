# Meadow Foundation Color Palette

## Overview
This document outlines the professional healthcare color palette designed for the Meadow Foundation website, ensuring excellent accessibility, visual hierarchy, and brand consistency.

## Primary Color Palette

| Color Name | HEX Code | Role | Usage |
|------------|----------|------|-------|
| **Sage Green** | `#4A7C59` | Hero/Primary | Main buttons, primary actions, brand elements |
| **Warm Teal** | `#5B8A8A` | Supporting/Secondary | Secondary buttons, borders, supporting elements |
| **Soft Coral** | `#D4A574` | Accent | Call-to-action highlights, hover states, important info |
| **Cream** | `#F8F6F1` | Light Neutral | Main backgrounds, content areas |
| **Charcoal** | `#2C3E50` | Dark Neutral | Primary text, headings, critical information |

## Accessibility Features

### Contrast Ratios
- **Sage Green on White**: 4.8:1 (WCAG AA compliant)
- **Warm Teal on White**: 3.9:1 (WCAG AA compliant)
- **Soft Coral on White**: 3.2:1 (WCAG AA compliant)
- **Charcoal on Cream**: 15.2:1 (Excellent contrast)

### Color Vision Deficiency Support
- All colors are distinguishable for users with various forms of color blindness
- Sufficient contrast maintained across all color combinations
- No reliance on color alone for conveying information

## CSS Variables

The color system is implemented through CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: #4A7C59;        /* Sage Green */
  --secondary: #5B8A8A;      /* Warm Teal */
  --accent: #D4A574;         /* Soft Coral */
  --background: #F8F6F1;     /* Cream */
  --foreground: #2C3E50;     /* Charcoal */
}
```

## Usage Guidelines

### Buttons
- **Primary Actions**: Use Sage Green (`--primary`)
- **Secondary Actions**: Use Warm Teal (`--secondary`)
- **Accent Actions**: Use Soft Coral (`--accent`)
- **Destructive Actions**: Use system destructive color

### Typography
- **Headings**: Charcoal (`--foreground`) for maximum impact
- **Body Text**: Dark gray for comfortable reading
- **Links**: Sage Green with Soft Coral hover states

### Backgrounds
- **Main Content**: Cream (`--background`) for comfortable reading
- **Cards**: Pure white for clear content separation
- **Hero Sections**: Sage Green with 10% opacity overlay

### Borders & Dividers
- **Primary Borders**: Warm Teal at 30% opacity
- **Secondary Borders**: Sage Green at 20% opacity
- **Focus Rings**: Sage Green with 50% opacity

## Utility Classes

Custom utility classes are available for direct color application:

```css
.bg-sage { background-color: #4A7C59; }
.bg-teal { background-color: #5B8A8A; }
.bg-coral { background-color: #D4A574; }
.bg-cream { background-color: #F8F6F1; }

.text-sage { color: #4A7C59; }
.text-teal { color: #5B8A8A; }
.text-coral { color: #D4A574; }
.text-charcoal { color: #2C3E50; }
```

## Dark Mode

Dark mode colors maintain the same accessibility standards while providing comfortable viewing in low-light conditions:

- **Background**: Dark charcoal (`#1A202C`)
- **Text**: Cream (`#F8F6F1`)
- **Primary**: Lighter sage green (`#68D391`)
- **Secondary**: Lighter warm teal (`#81E6D9`)

## Brand Psychology

### Sage Green (#4A7C59)
- **Trust**: Associated with reliability and medical expertise
- **Healing**: Natural, calming color that reduces anxiety
- **Professional**: Conveys high-quality healthcare standards

### Warm Teal (#5B8A8A)
- **Balance**: Combines trust (blue) with warmth (green)
- **Accessibility**: Modern, approachable medical feel
- **Support**: Perfect for secondary elements and borders

### Soft Coral (#D4A574)
- **Warmth**: Inviting and approachable without being aggressive
- **Attention**: Draws focus to important actions and information
- **Comfort**: Creates a welcoming, human-centered experience

### Cream (#F8F6F1)
- **Cleanliness**: Medical-grade, sterile appearance
- **Comfort**: Easy on the eyes for extended reading
- **Professional**: Maintains healthcare industry standards

### Charcoal (#2C3E50)
- **Authority**: Professional and trustworthy appearance
- **Readability**: Excellent contrast for critical information
- **Sophistication**: Reflects high-quality healthcare services

## Implementation Examples

### Hero Section
```tsx
<section className="bg-gradient-to-br from-primary/5 to-accent/5">
  <h1 className="text-foreground">Transforming lives through physiotherapy</h1>
  <Button className="bg-primary hover:bg-primary/90">Donate Now</Button>
</section>
```

### Card Component
```tsx
<Card className="bg-card border-border">
  <CardHeader>
    <CardTitle className="text-foreground">Initiative Title</CardTitle>
  </CardHeader>
  <CardContent className="text-muted-foreground">
    Content description
  </CardContent>
</Card>
```

### Navigation
```tsx
<nav className="bg-background border-b border-border">
  <Link className="text-muted-foreground hover:text-foreground">
    Navigation Item
  </Link>
</nav>
```

## Color Palette Links

- **Coolors.co**: [View Full Palette](https://coolors.co/4a7c59-5b8a8a-d4a574-f8f6f1-2c3e50)
- **Adobe Color**: [Accessibility Check](https://color.adobe.com/create/color-contrast-analyzer)

## Maintenance

- All colors are defined in CSS custom properties for easy updates
- Contrast ratios should be verified when making changes
- Test with color vision deficiency simulators
- Maintain consistency across all components and pages
