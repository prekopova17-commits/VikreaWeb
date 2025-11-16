# VyCrea Design Guidelines

## Design Approach
**Reference-Based Approach**: Modern SaaS aesthetic inspired by Linear's typography + Stripe's restraint + bold data-driven visuals. Industrial elegance with sharp edges, strong gradients, and systematic grid patterns.

## Core Visual Identity

### Color Palette
- **Primary Blue**: #1E40AF (headers, primary CTAs)
- **Action Orange**: #FF6B35 (CTAs, results numbers)
- **Growth Mint**: #06D6A0 (accents, progress bars, success states)
- **Light Gray**: #E9ECEF (card borders, backgrounds)
- **Dark Gray**: #495057 (body text)
- **Footer Dark**: #212529
- **White**: #FFFFFF

### Typography System
**Font**: Inter (Google Fonts)
- Headings: 700-800 weight, extra bold
- Subheadings: 600 weight
- Body: 400-500 weight
- CTA buttons: 600 weight

Hierarchy:
- H1: 4xl-6xl, extra bold, tight leading
- H2: 3xl-4xl, bold
- H3: 2xl, semibold
- Body: base-lg, regular
- Numbers/Stats: 5xl-6xl, extra bold, orange color

### Layout System
**Grid**: Desktop 12-column, max-width 1200px
**Spacing Units**: Tailwind 4, 8, 12, 16, 20, 24, 32 (p-4, p-8, p-12, py-20, py-24, py-32)
**Breakpoints**: sm:640, md:768, lg:1024, xl:1280

## Section-Specific Designs

### Hero Section
- Full viewport height consideration (80-90vh)
- Center-aligned layout
- H1 with bold claim: "Stagnujúca firma? Zmeníme to."
- Large numbers prominently displayed (+40% zisk, +60% obrat) in orange
- Two CTAs side-by-side: Primary (orange bg) + Secondary (blue border)
- Generous whitespace
- Placeholder for hero image/graphic (1600×1000)

### Card-Based Sections (Situácie, Ako to funguje)
- White cards with subtle border (#E9ECEF)
- Blue headings (#1E40AF)
- Lucide icons (2-3px stroke, 48-64px size)
- Grid: 2-3 columns on desktop, stack on mobile
- Padding: p-8 to p-12
- Hover: subtle shadow elevation

### Results Section
- Large numbers (text-6xl, font-800) in orange (#FF6B35)
- Grid layout: 3 columns on desktop
- Centered alignment
- Labels below numbers in gray

### Services (3-Tier Cards)
- Three equal-width cards
- Colored top border (4px): mint, blue, orange respectively
- Title, features list, CTA button per card
- White background, shadow on hover
- Vertical stack on mobile

### O Mnie Section
- 2-column layout (desktop): Image left (placeholder 800×1000), content right
- Stack on mobile
- Credentials prominently displayed: "25 rokov", "ISO 9001/14001"
- Body text with generous line-height

### Final CTA Section
- Full-width block
- Blue background (#1E40AF)
- White text, centered
- Large heading + supporting text + CTA button (orange)
- Padding: py-32 on desktop

### Footer
- Dark background (#212529)
- White text
- Multi-column layout (Contact, Links, Legal)
- Logo placeholder (white version)

## Mini-Audit Wizard

### Visual Treatment
- Clean modal/full-page overlay
- Progress bar at top: mint color (#06D6A0), height 4px
- Step counter: "KROK 1/6" in uppercase, gray
- Question in bold (text-2xl, font-700)

### Input Cards
- Single-select: Radio cards with border, blue accent on selected
- Multi-select: Checkbox cards with mint checkmark
- Hover state: subtle scale (1.02)
- Active state: blue border (2px)

### Email Step
- Large input field with label
- GDPR checkbox (required) with link to privacy
- Orange CTA button: "Získať výsledky"

### Thank You Screen
- Mint checkmark icon (large, 96px)
- Success message bold
- Two CTAs: "Poďme si zavolať" (primary) + "Napísať email" (secondary)

## Component Library

### Buttons
- Primary: Orange bg (#FF6B35), white text, rounded-lg, px-8 py-4
- Secondary: Blue border (#1E40AF), blue text, rounded-lg, px-8 py-4
- Hover: opacity 90%, scale 1.02
- Min touch target: 44×44px
- Transitions: 150-200ms

### Icons
- Library: Lucide React
- Stroke: 2-3px
- Size: 24-48px for inline, 64-96px for feature icons
- Color: Inherit from parent or blue accent

### Forms
- Input fields: border #E9ECEF, rounded-lg, py-3 px-4
- Focus state: blue border (#1E40AF), no outline
- Labels: semibold, gray, mb-2
- Error states: red border, red text below

## Images & Assets

### Required Placeholders
1. **Logo**: Top left header, SVG format, min 120px width (VK concentric circles design)
2. **Hero Image**: Right side or background, 1600×1000, represents systematic growth
3. **Lucia Photo**: O Mnie section, 800×1000, professional portrait
4. **Case Study Visuals**: Optional showcase section, 1200×800

### Image Treatment
- WebP format for optimization
- Lazy loading on secondary sections
- Subtle rounded corners (rounded-lg to rounded-xl)
- No filters/overlays unless specified

## Interactions & Animations

### Micro-Interactions
- Button hover: opacity 90% + scale 1.02, 150ms ease
- Card hover: shadow-lg elevation, 200ms ease
- CTA pulse: subtle scale animation on primary actions (use sparingly)
- Smooth scroll: 300ms for anchor links

### Prohibited
- Auto-play carousels
- Excessive parallax
- Distracting background animations
- More than 2 concurrent animations

## Accessibility & Performance
- Contrast ratios: AA compliant (blue/white, orange/white verified)
- Focus states: visible blue outline (2px)
- Alt text for all images
- Semantic HTML (h1-h6 hierarchy respected)
- LCP target: <2.5s

## Mobile Considerations
- Stack all multi-column layouts
- Touch targets: minimum 44×44px
- Reduce heading sizes by 30-40%
- Maintain generous spacing (py-12 to py-16)
- Hamburger menu for navigation

This is a **bold, data-driven, systematic** design that prioritizes clarity, results, and professionalism while maintaining visual impact through strategic use of color, typography, and whitespace.