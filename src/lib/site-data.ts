import { UPWORK_AGENCY_URL } from "@/lib/config";

export type FaqItem = { question: string; answer: string };

export type ServiceOffering = {
  name: string;
  // What makes our approach to this specific offering different from a
  // freelancer or a typical agency — the "why pick us" answer.
  differentiator: string;
  // 3 short steps: how we actually carry this out.
  process: string[];
  // The outcome this offering is meant to drive.
  result: string;
};

export type ServicePillar = {
  name: string;
  slug: string;
  tagline: string;
  // Optional longer version of the tagline, shown only on the pillar's own
  // hub/flagship page header. Falls back to tagline everywhere else (cards,
  // nav menu, footer) so those stay short and scannable.
  pageDescription?: string;
  subOfferings: ServiceOffering[];
  // "combined": the hub URL itself is also the flagship page (Screen 4 template)
  // "separate": hub page (Screen 3 template) links out to a standalone flagship slug
  // "none": hub page only, no flagship page
  flagship: "combined" | "separate" | "none";
  flagshipSlug?: string;
  // Only set when flagship === "combined" — powers the flagship template sections
  whatItIs?: string;
  timeline?: string;
  faq?: FaqItem[];
};

// 7 confirmed service pillars — Architecture/02-ia-sitemap-user-flows.md §4.2
export const servicePillars: ServicePillar[] = [
  {
    name: "Brand Identity",
    slug: "brand-identity",
    tagline: "Build a brand customers remember and trust.",
    subOfferings: [
      {
        name: "Logo Design",
        differentiator:
          "Most freelancers hand you a logo file and disappear. We design your mark as part of a full identity system from day one, so it still works at app-icon size, on a pitch deck, and inside a product UI, not just on a business card.",
        process: [
          "Research your market and audit competitor marks so your logo doesn't blend in",
          "Explore multiple distinct directions before committing to one",
          "Test the final mark across real use cases: favicon, app icon, signage, print",
        ],
        result: "A logo that still looks right in five years and holds up everywhere your brand shows up.",
      },
      {
        name: "Brand Identity Systems",
        differentiator:
          "A logo alone isn't a brand. We build the full system around it (color, type, imagery, iconography) so anyone on your team can create on-brand material without asking us first.",
        process: [
          "Define the visual language: color, typography, imagery rules",
          "Build templates for the assets you'll actually need (deck, social, signage)",
          "Document usage rules so consistency doesn't depend on us",
        ],
        result: "A brand that looks like one company, no matter who's making the next asset.",
      },
      {
        name: "Brand Guidelines",
        differentiator:
          "Most agencies deliver a system with no instructions. We document exactly how to use it, including spacing rules and approved variations, so the brand survives contact with a new hire, a vendor, or a tight deadline.",
        process: [
          "Capture every do and don't from the system we built",
          "Write it for non-designers, not just your design team",
          "Package it as a living document you can hand to any vendor",
        ],
        result: "New hires and outside vendors get it right the first time, without a call with us.",
      },
      {
        name: "Brand Strategy",
        differentiator:
          "Freelancers usually start with visuals. We start with positioning: who you're for, what you stand for, and why someone should pick you over the obvious alternative, then let the visuals follow from that.",
        process: [
          "Audit your market and closest competitors",
          "Define your positioning and the one thing you want to own in people's minds",
          "Translate that positioning into a messaging framework the whole brand builds on",
        ],
        result: "A brand with a clear reason to exist, not just a nice-looking logo.",
      },
      {
        name: "Visual Identity",
        differentiator:
          "We treat visual identity as a system that scales with you, not a one-time deliverable. It's built to extend cleanly as you add products, launch campaigns, or enter new markets.",
        process: [
          "Define the full visual toolkit beyond the logo: photography style, illustration, motion",
          "Apply it across your real touchpoints, not just mockups",
          "Stress-test it against future use cases so it doesn't break in six months",
        ],
        result: "A look and feel that keeps working as the business grows, not one you'll outgrow in a year.",
      },
    ],
    flagship: "combined",
    whatItIs:
      "A complete visual identity that makes your business look as credible as it actually is, from logo to brand guidelines. Built for founders and businesses tired of looking like a work in progress.",
    timeline: "Most brand identity projects take 3 to 5 weeks.",
    faq: [
      {
        question: "Do we get the source files?",
        answer:
          "Yes. You receive full editable source files and a brand guidelines document you can hand to anyone.",
      },
      {
        question: "Can you work with our existing logo?",
        answer:
          "Yes. We can evolve an existing mark or start fresh, depending on what serves the brand best.",
      },
      {
        question: "What if we need more brand assets later?",
        answer:
          "The system is built to extend, so new assets stay consistent without starting over.",
      },
    ],
  },
  {
    name: "Product Strategy",
    slug: "product-strategy",
    tagline: "Know exactly what to build before you build it.",
    subOfferings: [
      {
        name: "Discovery Workshops",
        differentiator:
          "We don't start building until we understand the actual problem. A freelancer takes your brief at face value; we run structured sessions to pressure-test it first, so you're not paying to build the wrong thing well.",
        process: [
          "Run structured sessions with your team to surface real constraints and assumptions",
          "Map what's actually known versus assumed",
          "Leave with a shared, written understanding of the problem before any design starts",
        ],
        result: "Everyone starts the project agreeing on what's actually being built and why.",
      },
      {
        name: "Product Planning",
        differentiator:
          "Plans from a freelancer usually stop at a task list. Ours connect every feature back to a business outcome, so you can defend every build decision to a stakeholder or investor.",
        process: [
          "Translate strategy into a concrete roadmap with sequencing",
          "Tie each planned feature to a specific outcome it's meant to drive",
          "Build in checkpoints to reassess as real usage data comes in",
        ],
        result: "A roadmap you can explain and defend, not just a backlog.",
      },
      {
        name: "Competitor Research",
        differentiator:
          "We go past a features comparison table. We look at what competitors are getting wrong and where their users complain, so your positioning isn't just \"we have that feature too.\"",
        process: [
          "Map the direct and indirect competitive landscape",
          "Identify where competitors are underserving users",
          "Translate findings into a specific opportunity your product can own",
        ],
        result: "A clear answer to \"why not just use [competitor]\" before a customer ever asks it.",
      },
      {
        name: "User Journey Mapping",
        differentiator:
          "Most teams design screen by screen. We map the full journey first, including the parts outside your product (emails, support, onboarding), because that's usually where users actually drop off.",
        process: [
          "Document the end-to-end journey, not just in-app steps",
          "Flag every friction point and drop-off risk",
          "Prioritize fixes by where they'll move the numbers most",
        ],
        result: "Fewer users falling through the cracks between touchpoints.",
      },
      {
        name: "Feature Prioritization",
        differentiator:
          "Freelancers build what you ask for, in the order you ask for it. We help you say no to the features that feel important but won't move the metric you actually care about.",
        process: [
          "Score potential features against effort, impact, and strategic fit",
          "Separate what's needed for launch from what can wait",
          "Build a sequence that gets you to a testable product fastest",
        ],
        result: "You launch with what actually matters, not everything you could think of.",
      },
      {
        name: "MVP Planning",
        differentiator:
          "We scope MVPs to prove the risky assumption, not to include every feature you'll eventually want. That's the difference between a 6-week build and a 6-month one.",
        process: [
          "Identify the one assumption that would kill the business if wrong",
          "Scope the smallest build that tests it honestly",
          "Plan the path from MVP to full product so nothing gets thrown away",
        ],
        result: "A fast, honest test of your idea, not a bloated first version.",
      },
    ],
    flagship: "none",
  },
  {
    name: "UX & UI Design",
    slug: "ux-ui-design",
    tagline: "Create digital experiences your customers enjoy using.",
    subOfferings: [
      {
        name: "UX Research",
        differentiator:
          "We talk to real users before designing, not after launch when it's expensive to fix. Most freelance design work skips this step entirely and designs from opinion.",
        process: [
          "Interview real or prospective users to surface actual behavior",
          "Identify patterns across sessions, not just anecdotes",
          "Turn findings into design principles the whole team can use",
        ],
        result: "Design decisions backed by evidence, not guesses.",
      },
      {
        name: "Wireframes",
        differentiator:
          "We wireframe to solve structure and flow first, before a single color or font gets picked, so revisions happen cheaply on a whiteboard, not expensively in production.",
        process: [
          "Block out core screens and structure at low fidelity",
          "Test flow and logic before visual polish",
          "Get sign-off on structure before investing in final design",
        ],
        result: "Fewer expensive redesigns later because the structure was wrong.",
      },
      {
        name: "User Flows",
        differentiator:
          "We map every path a user can take, including edge cases and error states most freelancers skip, so the product doesn't fall apart the moment a user does something unexpected.",
        process: [
          "Map primary flows plus edge cases and failure states",
          "Identify where flows create unnecessary friction",
          "Simplify paths to the fewest steps that still make sense",
        ],
        result: "A product that holds up under real, messy user behavior, not just the happy path.",
      },
      {
        name: "Design Systems",
        differentiator:
          "A one-off freelancer builds screens. We build a system: reusable components, tokens, and rules, so your team ships new features without redesigning buttons from scratch every time.",
        process: [
          "Define reusable components and design tokens",
          "Document usage rules and states (hover, error, disabled, etc.)",
          "Hand off in a format your engineers can build from directly",
        ],
        result: "New features ship faster because the building blocks already exist.",
      },
      {
        name: "SaaS Dashboards",
        differentiator:
          "Dashboards are easy to make ugly and hard to make useful. We design around the decisions your users actually need to make, not around cramming in every metric you can measure.",
        process: [
          "Identify the handful of decisions the dashboard needs to support",
          "Design information hierarchy around those decisions, not raw data volume",
          "Test with real usage patterns before finalizing layout",
        ],
        result: "Users find what they need in seconds instead of hunting through noise.",
      },
      {
        name: "Mobile Apps",
        differentiator:
          "We design for how phones are actually used: one hand, on the move, short attention span, not by shrinking a desktop layout down to fit a smaller screen.",
        process: [
          "Design around native mobile interaction patterns and constraints",
          "Prioritize the 2 to 3 things users need most, above the fold",
          "Test on real devices, not just a design file",
        ],
        result: "An app that feels native, not like a website squeezed into an app shell.",
      },
      {
        name: "Web Applications",
        differentiator:
          "Web apps aren't marketing sites. We design for repeat use, complex state, and power users, not for a first impression, which is a different design problem most agencies treat the same way.",
        process: [
          "Map the states and permissions the app actually needs to handle",
          "Design for the returning power user, not just the first-time visitor",
          "Validate complex flows with usability testing before build",
        ],
        result: "A tool people can use efficiently every day, not just admire once.",
      },
    ],
    flagship: "combined",
    whatItIs:
      "Interfaces designed around how your users actually think and behave, not just how the product happens to work internally. Built for SaaS teams and founders who need a product people enjoy using.",
    timeline: "Design engagements typically run 4 to 8 weeks depending on product scope.",
    faq: [
      {
        question: "Do you design in Figma?",
        answer:
          "Yes, and we hand off fully organized files your engineering team can build from directly.",
      },
      {
        question: "Can you work alongside our in-house team?",
        answer: "Yes. We regularly plug into existing product and engineering teams.",
      },
      {
        question: "Do you test the designs with real users?",
        answer: "Yes. Research and validation are part of the process, not an afterthought.",
      },
    ],
  },
  {
    name: "Website Design",
    slug: "website-design",
    tagline: "Turn visitors into customers with a site built to convert.",
    subOfferings: [
      {
        name: "Business Websites",
        differentiator:
          "Most business sites are digital brochures. We design around the one action you actually want a visitor to take, and remove everything that distracts from it.",
        process: [
          "Define the single primary action for each key page",
          "Structure content so the case for that action builds as you scroll",
          "Design and build with that conversion goal as the constraint, not an afterthought",
        ],
        result: "More visitors take the action you actually need them to take.",
      },
      {
        name: "Landing Pages",
        differentiator:
          "A freelancer often reuses a template. We build landing pages around a specific offer and audience, structured to convert that traffic source specifically, not a generic visitor.",
        process: [
          "Align page structure to the specific offer and traffic source",
          "Write and design around one clear conversion goal per page",
          "Set up for easy A/B testing once it's live",
        ],
        result: "Higher conversion from the exact campaign the page was built for.",
      },
      {
        name: "Portfolio Websites",
        differentiator:
          "We design portfolios to make the work do the selling, with minimal friction between a visitor and your best pieces, instead of burying great work behind clever navigation.",
        process: [
          "Curate and sequence work for maximum impact, not just chronological order",
          "Remove friction between landing on the site and seeing the best work",
          "Build in a clear path to contact once someone's convinced",
        ],
        result: "Visitors see your best work fast, and know exactly how to reach you after.",
      },
      {
        name: "Marketing Sites",
        differentiator:
          "We build marketing sites as a system that supports ongoing campaigns, not a static launch-and-forget asset, so new landing pages and content don't require a redesign every time.",
        process: [
          "Build a flexible content structure that supports future campaigns",
          "Design reusable page templates, not one-off pages",
          "Set up analytics to see what's actually converting",
        ],
        result: "A site that keeps supporting new campaigns without needing to be rebuilt.",
      },
      {
        name: "Corporate Websites",
        differentiator:
          "Corporate sites often try to speak to everyone and end up saying nothing. We design around your specific audiences (investors, partners, customers, talent) so each one finds what they came for fast.",
        process: [
          "Identify the distinct audiences the site needs to serve",
          "Structure navigation and content around each audience's goal",
          "Balance credibility and polish with actual usability",
        ],
        result: "Every visitor type finds their path fast, instead of getting lost in generic corporate copy.",
      },
    ],
    flagship: "combined",
    whatItIs:
      "A site built to convert, not just to look good, tailored to whoever is actually visiting it: customers, investors, or partners. Built for businesses whose current site undersells them.",
    timeline: "Most website projects take 3 to 6 weeks from kickoff to launch.",
    faq: [
      {
        question: "Will the site be easy for us to update ourselves?",
        answer: "Yes. We build on a CMS so your team can edit content without a developer.",
      },
      {
        question: "Do you handle hosting and domains?",
        answer:
          "We can set it up and hand over full access, or manage it ongoing, whichever you prefer.",
      },
      {
        question: "Will it work well on mobile?",
        answer: "Every site is designed and tested across devices before launch.",
      },
    ],
  },
  {
    name: "Product Development",
    slug: "product-development",
    tagline: "Build software that helps your business work smarter.",
    subOfferings: [
      {
        name: "MVP Development",
        differentiator:
          "We build MVPs to test your riskiest assumption fast, with an architecture that doesn't have to be thrown away once you get funded, unlike a lot of prototype-quality freelance builds.",
        process: [
          "Scope to the smallest build that proves the core hypothesis",
          "Build on an architecture that can extend post-launch",
          "Ship in weeks, not months, with weekly visibility into progress",
        ],
        result: "A real, fundable product in weeks, built on a foundation you can keep.",
      },
      {
        name: "SaaS Platforms",
        differentiator:
          "We build for multi-tenant reality from day one: billing, permissions, onboarding at scale, not just a single-user demo that breaks the moment you get real customers.",
        process: [
          "Architect for multi-tenancy, billing, and roles from the start",
          "Build core workflows around real customer onboarding, not just admin use",
          "Load-test and harden before it's carrying real customer data",
        ],
        result: "A platform that doesn't need a rebuild the moment you get traction.",
      },
      {
        name: "Web Applications",
        differentiator:
          "We build web apps for the maintenance phase, not just launch day: clean code, sane architecture, and documentation, so you're not locked into us or stuck with a mess.",
        process: [
          "Architect around your real data model and user roles",
          "Build with test coverage and documentation as we go, not after",
          "Hand off code you or any team can actually maintain",
        ],
        result: "Software you can extend and maintain long after we're done, with anyone.",
      },
      {
        name: "Custom Software",
        differentiator:
          "Off-the-shelf tools force your process to bend to the software. We build around how your business actually operates, so the tool fits the work instead of the other way around.",
        process: [
          "Map your actual workflow before writing a line of code",
          "Build only what generic tools can't already do well",
          "Integrate cleanly with the tools you're already using",
        ],
        result: "Software that fits how your team actually works, not a workaround.",
      },
      {
        name: "API Integrations",
        differentiator:
          "We treat integrations as critical infrastructure, with error handling and monitoring, not a quick script that quietly breaks the first time a third-party API changes.",
        process: [
          "Map data flow and failure points across every connected system",
          "Build with retry logic, monitoring, and clear error handling",
          "Document the integration so it's not a black box to your team",
        ],
        result: "Integrations that keep working quietly, and fail loudly when something upstream breaks.",
      },
    ],
    flagship: "separate",
    flagshipSlug: "mvp-development",
  },
  {
    name: "AI Solutions",
    slug: "ai-solutions",
    tagline: "Save time and automate repetitive work with AI.",
    subOfferings: [
      {
        name: "AI Chatbots",
        differentiator:
          "We scope chatbots to your actual content and add guardrails against wrong answers, instead of pointing a generic model at your website and hoping it behaves.",
        process: [
          "Design conversation flows around your real, common customer questions",
          "Train and ground the model on your specific content",
          "Test against real questions and add handoff logic to a human when needed",
        ],
        result: "Fewer repetitive tickets for your team, without customers getting confidently wrong answers.",
      },
      {
        name: "AI Image Generation",
        differentiator:
          "We build repeatable, on-brand image generation workflows, not one-off prompts, so your team can produce consistent visuals at volume without a designer in the loop every time.",
        process: [
          "Define your visual style as reusable prompt and model settings",
          "Build a workflow your team can run without prompt-engineering expertise",
          "Set quality checks so off-brand output gets caught before it ships",
        ],
        result: "On-brand visuals at a volume a design team alone couldn't keep up with.",
      },
      {
        name: "AI Video Generation",
        differentiator:
          "We build video generation into an actual production pipeline, from script to output, not a novelty demo, so it fits into how your marketing or content team already works.",
        process: [
          "Define templates and formats that match your actual content needs",
          "Build the pipeline from input (script, brief) to finished output",
          "Set review checkpoints so quality stays consistent at scale",
        ],
        result: "More video content out the door without a proportional increase in production cost.",
      },
      {
        name: "AI Content Creation",
        differentiator:
          "We train content workflows on your voice and expertise, not generic AI output that reads like everyone else's AI output, so it still sounds like you.",
        process: [
          "Codify your brand voice and content standards as a working guide",
          "Build a workflow that drafts against that standard, with human review built in",
          "Tune based on what's actually resonating post-publish",
        ],
        result: "More content, in your actual voice, without it reading like it came from a machine.",
      },
      {
        name: "AI Workflow Automation",
        differentiator:
          "We automate the repetitive steps that eat your team's time, with proper error handling, not brittle scripts that break silently and cause bigger problems than they solve.",
        process: [
          "Map the manual workflow and find the repetitive, rules-based steps",
          "Build automation with monitoring and fallback for when something goes wrong",
          "Roll out gradually so your team trusts it before it's fully hands-off",
        ],
        result: "Hours back in your team's week, without new failure points nobody's watching.",
      },
      {
        name: "AI Assistants",
        differentiator:
          "We build assistants scoped to a specific, high-value job, not a general-purpose chatbot that tries to do everything and does none of it well.",
        process: [
          "Define the specific job the assistant needs to reliably do",
          "Build and ground it on the systems and data it needs access to",
          "Test edge cases before it touches real users or real data",
        ],
        result: "An assistant that reliably handles its one job, instead of a gimmick nobody trusts.",
      },
      {
        name: "AI Search",
        differentiator:
          "We build search that understands intent and your actual content structure, not just keyword matching that misses what users actually mean.",
        process: [
          "Structure your content so it's actually searchable by meaning, not just keywords",
          "Implement semantic search tuned to your specific content",
          "Test against real user queries, not just obvious ones",
        ],
        result: "Users find the right answer on the first try, instead of giving up and emailing support.",
      },
      {
        name: "AI Business Tools",
        differentiator:
          "We build focused internal tools that solve one real operational bottleneck, instead of a generic \"AI dashboard\" that looks impressive in a demo and gets ignored a month later.",
        process: [
          "Identify the specific operational bottleneck worth solving with AI",
          "Build a focused tool around that one job",
          "Get it in front of the actual team using it early, and iterate on real feedback",
        ],
        result: "A tool your team actually opens every day, not one that gets forgotten after launch.",
      },
    ],
    flagship: "separate",
    flagshipSlug: "ai-chatbots",
  },
  {
    name: "Growth Services",
    slug: "growth-services",
    tagline: "Turn traffic into customers with data-driven growth.",
    pageDescription:
      "We help businesses and authors grow through strategic digital marketing. From SEO, lead generation, content marketing, social media, and email automation to Amazon KDP marketing, A+ Content, and book launch campaigns, we drive visibility, engagement, and measurable growth.",
    subOfferings: [
      {
        name: "SEO",
        differentiator:
          "We fix the technical foundation first, then build content around real keyword intent, instead of just publishing blog posts and hoping rankings follow.",
        process: [
          "Run a full technical SEO audit and fix what's blocking rankings",
          "Research keywords by actual buyer intent, not just search volume",
          "Build content and on-page structure around that intent",
        ],
        result: "More of the right traffic finding you before they find a competitor.",
      },
      {
        name: "Content Strategy",
        differentiator:
          "We plan content around your funnel and your buyer's actual questions, not a generic content calendar filled with topics nobody's searching for.",
        process: [
          "Map the questions your buyers actually ask at each funnel stage",
          "Build a content plan that answers them, tied to SEO and conversion goals",
          "Set a cadence your team can actually sustain",
        ],
        result: "Content that moves people toward a decision, not just traffic for its own sake.",
      },
      {
        name: "Social Media Management",
        differentiator:
          "We tie social content back to what's actually driving business results, not vanity metrics like follower count or likes that don't move revenue.",
        process: [
          "Define the specific business goal social needs to support",
          "Build a content plan and voice consistent with your brand",
          "Track what's actually converting, not just what's getting engagement",
        ],
        result: "Social activity that supports pipeline and brand, not just noise.",
      },
      {
        name: "Analytics",
        differentiator:
          "We set up analytics to answer the specific questions your business needs answered, instead of a generic dashboard full of numbers nobody acts on.",
        process: [
          "Define the decisions the data actually needs to inform",
          "Set up tracking and dashboards around those decisions specifically",
          "Review regularly and turn findings into concrete next actions",
        ],
        result: "Data that actually changes what you do next, not a report that gets ignored.",
      },
      {
        name: "Conversion Optimization",
        differentiator:
          "We optimize based on where real users actually drop off, using data and testing, not gut-feel redesigns based on what looks nicer.",
        process: [
          "Identify where users are actually dropping off using real data",
          "Form a specific, testable hypothesis for each fix",
          "Test and measure impact before rolling out changes permanently",
        ],
        result: "More revenue from the traffic you're already paying for or already earning.",
      },
      {
        name: "Performance Improvements",
        differentiator:
          "We treat site speed as a conversion issue, not just a technical nice-to-have, because a slow site is quietly costing you customers before they ever see your offer.",
        process: [
          "Audit load times and technical bottlenecks across key pages",
          "Fix the issues with the biggest impact on real user experience first",
          "Monitor after launch so performance doesn't quietly regress",
        ],
        result: "A faster site that keeps more visitors around long enough to convert.",
      },
      {
        name: "Digital Marketing",
        differentiator:
          "We treat digital marketing as one connected system (SEO, content, social, paid) working toward the same goal, not four disconnected channels run by different people with different numbers to hit.",
        process: [
          "Audit current channels and identify where budget is wasted",
          "Build a unified strategy that ties every channel back to the same business goal",
          "Run and optimize campaigns with shared reporting across channels",
        ],
        result: "Marketing spend that adds up to one coherent growth engine, not scattered activity.",
      },
      {
        name: "Email Marketing",
        differentiator:
          "We build email as a relationship, not a blast list: segmented and timed around where someone actually is in their journey, instead of one newsletter going to everyone.",
        process: [
          "Segment your list around behavior and buying stage",
          "Build automated sequences for the moments that matter (welcome, abandoned cart, re-engagement)",
          "Test subject lines and content against real open and click data",
        ],
        result: "More revenue per subscriber, not just a bigger list.",
      },
      {
        name: "Lead Generation",
        differentiator:
          "We build lead generation around qualified fit, not raw volume, so your sales team spends time on leads that can actually close, not a pile of unqualified form fills.",
        process: [
          "Define what a qualified lead actually looks like for your business",
          "Build the offers and funnels that attract that specific person",
          "Set up scoring and routing so sales gets the right leads fast",
        ],
        result: "Fewer, better leads that your team can actually close.",
      },
      {
        name: "Marketing Automation",
        differentiator:
          "We automate the repetitive follow-up and nurture work your team doesn't have time for, with logic built around your actual sales process, not a generic drip campaign template.",
        process: [
          "Map your current lead and customer lifecycle",
          "Build automated workflows for nurture, follow-up, and handoff to sales",
          "Monitor and refine based on what's actually moving people forward",
        ],
        result: "Consistent follow-up on every lead, without it depending on someone remembering to send it.",
      },
    ],
    flagship: "separate",
    flagshipSlug: "seo",
  },
  {
    name: "Book Publishing & Marketing",
    slug: "book-publishing-marketing",
    tagline: "Turn your manuscript into a book that actually sells.",
    subOfferings: [
      {
        name: "Amazon KDP Publishing",
        differentiator:
          "Most freelancers hand you a file and wish you luck. We handle the full KDP submission, trim size, categories, and keywords, so your book goes live without the rejection emails first-time authors run into.",
        process: [
          "Format your manuscript and cover to Amazon's exact specifications",
          "Set up categories and keywords correctly the first time",
          "Submit and monitor your book through Amazon's review process",
        ],
        result: "Your book goes live without the back-and-forth rejections most first-time authors hit.",
      },
      {
        name: "Book Cover Design",
        differentiator:
          "A cover has about two seconds to earn a click on a crowded Amazon page. We design covers to perform in a thumbnail grid next to competitors, not just look good full-size.",
        process: [
          "Research your genre's bestseller covers",
          "Design a cover that reads clearly even as a small thumbnail",
          "Deliver print-ready and ebook-ready files in Amazon's required formats",
        ],
        result: "A cover built to earn the click in a crowded genre.",
      },
      {
        name: "Interior Book Formatting",
        differentiator:
          "Formatting mistakes are one of the most common reasons KDP rejects a submission. We format to Amazon's exact print and ebook specs the first time.",
        process: [
          "Format your manuscript for both print and Kindle",
          "Set consistent typography and chapter structure",
          "Proof the final file against KDP's technical requirements",
        ],
        result: "A polished interior that passes KDP review the first time.",
      },
      {
        name: "Amazon A+ Content Design",
        differentiator:
          "Most authors never touch A+ Content, and it shows. We design enhanced pages with comparison charts and brand story sections that keep readers on your page.",
        process: [
          "Audit what's currently converting on your book's product page",
          "Design modules that answer a reader's real hesitations",
          "Implement and test inside Amazon's A+ Content manager",
        ],
        result: "A product page that sells the book, not just displays it.",
      },
      {
        name: "Amazon Listing Optimization",
        differentiator:
          "Most authors pick keywords by guessing. We research actual buyer search terms so your book shows up when readers are looking for something like it.",
        process: [
          "Research keywords and categories real readers search",
          "Optimize your title, subtitle, description, and backend keywords",
          "Monitor rankings and adjust as the algorithm shifts",
        ],
        result: "More of the right readers finding your book through Amazon search itself.",
      },
      {
        name: "Book Landing Pages",
        differentiator:
          "A generic Amazon link asks a lot of a cold reader. We build a dedicated landing page that builds the case for your book before sending traffic to buy.",
        process: [
          "Design a page structured around your book's hook and audience",
          "Build in email capture so interested readers aren't lost",
          "Connect it to your launch and ad campaigns as the central hub",
        ],
        result: "A page that turns cold traffic into warm buyers.",
      },
      {
        name: "Book Launch Strategy",
        differentiator:
          "Most authors publish and hope. We plan the launch like a product release, since Amazon's algorithm rewards early momentum, not effort spread thin over months.",
        process: [
          "Build a pre-launch plan to line up reviews and early readers",
          "Sequence launch week for maximum sales velocity",
          "Plan the post-launch push that keeps momentum going",
        ],
        result: "A launch week built to trigger Amazon's own algorithm.",
      },
      {
        name: "Book Marketing & Promotion",
        differentiator:
          "We treat book marketing as an ongoing system, not a one-week push. Consistent, measured promotion outperforms a single burst that fades by month two.",
        process: [
          "Build a promotion calendar spanning launch and beyond",
          "Run targeted ads and promotions matched to your genre's readers",
          "Track what's driving sales and double down on what works",
        ],
        result: "Steady sales momentum months after launch, not just a spike in week one.",
      },
      {
        name: "Social Media Promotion for Books",
        differentiator:
          "We build author platforms around content that sells the book without feeling like an ad every post, using your actual story and expertise.",
        process: [
          "Define a content approach built around your book's themes",
          "Build a consistent posting rhythm on the platforms your readers use",
          "Tie content back to launch and ongoing sales",
        ],
        result: "An author platform that sells books quietly, instead of shouting into an empty room.",
      },
      {
        name: "Author Branding",
        differentiator:
          "A book is often the first of many. We build an author brand that extends beyond a single title, so your next book launches into an existing audience.",
        process: [
          "Define your author identity and positioning",
          "Build a consistent visual and voice system across book, site, and social",
          "Set up the foundation so your next launch builds on this one",
        ],
        result: "An audience that follows you, ready for whatever you publish next.",
      },
    ],
    flagship: "combined",
    whatItIs:
      "A complete publishing and marketing system for authors, from Amazon KDP submission to launch strategy and ongoing promotion. Built for first-time and established authors who want their book to actually sell, not just exist on Amazon.",
    timeline: "Most publishing and launch engagements run 4 to 8 weeks, depending on how much of the manuscript and cover work is already done.",
    faq: [
      {
        question: "Do you help if my manuscript isn't finished yet?",
        answer:
          "Yes. We can start on cover design, positioning, and launch planning while you finish writing, so nothing sits idle waiting on the manuscript.",
      },
      {
        question: "Do I need to already have a KDP account?",
        answer: "No. We can set one up with you or work inside an existing account, whichever you already have.",
      },
      {
        question: "Can you help market a book I already published?",
        answer:
          "Yes. We regularly take over marketing and promotion for books that are live but underperforming, not just new launches.",
      },
    ],
  },
];

