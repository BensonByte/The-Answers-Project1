# Non-Profit Organization Website

A modern, responsive website built with Next.js and Tailwind CSS for a non-profit organization.

## Features

- Responsive design that works on all devices
- Modern component-based architecture
- Fast page loads with Next.js
- Beautiful UI with Tailwind CSS
- SEO-friendly structure
- Accessible design

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   ├── ui/               # Reusable UI components
│   └── sections/         # Page sections
└── styles/               # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

1. Update the organization name in the Header and Footer components
2. Add your own images to the `public` directory
3. Modify the content in `src/app/page.tsx` to match your organization's needs
4. Update the color scheme in `tailwind.config.js` if desired

## Required Images

The following images need to be added to the `public` directory:
- hero-bg.jpg (Hero section background)
- education.jpg (Education program image)
- community.jpg (Community program image)
- environment.jpg (Environment program image)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
