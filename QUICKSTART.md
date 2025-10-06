# Quick Start Guide

Get your resume website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
# From project root
yarn install
```

## Step 2: Start Development Server

```bash
# Option A: From project root
yarn workspace @omnitron-dev/resume dev

# Option B: From apps/resume directory
cd apps/resume
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Step 3: Customize Content

### 3.1 Update Your Name and Title

**File**: `src/components/Hero.tsx`

```typescript
// Line 45-47
<h1 className="text-6xl md:text-8xl font-bold mb-6">
  <span className="text-gradient">Your Title Here</span>
</h1>
```

### 3.2 Update Skills

**File**: `src/components/Skills.tsx`

Replace the `skills` array with your own skills:

```typescript
const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'Go'], // Your languages
  },
  // ... add more categories
]
```

### 3.3 Update Projects

**File**: `src/components/Projects.tsx`

Replace the `projects` array with your GitHub repos:

```typescript
const projects = [
  {
    name: 'My Awesome Project',
    description: 'What it does',
    tags: ['Tech1', 'Tech2'],
    github: 'https://github.com/yourusername/repo',
    gradient: 'from-blue-500 to-cyan-500',
  },
  // ... add more projects
]
```

### 3.4 Update Contact Info

**File**: `src/components/Contact.tsx`

Update social media URLs:

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername', // Your URL
    color: 'hover:text-gray-400',
  },
  // ... update other links
]
```

### 3.5 Update SEO Metadata

**File**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description',
  // ...
}
```

## Step 4: Build for Production

```bash
# From project root
yarn workspace @omnitron-dev/resume build

# Or from apps/resume
cd apps/resume
yarn build
```

The static site will be in the `out/` directory.

## Step 5: Deploy

### Option A: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your site is live.

### Option B: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - **Build command**: `cd apps/resume && yarn build`
   - **Publish directory**: `apps/resume/out`
6. Click "Deploy site"

### Option C: GitHub Pages

1. Build the site: `yarn build`
2. Install `gh-pages`: `yarn add -D gh-pages`
3. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```
4. Deploy: `yarn deploy`

## Customization Tips

### Change Colors

Edit `tailwind.config.ts`:

```typescript
primary: {
  500: '#your-color', // Main accent color
}
```

Use [this tool](https://uicolors.app/create) to generate full palette.

### Adjust Animations

Edit animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fade-in 0.6s ease-out', // Change 0.6s
}
```

### Change Number of Particles

Edit `src/components/Background.tsx`:

```typescript
// Line 62
for (let i = 0; i < 100; i++) { // Change 100
```

### Remove Effects

Don't want some effects? Comment them out in `src/app/page.tsx`:

```typescript
{/* <CursorGlow /> */}  // Disable cursor glow
{/* <GridPattern /> */}  // Disable grid
```

## Common Issues

### Port already in use

Change port in `package.json`:

```json
"dev": "next dev -p 3002"  // Change 3001 to 3002
```

### Build errors

1. Clear cache: `rm -rf .next out`
2. Reinstall: `rm -rf node_modules && yarn install`
3. Rebuild: `yarn build`

### Fonts not loading

Next.js auto-optimizes fonts. Just wait a few seconds on first load.

## Resources

- [Full README](./README.md) - Detailed documentation
- [Customization Guide](./CUSTOMIZATION.md) - Advanced customization
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## Need Help?

Check the detailed guides:
- `README.md` - Complete usage guide
- `CUSTOMIZATION.md` - Step-by-step customization

## What's Next?

1. ✅ Customize content (you just did this!)
2. 🎨 Adjust colors and animations
3. 📸 Add your photo/avatar
4. 🚀 Deploy to production
5. 📱 Share your link!

Enjoy your new resume website! 🎉
