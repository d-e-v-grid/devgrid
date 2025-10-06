# Personal Resume Website

A high-tech, minimalist personal resume/portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Minimalist Design** - Clean, modern aesthetic with focus on content
- ✨ **Interactive Effects** - Animated particle background, smooth transitions
- 🚀 **Performance** - Static site generation for optimal loading speed
- 📱 **Responsive** - Fully responsive design for all devices
- ♿ **Accessible** - Built with accessibility in mind
- 🎭 **Animations** - Framer Motion powered smooth animations
- 🔧 **Type-Safe** - Full TypeScript support

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide Icons** - Beautiful icon set

## Project Structure

```
apps/resume/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Background.tsx  # Animated particle background
│       ├── Navigation.tsx  # Header navigation
│       ├── Hero.tsx        # Hero section
│       ├── Skills.tsx      # Skills showcase
│       ├── Projects.tsx    # Featured projects
│       └── Contact.tsx     # Contact section
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Development

```bash
# Install dependencies (from root)
yarn install

# Run development server
yarn workspace @omnitron-dev/resume dev

# Or from apps/resume directory
cd apps/resume
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) to view the site.

### Build

```bash
# Build static site
yarn workspace @omnitron-dev/resume build

# Or from apps/resume directory
cd apps/resume
yarn build
```

The static site will be generated in the `out/` directory.

## Customization

### Update Personal Information

Edit the following files to customize the content:

1. **Hero Section** - `src/components/Hero.tsx`
   - Name, title, specializations

2. **Skills** - `src/components/Skills.tsx`
   - Skill categories and items

3. **Projects** - `src/components/Projects.tsx`
   - Project list with descriptions, tags, and links

4. **Contact** - `src/components/Contact.tsx`
   - Social media links

5. **Metadata** - `src/app/layout.tsx`
   - SEO meta tags

### Color Scheme

The color scheme is defined in `tailwind.config.ts`. Primary colors use the cyan/blue palette:

```typescript
primary: {
  50: '#f0f9ff',
  // ...
  500: '#0ea5e9', // Main accent color
  // ...
  950: '#082f49',
}
```

To change the accent color, modify the `primary` color palette in the Tailwind config.

### Animations

Animations are powered by Framer Motion. Key animation patterns:

- **Fade in** - Elements appear with opacity transition
- **Slide up** - Elements slide up from below
- **Glow effect** - Pulsing glow on accent elements
- **Float effect** - Subtle floating animation
- **Particle background** - Canvas-based particle system

Customize animations in component files or add new ones in `tailwind.config.ts`.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Static Export

```bash
yarn build
# Upload the `out/` directory to any static host
```

Compatible with:
- GitHub Pages
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static file server

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
