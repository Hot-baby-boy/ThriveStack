// Site-wide external links and settings. Update the value here and every
// reference across the site picks it up automatically.

// Every "View Our Upwork Agency" / "Upwork Agency" link on the site reads
// from this single constant.
export const UPWORK_AGENCY_URL = "https://www.upwork.com/agencies/2079511047600446090/";

// The live production domain, once purchased and connected. Used for
// canonical URLs, Open Graph tags, and the sitemap. Update this the moment
// a real domain is live, ideally by setting NEXT_PUBLIC_SITE_URL in Vercel's
// environment variables instead of editing this file, so previews and
// production can point at different URLs automatically.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
