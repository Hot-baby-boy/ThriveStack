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

// Where Contact and Start a Project form submissions get emailed.
// Temporarily set to the email that owns the Resend account
// (ogundipe295@gmail.com), because Resend's shared sandbox sender
// (onboarding@resend.dev, see FROM_EMAIL below) can only deliver to that
// address until a real domain is verified in Resend. Once a domain is
// verified there, switch this back to trivestack@gmail.com (or set
// NOTIFY_EMAIL as a Vercel environment variable instead of editing this).
export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "ogundipe295@gmail.com";

// Resend's shared sending address, usable before a custom domain is
// verified with Resend. Once a domain is verified there (Resend dashboard
// > Domains), switch this to something like "Trivestack <hello@yourdomain.com>".
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Trivestack <onboarding@resend.dev>";
