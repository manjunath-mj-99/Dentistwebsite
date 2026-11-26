# Sanjeevni Dental & Endodontic Clinic

A responsive clinic website built with Next.js App Router, TypeScript and Tailwind CSS. The doctor portrait supplied with the project is stored at `public/images/doctor.jpg`.

## Run locally

Requires Node.js 20 LTS.

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. For production, run `npm run build` followed by `npm start`. `npm run lint` runs Next.js linting.

## Email forms

Copy `.env.example` to `.env.local` and configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_FROM` and optionally `CONTACT_TO`. The contact and subscription forms validate with Zod, include a honeypot and apply basic in-memory IP rate limiting. Without SMTP settings, the API returns a clear configuration message and logs the event; it does not pretend that an email was delivered. The in-memory limiter is suitable for a single local instance; use a shared store for horizontally scaled production deployments.

## Edit clinic information

Update contact details, WhatsApp URL, address, hours, service names, affiliations, experience baseline, counters, equipment and FAQ content in `config/site.ts`. Counter values set to zero are placeholders and should be replaced with verified clinic figures. Social URLs are placeholders. The domain used by metadata, sitemap and robots is also a placeholder and should be changed to the final clinic domain before launch.

## Images and wordmark

Replace `public/images/doctor.jpg` with the approved doctor photo while preserving the filename or update its references in the home and about pages. Images in the gallery and community sections currently use relevant sample photography and should be replaced with clinic-approved images. `IMAGE_MANIFEST.md` lists image slots and replacement guidance. The wordmark is plain text in `components/Logo.tsx`; replace that component with a real clinic logo when available.

## Routes

Home, services and service details, about, gallery, community, oral health articles, FAQ, contact, privacy and terms pages are included. The app uses Node.js route handlers at `/api/contact` and `/api/subscribe`.
