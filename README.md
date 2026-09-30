# Custom 404 Error Landing Page

A complete, lightweight, responsive cyber-security themed 404 landing page that links to a specific Google Form.

## Features
- Cyber-security / terminal / hacker aesthetic
- Near-black and bright red theme
- Subtle CSS glitch and scan-line effects
- Fully responsive on mobile, WhatsApp, tablet, and desktop
- Valid HTML5, CSS3, Vanilla JS
- Configured Open Graph and Twitter Card tags for social media previews
- Respects `prefers-reduced-motion` for accessibility
- No dependencies, APIs, or backend required

## Google Form Link

The button on the page redirects to the following Google Form URL:
`https://docs.google.com/forms/d/e/1FAIpQLSfBz7yFd8d8V-ZCpoAYpjnxx_mpWjqA0e30T6Vq3Ye8LxySpQ/viewform?usp=publish-editor`

This URL is located in `index.html` inside the `href` attribute of the `<a>` tag with the class `action-btn` (around line 43).

## Deployment to Vercel (Free)

This project is perfectly suited for free Vercel hosting as it is purely static. 

### Method 1: Using Vercel CLI
1. Open your terminal in this project directory.
2. Install the Vercel CLI (if not already installed): `npm i -g vercel`
3. Run the deployment command: `vercel`
4. Follow the prompts to deploy. For production, run `vercel --prod`

### Method 2: Connecting to GitHub (Recommended)
1. Push this project to a new repository on your GitHub account.
2. Go to [Vercel](https://vercel.com/) and log in.
3. Click "Add New" -> "Project".
4. Import your GitHub repository.
5. Leave all build settings as default (Root directory, framework preset, etc.).
6. Click "Deploy".

## Important: Updating Open Graph URLs

Once your project is deployed to Vercel, you will get a deployment URL (e.g., `https://my-404-page.vercel.app`).

You **must** update the `index.html` file to include this absolute URL for the Open Graph images to work correctly in social media previews (like WhatsApp or Twitter).

1. Open `index.html`.
2. Find the following lines (lines 14-23):
```html
<meta property="og:url" content="https://YOUR-VERCEL-DOMAIN.vercel.app/">
<!-- ... -->
<meta property="og:image" content="https://YOUR-VERCEL-DOMAIN.vercel.app/og-image.jpg">
<!-- ... -->
<meta property="twitter:url" content="https://YOUR-VERCEL-DOMAIN.vercel.app/">
<!-- ... -->
<meta property="twitter:image" content="https://YOUR-VERCEL-DOMAIN.vercel.app/og-image.jpg">
```
3. Replace `https://YOUR-VERCEL-DOMAIN.vercel.app/` with your actual Vercel domain.
4. Redeploy your site so the meta tags update.
