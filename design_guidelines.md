# Orato Soft Skills Learning Platform - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from modern educational platforms (Coursera, Udemy) and clean SaaS landing pages (Stripe, Linear). Focus on trust-building through professional presentation, clear value proposition, and social proof elements.

## Typography System

**Font Families:**
- Primary: Inter or similar geometric sans-serif via Google Fonts
- Headings: 700 weight for primary headlines, 600 for subheadings
- Body: 400 weight, 500 for emphasis

**Hierarchy:**
- Hero headline: text-5xl lg:text-7xl, bold, leading-tight
- Section headers: text-4xl lg:text-5xl, semi-bold
- Card titles: text-2xl, semi-bold
- Body text: text-base lg:text-lg
- Small labels/stats: text-sm, uppercase tracking-wide for emphasis

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section vertical padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-6 md:gap-8 for grids, gap-4 for smaller groups
- Container max-width: max-w-7xl mx-auto px-4 md:px-6

## Page Structure (7 Key Sections)

### 1. Hero Section
- Full viewport height (min-h-screen) with large background image
- Two-column layout on desktop: 60% text, 40% supporting visual space
- Headline with 3 key terms emphasized (Confidence, Communication, Character)
- Subheading: "Hybrid learning programs designed for Classes 6–10"
- Two CTAs side-by-side: Primary "Book a Trial" + Secondary "Watch Demo" with play icon
- CTAs with backdrop-blur-md background for readability over image

### 2. Vision Section
- Centered text layout, max-w-3xl
- Three pillars displayed as large icon-label pairs in grid-cols-3
- Short mission statement paragraph
- Moderate padding: py-20

### 3. Programs Grid
- 4-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Cards with icon at top, title, description, subtle border
- Hover state with subtle elevation
- "Explore All Programs" CTA button centered below grid

### 4. Why Choose Section
- 5 feature cards in responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, with 5th card spanning center on desktop)
- Icon-title-description format
- Icons from Heroicons (academic-cap, user-group, trophy, building-library, currency-dollar)

### 5. Statistics Banner
- Full-width section with grid-cols-3
- Large numbers (text-4xl) with labels below
- Vertical dividers between stats on desktop
- Compact padding: py-12

### 6. Testimonials
- 3-column grid (grid-cols-1 md:grid-cols-3)
- Cards with quote, name, role, organization
- Include quotation mark icon
- Alternating card heights for visual interest

### 7. Final CTA Section
- Centered headline: "Ready to Get Started?"
- Supporting text with student count
- Two prominent CTAs: "Partner With Us" + "Enroll Now"
- Generous padding: py-24

## Component Library

**Navigation:**
- Fixed top navigation with logo left, menu items center, "Book Trial" CTA right
- Mobile: Hamburger menu
- Menu items: Home, About, Programs, Schools, Courses, Contact

**Buttons:**
- Primary: Solid background, rounded-lg, px-8 py-3, text-base font-medium
- Secondary: Border style, same sizing
- All buttons with backdrop-blur-md when on images
- No custom hover states - use component defaults

**Cards:**
- Rounded corners: rounded-xl
- Subtle borders: border
- Padding: p-6 md:p-8
- Shadow on hover: transition-shadow duration-300

**Icons:**
- Use Heroicons exclusively via CDN
- Size: w-12 h-12 for feature icons, w-8 h-8 for smaller contexts

**Footer:**
- 4-column layout: Logo/description, Quick Links, Programs, Contact Info
- Newsletter signup form with single input + button
- Social media icons
- Copyright and legal links at bottom

## Images

**Hero Background:**
- Large, high-quality image of confident students in learning environment
- Bright, engaging classroom or workshop setting
- Image should convey energy and collaboration
- Position: Covers full hero section with overlay for text readability

**Supporting Images:**
- Vision section: Consider abstract illustration of growth/development
- Programs: Small icons for each skill category
- Testimonials: Placeholder circular avatars for testimonial authors

## Accessibility
- Maintain WCAG AA contrast ratios throughout
- Form inputs with clear labels and focus states
- Icon buttons include aria-labels
- Semantic HTML structure with proper heading hierarchy

## Responsive Behavior
- Mobile-first approach with stacked layouts
- Desktop: Multi-column grids as specified
- Tablet: 2-column maximum
- Mobile: Single column, increased touch targets (min 44px)

## Animation Guidelines
Use sparingly:
- Subtle fade-in on scroll for section reveals
- Statistics counter animation from 0 to final number on viewport entry
- Card hover elevations with smooth transitions
- No parallax, no complex scroll-driven animations