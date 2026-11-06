# Kaushal Raj — professional portfolio

Responsive React 19 + TypeScript + Vite portfolio. Light theme only.

## Run locally

Install Node.js 22.12+ (or a current Node.js LTS), then:

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview the build: `npm run preview`.
Deploy the generated `dist` folder with a static host. The downloadable archive excludes dependencies: always run `npm install` after extracting.

## Introduction video

The portfolio plays the full recording from public/media/introduction.mp4. The poster is a frame from the recording. To replace it later, update the MP4, poster, and duration badge.

## Content and assets

- `src/App.tsx`: page sections, career details, skill groups, video configuration.
- `src/styles/globals.css`: light palette, typography, responsive layouts.
- `src/components/layout/Navbar.tsx`: desktop and mobile navigation; Escape closes the mobile menu.
- `src/data/portfolio.ts`: existing profile and project repository links.
- `src/data/certificates.ts`: all 10 certificate titles and local document paths.
- `public/certificates/`: supplied certificate documents, with URL-safe filenames.
- `public/Kaushal_Raj_SE_Resume.pdf`: supplied resume, available through download links.

The 500+ problem count reflects the owner’s latest update. The resume is the source for June 2027 graduation, internship, and featured project descriptions. Existing project repository URLs were retained; their remote availability was not independently verified. The SignalOps visual is an illustrative interface concept, not a product screenshot or live metrics. Additional original projects remain under More explorations.

Typography uses DM Sans and Manrope from Google Fonts, with local system fallbacks if the font service is unavailable. No API keys, contact-form backend, or video-upload service are required. Say hello opens email choices: compose in Gmail, use the visitor’s email app, or copy the address. If clipboard access is denied, the address can be selected and copied manually. No email is sent automatically. This is a static portfolio; replacing the video means updating the project asset and redeploying.
