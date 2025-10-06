# Customization Guide

This guide will help you customize the resume website to match your personal brand and information.

## Quick Start Checklist

- [ ] Update personal information in Hero component
- [ ] Add your skills in Skills component
- [ ] Update project list with your GitHub repos
- [ ] Add your social media links in Contact component
- [ ] Update metadata in layout.tsx
- [ ] Customize color scheme (optional)
- [ ] Adjust animations (optional)

## Detailed Customization

### 1. Personal Information

**File**: `src/components/Hero.tsx`

Update the following:

```typescript
// Line 45-50: Your title and tagline
<h1>
  <span className="text-gradient">Your Title Here</span>
</h1>

// Line 58-65: Your specializations
<p className="text-xl md:text-2xl text-gray-400 mb-8">
  Specializing in <span className="text-primary-400">Technology 1</span>,{' '}
  <span className="text-primary-400">Technology 2</span>
  {/* Add more technologies */}
</p>
```

### 2. Skills

**File**: `src/components/Skills.tsx`

Update the skills array (line 8-43):

```typescript
const skills = [
  {
    category: 'Your Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more categories
]
```

**Tips**:
- Organize skills by category (Languages, Frameworks, Tools, etc.)
- Keep 4-6 items per category for best visual balance
- Use 4-6 categories total

### 3. Projects

**File**: `src/components/Projects.tsx`

Update the projects array (line 8-50):

```typescript
const projects = [
  {
    name: 'Project Name',
    description: 'Brief description (1-2 sentences)',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',
    gradient: 'from-blue-500 to-cyan-500', // Choose a gradient
  },
  // Add more projects
]
```

**Available gradients**:
- `from-blue-500 to-cyan-500` - Blue to cyan
- `from-purple-500 to-pink-500` - Purple to pink
- `from-orange-500 to-red-500` - Orange to red
- `from-green-500 to-emerald-500` - Green to emerald
- `from-yellow-500 to-amber-500` - Yellow to amber

### 4. Contact & Social Links

**File**: `src/components/Contact.tsx`

Update the socialLinks array (line 8-30):

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    color: 'hover:text-gray-400',
  },
  // Update URLs for each platform
]
```

**Tips**:
- Remove links you don't want to show
- Add new links by importing icons from `lucide-react`
- Choose appropriate hover colors

### 5. SEO Metadata

**File**: `src/app/layout.tsx`

Update metadata (line 7-17):

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  // ... rest of metadata
}
```

### 6. Color Scheme

**File**: `tailwind.config.ts`

The primary color scheme uses cyan/blue. To change:

```typescript
// Line 13-23: Primary color palette
primary: {
  50: '#f0f9ff',   // Lightest
  100: '#e0f2fe',
  // ...
  500: '#0ea5e9',  // Main accent (change this)
  // ...
  950: '#082f49',  // Darkest
}
```

**Color palettes to try**:
- **Purple**: Use `#a855f7` as main (500)
- **Green**: Use `#10b981` as main (500)
- **Pink**: Use `#ec4899` as main (500)
- **Orange**: Use `#f97316` as main (500)

Use [Tailwind Color Generator](https://uicolors.app/create) to generate full palettes.

### 7. Animations

Adjust animation speeds in `tailwind.config.ts`:

```typescript
// Line 25-30: Animation durations
animation: {
  'fade-in': 'fade-in 0.6s ease-out',    // Change 0.6s
  'slide-up': 'slide-up 0.6s ease-out',  // Change 0.6s
  'glow': 'glow 2s ease-in-out infinite', // Change 2s
  'float': 'float 6s ease-in-out infinite', // Change 6s
}
```

**Animation guide**:
- **0.3s** - Very fast, snappy
- **0.6s** - Default, balanced
- **1.0s** - Slower, more dramatic
- **2.0s+** - For continuous animations (glow, float)

### 8. Background Effects

**File**: `src/components/Background.tsx`

Customize particle system:

```typescript
// Line 62: Number of particles
for (let i = 0; i < 100; i++) { // Change 100 to more/less

// Line 40-41: Particle size range
this.size = Math.random() * 2 + 1 // Change 2 and 1

// Line 42: Particle opacity range
this.opacity = Math.random() * 0.5 + 0.2 // Change ranges
```

### 9. Grid Pattern

**File**: `src/components/GridPattern.tsx`

Adjust grid size and opacity:

```typescript
// Line 9-10: Grid cell size
width="40"  // Change to make grid larger/smaller
height="40"

// Line 16: Grid line appearance
stroke="rgba(14, 165, 233, 0.1)" // Change opacity (0.1)
strokeWidth="1" // Change line thickness
```

### 10. Cursor Glow

**File**: `src/components/CursorGlow.tsx`

Adjust glow effect:

```typescript
// Line 41-42: Glow size
className="... w-64 h-64 ..." // Change size

// Line 44: Glow color and intensity
background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)'
// Change 0.15 for intensity, 70% for spread
```

## Advanced Customization

### Add New Sections

1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

### Change Fonts

Update `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const font = YourFont({ subsets: ['latin'] })
```

Browse fonts at [Google Fonts](https://fonts.google.com/).

### Mobile Responsiveness

The site uses responsive breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Adjust classes in components to change mobile behavior.

## Testing

After making changes:

```bash
# Development (hot reload)
yarn dev

# Production build
yarn build

# Check build output
ls -lh out/
```

## Common Issues

### Content overflow
- Reduce text length
- Adjust padding/margins
- Check container max-width

### Animation too fast/slow
- Adjust duration in `tailwind.config.ts`
- Modify Framer Motion transition props

### Colors not updating
- Clear `.next` directory
- Restart dev server
- Check Tailwind purge settings

## Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

## Credits & Attribution

When using this template, attribution is appreciated but not required:

```markdown
Built with [Resume Template](https://github.com/yourusername/repo) by [Your Name]
```