export type FlagshipService = {
  slug: string;
  name: string;
  parentPillarSlug: string;
  whatItIs: string;
  included: string[];
  timeline: string;
  faq: FaqItem[];
};

// Standalone flagship pages — one specific offering pulled out of its
// parent pillar's sub-offerings list for its own SEO-indexable page.
export const flagshipServices: FlagshipService[] = [
  {
    slug: "mvp-development",
    name: "MVP Development",
    parentPillarSlug: "product-development",
    whatItIs:
      "A working version of your product built fast enough to test with real users, and solid enough to build on. Built for early-stage founders who need to launch, learn, and raise.",
    included: [
      "Technical scoping and architecture",
      "Core feature build",
      "Third-party integrations (payments, auth, APIs)",
      "QA and cross-device testing",
      "Deployment and launch support",
    ],
    timeline: "Most MVPs ship in 3 to 6 weeks with a small, dedicated team.",
    faq: [
      {
        question: "Can we start before we have full funding?",
        answer:
          "Yes. Most of our MVP clients are pre-seed or early seed stage. We scope to what your budget and timeline can support.",
      },
      {
        question: "Will the code be ours to keep and extend?",
        answer:
          "Yes. You own the codebase outright and can bring it in-house or continue with us after launch.",
      },
      {
        question: "What if our idea changes after we start?",
        answer:
          "We build in short cycles specifically so direction can shift without losing prior work.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    parentPillarSlug: "ai-solutions",
    whatItIs:
      "A conversational assistant trained on your business that handles support, sales, or onboarding without waiting on a human. Built for teams drowning in repetitive questions.",
    included: [
      "Conversation design and scripting",
      "Model selection and training on your content",
      "Integration with your site, app, or helpdesk",
      "Handoff logic to a human when needed",
      "Ongoing tuning after launch",
    ],
    timeline: "Most chatbot builds take 2 to 4 weeks depending on integration complexity.",
    faq: [
      {
        question: "Will it give customers wrong answers?",
        answer:
          "We scope it to your actual content, add guardrails, and test it against real questions before launch.",
      },
      {
        question: "Does it replace our support team?",
        answer:
          "It handles repetitive volume so your team can focus on harder cases, not replace them outright.",
      },
      {
        question: "Can it connect to our existing tools?",
        answer: "Yes. We integrate with common helpdesk, CRM, and messaging platforms.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    parentPillarSlug: "growth-services",
    whatItIs:
      "A technical and content foundation that helps the right customers find you on search before they find a competitor. Built for businesses tired of paying for every visitor.",
    included: [
      "Technical SEO audit",
      "Keyword and competitor research",
      "On-page and content optimization",
      "Site structure and performance fixes",
      "Monthly reporting on rankings and traffic",
    ],
    timeline: "Foundational work takes 4 to 6 weeks, with results building over 3 to 6 months.",
    faq: [
      {
        question: "How fast will we see results?",
        answer:
          "Technical fixes can help within weeks, but meaningful ranking growth typically takes a few months.",
      },
      {
        question: "Do you write the content too?",
        answer: "Yes. Content strategy and writing are part of the engagement, not a separate add-on.",
      },
      {
        question: "Is this a one-time project or ongoing?",
        answer: "SEO compounds over time, so most clients stay on an ongoing basis after the initial foundation.",
      },
    ],
  },
];

// Start a Project intake wizard — Architecture/02-ia-sitemap-user-flows.md §5.7
export const intakeStageOptions = [
  { value: "idea", label: "Just an idea, not built yet" },
  { value: "improving", label: "Have a product, want to improve it" },
  { value: "capacity", label: "Have a team, need extra capacity" },
];

export const intakeBudgetOptions = [
  { value: "under-2.5k", label: "Under $2,500" },
  { value: "2.5k-5k", label: "$2,500 to $5,000" },
  { value: "5k-10k", label: "$5,000 to $10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const intakeTimelineOptions = [
  { value: "asap", label: "ASAP (within 2 weeks)" },
  { value: "1-2-months", label: "1 to 2 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "not-sure", label: "Not sure yet" },
];

export const primaryNav = [
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// 8 confirmed industries — Architecture/05-decisions-log.md decision #6
export const industries = [
  {
    name: "SaaS",
    slug: "saas",
    description:
      "From onboarding flows to complex dashboards, we help SaaS companies design and build products people actually want to use, and the growth systems that get them in front of the right users.",
  },
  {
    name: "Startups",
    slug: "startups",
    description:
      "Early-stage speed without early-stage looking. We help startups build a credible brand and a real product fast enough to matter for a raise, a launch, or a first hundred customers.",
  },
  {
    name: "Ecommerce",
    slug: "ecommerce",
    description:
      "Storefronts, product pages, and checkout flows built to convert, backed by a brand that gives shoppers a reason to trust you before they trust the product.",
  },
  {
    name: "Fintech",
    slug: "fintech",
    description:
      "Trust is the product. We design and build fintech experiences that make complex financial tools feel simple, secure, and credible.",
  },
  {
    name: "Healthtech",
    slug: "healthtech",
    description:
      "We help healthtech companies design experiences that stay clear and trustworthy under real regulatory and usability pressure, for both patients and providers.",
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    description:
      "For larger organizations, we bring startup speed to a scoped initiative, without sacrificing the process rigor and documentation an enterprise team needs.",
  },
  {
    name: "Construction & Interior Design",
    slug: "construction-interior-design",
    description:
      "We help construction and interior design studios turn strong craft into a visible pipeline, with brand, content, and lead generation built around how clients actually search for you.",
  },
  {
    name: "Fashion",
    slug: "fashion",
    description:
      "Brand identity and digital experiences for fashion labels that need to look as considered as the product itself, from logo to lookbook to storefront.",
  },
];

// TODO: replace with real client metrics once available (decision #9)
export const trustMetrics = [
  { value: "40+", label: "Projects Delivered" },
  { value: "15+", label: "Businesses Supported" },
  { value: "8", label: "Industries Served" },
  { value: "100%", label: "Tailored Solutions" },
];

export type WorkProject = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  // Real projects (as opposed to still-placeholder ones) carry a cover
  // image, gallery, and full story for their own /work/[slug] page.
  coverImage?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  story?: string[];
  result?: string;
};

export const placeholderWork: WorkProject[] = [
  {
    slug: "milestack",
    title: "Milestack",
    category: "Product Development",
    industry: "SaaS",
    description:
      "A secure, intuitive workspace where freelancers, agencies, and clients manage projects, escrow payments, and contracts from start to finish.",
    coverImage: "/work/milestack/cover.jpg",
    gallery: [
      {
        src: "/work/milestack/hero.jpg",
        alt: "Milestack landing page hero, found a client we'll secure the deal",
        caption: "Landing page: protect payments, track milestones, get paid with confidence",
      },
      {
        src: "/work/milestack/workflow.jpg",
        alt: "Milestack six-step workflow from invite to payout",
        caption: "The workflow: invite, milestone, fund, deliver, approve, payout",
      },
      {
        src: "/work/milestack/features.jpg",
        alt: "Milestack core features: escrow, milestone tracking, contracts, chat, files",
        caption: "Core features: escrow payments, milestone tracking, contracts, and more",
      },
      {
        src: "/work/milestack/who-its-for.jpg",
        alt: "Milestack audience: freelancers, designers, developers, agencies",
        caption: "Built for anyone doing independent, client-billed work",
      },
      {
        src: "/work/milestack/pricing.jpg",
        alt: "Milestack pricing, project protection fee and verified membership",
        caption: "Transparent pricing: freelancers keep 100%, clients pay for protection",
      },
      {
        src: "/work/milestack/dashboard.jpg",
        alt: "Milestack dashboard showing available balance and active workspaces",
        caption: "Dashboard: available balance, escrow, and active workspaces at a glance",
      },
      {
        src: "/work/milestack/workspaces.jpg",
        alt: "Milestack workspaces list view",
        caption: "Workspaces: every active and completed project, in one place",
      },
      {
        src: "/work/milestack/milestones.jpg",
        alt: "Milestack milestones list across all workspaces",
        caption: "Milestones: tracked across every workspace, by status",
      },
      {
        src: "/work/milestack/contracts.jpg",
        alt: "Milestack contracts list, scope-of-work agreements",
        caption: "Contracts: scope-of-work agreements generated straight from milestones",
      },
    ],
    story: [
      "Milestack solves a trust problem that comes up constantly for independent freelancers and agencies: a client is found, but there's no safe way to handle payment, scope, and delivery without a marketplace platform taking a cut. The brief was to build that missing layer, a workspace that protects both sides without forcing anyone onto a new marketplace.",
      "Every project runs through the same trusted sequence: invite a client with a link, break the work into priced milestones, have the client fund the project into escrow, deliver and get approval, then release payment. Freelancers keep 100% of what they earn; clients pay a transparent Project Protection Fee for the security. Contracts are generated automatically from the milestones themselves, so scope is never a separate conversation.",
      "We designed the dashboard around the one number that matters most to a freelancer: what's actually available to withdraw right now, versus what's still in escrow or pending. Workspaces, milestones, and contracts all live as their own dedicated views, so both sides can always see exactly where the money and the work stand.",
    ],
    result:
      "A workspace that lets freelancers and agencies work directly with clients they already found, without giving up payment protection or a paper trail.",
  },
  {
    slug: "p-studios",
    title: "P-Studios",
    category: "Digital Marketing Systems",
    industry: "Business Growth",
    description:
      "The strategy was designed to help P-Studios consistently attract high-intent prospects while creating a scalable foundation for long-term business growth.",
    coverImage: "/work/p-studios/cover.jpg",
    gallery: [
      {
        src: "/work/p-studios/hero.jpg",
        alt: "P-Studios case study hero, 90 days, one growth system",
        caption: "90 days, one growth system: from quiet portfolio to a full pipeline",
      },
      {
        src: "/work/p-studios/starting-point.jpg",
        alt: "P-Studios starting point, industry, location, and starting monthly leads",
        caption: "The starting point: strong craft, no structured lead capture or content system",
      },
      {
        src: "/work/p-studios/before-after-audit.jpg",
        alt: "P-Studios before and after audit across portfolio, lead capture, SEO, and more",
        caption: "The audit: every area scored before and after, day 90",
      },
      {
        src: "/work/p-studios/90-day-build.jpg",
        alt: "P-Studios 90-day build plan across foundation, framing, and finishing phases",
        caption: "The 90-day build: foundation, framing, and finishing, week by week",
      },
      {
        src: "/work/p-studios/revenue-impact.jpg",
        alt: "P-Studios revenue impact metrics and founder testimonial",
        caption: "Revenue impact: signed contracts, pipeline value, and return on ad spend",
      },
    ],
    story: [
      "P-Studios is a boutique construction and interior design studio building homes and commercial fit-outs across Lagos. The craft was strong, but the pipeline wasn't: beautiful finished work sat on a phone camera roll instead of in front of the people ready to hire for it. There was no structured lead capture, no consistent content, and a Google presence that made the studio invisible to anyone searching for a designer nearby.",
      "The strategy was designed to help P-Studios consistently attract high-intent prospects while building a scalable foundation for long-term growth, not a one-off traffic spike. We ran a full brand and digital audit across Instagram, Google Business, and the website, then rebuilt the digital presence in three 30-day phases: foundation (audit, positioning, infrastructure), framing (content system, funnel, first paid tests), and finishing (scaling what worked, adding proof, and referrals).",
      "Every phase was built to compound into the next: a shot-list and content calendar fed a weekly before/after content series, a lead magnet and inquiry funnel turned attention into contact, and paid tests were scaled only once they proved a positive return.",
    ],
    result:
      "Monthly website traffic up 653%, qualified inquiries up from 4 to 29 a month, 7 signed projects and ₦186.4M in contract revenue within the first 90 days, and a 9.4x return on ad spend.",
  },
  {
    slug: "monve",
    title: "MONVE",
    category: "Brand Identity",
    industry: "Fashion",
    description:
      "A complete identity system for a premium accessories brand, built around an emblem that hides its own initials.",
    coverImage: "/work/monve/hero.png",
    gallery: [
      {
        src: "/work/monve/brand-overview.png",
        alt: "MONVE brand overview guideline page",
        caption: "Brand overview: what MONVE is, and who it's built for",
      },
      {
        src: "/work/monve/brand-mission-vision-values.png",
        alt: "MONVE brand mission, vision, and values guideline page",
        caption: "Mission, vision, and values: the reasoning behind the brand",
      },
      {
        src: "/work/monve/brand-personality.png",
        alt: "MONVE brand personality guideline page",
        caption: "Brand personality: intelligent, minimal, calm, confident",
      },
      {
        src: "/work/monve/brand-voice.png",
        alt: "MONVE brand voice guideline page",
        caption: "Brand voice: how MONVE sounds in writing, with real examples",
      },
      {
        src: "/work/monve/primary-logo.png",
        alt: "MONVE primary logo lockup on charcoal",
        caption: "Primary logo: owl emblem above the MONVE wordmark",
      },
      {
        src: "/work/monve/logo-overview.png",
        alt: "MONVE logo overview guideline page",
        caption: "The two elements of the mark: the owl emblem and the MONVE wordmark",
      },
      {
        src: "/work/monve/logo-symbolism.png",
        alt: "MONVE logo symbolism guideline page explaining the owl and hidden monogram",
        caption: "Why an owl: intelligence and clarity, with a hidden M and V monogram",
      },
      {
        src: "/work/monve/logo-usage.png",
        alt: "MONVE logo usage guideline page showing primary and secondary variations",
        caption: "Primary and secondary logo variations, and when to use each",
      },
      {
        src: "/work/monve/brand-colors.png",
        alt: "MONVE brand color palette guideline page",
        caption: "A five-color palette anchored by Champagne Gold",
      },
      {
        src: "/work/monve/typography.png",
        alt: "MONVE typography guideline page",
        caption: "Satoshi for headlines, Inter for supporting text",
      },
      {
        src: "/work/monve/photography-1.jpg",
        alt: "MONVE product photography direction, lifestyle grid",
        caption: "Photography direction: clean, modern, natural light",
      },
      {
        src: "/work/monve/photography-2.jpg",
        alt: "MONVE lifestyle product photograph of the laptop bag",
        caption: "The identity carried through to real product photography",
      },
      {
        src: "/work/monve/brand-applications.png",
        alt: "MONVE brand applications guideline page",
        caption: "Where the identity shows up: packaging, hardware, site, and more",
      },
      {
        src: "/work/monve/who-its-for.png",
        alt: "Who MONVE is for guideline page",
        caption: "The audience the brand is built to speak to",
      },
    ],
    story: [
      "MONVE is a premium accessories brand designing refined, minimalist laptop bags for modern professionals, founders, and technology enthusiasts. The brief was to build a brand that felt as considered as the products themselves: quiet, precise, and unmistakably premium, without ever feeling loud.",
      "We built the identity around a single idea: the tools people carry every day should reflect the same intelligence and craftsmanship as their work. That idea became the owl, a symbol of clarity and precision, redrawn as a continuous geometric line that quietly forms the letters M and V at its center. It works as a symbol on its own, and as a monogram up close, a mark that rewards a second look instead of shouting on the first.",
      "Around that mark, we built a full system: a refined five-color palette anchored by a champagne gold, a two-typeface hierarchy (Satoshi for headlines and product copy, Inter for supporting text), and a documented brand voice that favors calm confidence over hype. Every guideline exists to keep MONVE feeling like one brand, whether it shows up on a product tag, a zipper pull, or a pitch deck.",
    ],
    result:
      "A brand system precise enough to guide every future touchpoint, from product embossing to marketing campaigns, without another design decision needed from scratch.",
  },
  {
    slug: "pufby-ai",
    title: "Pufby AI",
    category: "AI Solutions",
    industry: "SaaS",
    description:
      "An AI-powered book cover platform for self-publishing authors, with a built-in validator that catches KDP formatting issues before submission.",
    coverImage: "/work/pufby-ai/cover.jpg",
    gallery: [
      {
        src: "/work/pufby-ai/landing.jpg",
        alt: "Pufby AI landing page hero and how it works",
        caption: "Landing page: publish-ready book covers with AI, in minutes",
      },
      {
        src: "/work/pufby-ai/signup.jpg",
        alt: "Pufby AI signup flow, choose a login password",
        caption: "A simple, low-friction signup flow",
      },
      {
        src: "/work/pufby-ai/validator.jpg",
        alt: "Pufby AI KDP validator tool, upload manuscript and cover",
        caption: "The KDP validator: catches 20+ formatting issues before submission",
      },
      {
        src: "/work/pufby-ai/pricing.jpg",
        alt: "Pufby AI pricing plans, Starter and Pro",
        caption: "Simple one-time pricing built for indie authors",
      },
    ],
    story: [
      "Pufby AI helps self-publishing authors go from manuscript to a KDP-ready book cover without hiring a designer or guessing at Amazon's formatting rules. The brief was to make something that felt as fast and reassuring as the promise on the landing page: publish-ready covers with AI, in minutes.",
      "The core of the product is the validator: authors upload their interior manuscript and cover file, and it checks trim size, spine width, bleed, and more against KDP's actual requirements, scanning for over 20 common issues that would otherwise get a submission rejected. We paired that with an AI cover generator, so an author with no design background can go from a prompt to a finished, compliant cover in one flow.",
      "We kept the interface deliberately simple: a low-friction signup, a single generation screen, and one-time pricing instead of a confusing subscription tier, matching how a solo author actually thinks about the cost of publishing one book.",
    ],
    result:
      "A tool that removes the two biggest blockers for indie authors: not knowing if their files meet KDP's rules, and not being able to afford a professional cover designer.",
  },
];

// TODO: replace with real client quotes once available (decision #9)
export const placeholderTestimonials = [
  {
    quote: "Working with Trivestack felt like adding an experienced product team to our business.",
    name: "Founder",
    role: "B2B SaaS Startup",
  },
  {
    quote: "The process was organized, collaborative, and backed by real thinking at every step.",
    name: "Head of Product",
    role: "Growth Stage Technology Company",
  },
  {
    quote: "We came looking for a design partner and found a team that cared as much as we did.",
    name: "CEO",
    role: "Early Stage Software Company",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business, audience, goals, and challenges before making any recommendations.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We define the brand, growth strategy, user experience, and project roadmap before execution begins.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We create your brand identity, website, product, and marketing assets as one cohesive system.",
  },
  {
    step: "04",
    title: "Build & Launch",
    description:
      "We develop, implement, and launch your website, AI solutions, and digital experiences with performance in mind.",
  },
  {
    step: "05",
    title: "Grow & Optimize",
    description:
      "We continuously improve through content, digital marketing, lead generation, social media growth, and data driven optimization.",
  },
];

export const whyPoints = [
  {
    title: "One team, no handoffs.",
    description: "Strategy, brand, design, and engineering live under one roof.",
  },
  {
    title: "AI native by default.",
    description: "AI is part of how we build, not an add-on we pitch separately.",
  },
  {
    title: "Real strategy before pixels.",
    description: "We diagnose the problem before we design a solution for it.",
  },
  {
    title: "Systems, not one-off pages.",
    description: "Everything we build is reusable and ready to scale with you.",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: servicePillars.map((p) => ({
      label: p.name,
      href: `/services/${p.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/about/process" },
      { label: "Contact", href: "/contact" },
      { label: "Work With Us on Upwork", href: UPWORK_AGENCY_URL, external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
