/**
 * PAGE CONTENT for every page except the homepage.
 * Each page is a list of sections. Edit the text between the quotation marks.
 */
import type { FaqId } from "./site";

export type PageSection =
  | { kind: "prose"; eyebrow: string; heading: string; paragraphs: string[] }
  | { kind: "list"; eyebrow: string; heading: string; intro?: string; items: string[]; columns?: 1 | 2 }
  | { kind: "pairs"; eyebrow: string; heading: string; intro?: string; items: { title: string; body: string }[] }
  | { kind: "quote"; text: string; followUp: string }
  | { kind: "outOfNetwork" }
  | { kind: "credentials"; eyebrow: string; heading: string }
  | { kind: "video"; eyebrow: string; heading: string }
  | {
      kind: "photos";
      eyebrow: string;
      heading: string;
      caption: string;
      images: { src: string; alt: string; width: number; height: number }[];
    }
  | { kind: "contact"; eyebrow: string; heading: string; intro: string; note: string }
  | { kind: "faq"; eyebrow: string; heading: string; ids: FaqId[] };

export type PageContent = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    /** Show the small headshot beside the heading. Defaults to yes. */
    portrait?: boolean;
    /** Show the booking button under the heading. Defaults to yes. */
    booking?: boolean;
    /** Use the seated headshot instead of the main one. */
    portraitVariant?: "main" | "seated";
  };
  /** Shown under the heading on policy pages, e.g. "October 20, 2026". */
  lastUpdated?: string;
  sections: PageSection[];
  /** The dark booking band at the bottom. Leave out to hide it. */
  closing?: { heading: string; body: string };
  related?: { label: string; href: string }[];
};

export const adhdPage: PageContent = {
  slug: "/adhd-therapy",
  seoTitle: "ADHD Therapy for Professionals in New York",
  seoDescription:
    "Telehealth therapy across New York State for adults with ADHD in demanding jobs. Executive functioning strategies and psychotherapy with Tanya Fridland, LCSW, a former BigLaw attorney.",
  breadcrumb: "ADHD",
  hero: {
    eyebrow: "Therapy for adults with ADHD",
    heading: "When the job demands more than your systems can carry.",
    lead:
      "You know what you need to do, and you very much want to do it, but you can’t seem to get yourself to do it consistently. I help professionals with ADHD build systems that fit how their brains work, and untangle the stress and self-doubt that years of extra effort can leave behind.",
  },
  sections: [
    {
      kind: "list",
      eyebrow: "ADHD at work",
      heading: "Capable, and exhausted from compensating.",
      intro:
        "Many of my clients are bright, accomplished professionals who have spent years wondering why everyday tasks seem harder for them than for everyone else. It might look like:",
      items: [
        "Running late, or working late to make up for lost hours during the day",
        "Putting off the important project until the deadline forces it",
        "An inbox and to-do list that never get smaller",
        "Staying on top of everything at work, then having nothing left at home",
        "Strong performance reviews alongside a constant fear of being found out",
        "Decision fatigue, procrastination, and difficulty getting started",
      ],
      columns: 2,
    },
    {
      kind: "prose",
      eyebrow: "More than attention",
      heading: "ADHD is about executive functioning.",
      paragraphs: [
        "Skills like planning, prioritizing, organizing, starting tasks, managing time, regulating emotions, and following through can all be affected. In a demanding job, those gaps get filled with willpower, long hours, and anxiety, until that stops working.",
        "These challenges often lead to burnout, shame, and self-doubt. That’s why our work addresses both the practical side of ADHD and the way it has shaped how you see yourself.",
      ],
    },
    {
      kind: "pairs",
      eyebrow: "What we work on",
      heading: "Practical systems and the patterns underneath them.",
      items: [
        {
          title: "Routines that fit your brain",
          body: "Building realistic planning and daily structure, instead of borrowing systems designed for someone else.",
        },
        {
          title: "Big projects, smaller steps",
          body: "Breaking overwhelming work into manageable pieces, and finding ways to start.",
        },
        {
          title: "Time and priorities",
          body: "Improving time management and reducing procrastination and decision fatigue.",
        },
        {
          title: "Emotional regulation",
          body: "Handling frustration and overwhelm at work and at home.",
        },
        {
          title: "Perfectionism and self-esteem",
          body: "Loosening the habits of overpreparing and self-criticism that often grow up around ADHD.",
        },
        {
          title: "Relationships and family",
          body: "Understanding how executive functioning affects your relationships, parenting, and household.",
        },
      ],
    },
    {
      kind: "prose",
      eyebrow: "Diagnosed as an adult, or still wondering",
      heading: "You don’t need a diagnosis to start.",
      paragraphs: [
        "More than half of U.S. adults with ADHD were diagnosed as adults, according to the CDC. If you’re wondering whether ADHD explains what you’ve been experiencing, we’ll look at your history and goals together and decide whether pursuing a formal evaluation would be useful.",
        "A diagnosis can be a helpful tool for insight. It doesn’t define who you are.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "One person for the whole picture",
      heading: "Practical strategies and the emotional work, together.",
      paragraphs: [
        "You might wonder whether you need one person for the practical side of ADHD and another for the emotional side. In my experience, the two can’t be separated. The guilt over what didn’t get done, the anxiety about impending tasks, and the self-doubt that builds over years are part of the same cycle as the executive dysfunction itself.",
        "That’s why my approach combines teaching executive functioning skills and strategies with therapy, in the same sessions. I don’t believe in one-size-fits-all productivity advice. We experiment, adjust, and keep what works, while working through what’s been making it hard.",
      ],
    },
    {
      kind: "faq",
      eyebrow: "Questions",
      heading: "Questions about ADHD therapy.",
      ids: ["adhd-diagnosis", "coach-or-therapist", "organization-only", "medication", "employer", "scheduling"],
    },
    { kind: "outOfNetwork" },
  ],
  closing: {
    heading: "Spend less energy struggling.",
    body: "The goal isn’t to become perfectly organized. It’s to have more energy for the life you want. A free consultation is a good place to start.",
  },
  related: [{ label: "Therapy for working parents", href: "/working-parents" }],
};

export const parentsPage: PageContent = {
  slug: "/working-parents",
  seoTitle: "Therapy for Working Parents in New York",
  seoDescription:
    "Telehealth therapy across New York State for working parents in demanding careers who feel they’re falling short at work and at home. Tanya Fridland, LCSW, former BigLaw attorney.",
  breadcrumb: "Working Parents",
  hero: {
    eyebrow: "Therapy for working parents",
    heading: "When work and family both need you.",
    lead:
      "You care deeply about your work. You care deeply about your family. Yet it can feel like you’re constantly falling short in both. I help parents in demanding careers step out of survival mode and decide, on purpose, where their time and energy go.",
  },
  sections: [
    {
      kind: "list",
      eyebrow: "Sound familiar?",
      heading: "Never fully present anywhere.",
      intro: "Maybe you’re:",
      items: [
        "Giving everything at work, then coming home depleted and unavailable to the people you love",
        "Leaving early for school pickup and wondering if you’re no longer living up to your professional potential",
        "Thinking about work with your kids, and about your kids at work",
        "Returning from parental leave to a job, and an identity, that no longer fit the way they did",
        "Carrying the mental load: schedules, appointments, forms, and a thousand small decisions",
        "Parenting a child with ADHD or anxiety while managing your own stress",
      ],
      columns: 2,
    },
    {
      kind: "quote",
      text: "“I feel like I’m failing at work, and I’m failing at home.”",
      followUp:
        "Many of the parents I work with tell me some version of this. You’re not failing. You’re trying to meet enormous demands in a world that often expects you to do two full-time jobs, one at work and one at home.",
    },
    {
      kind: "prose",
      eyebrow: "Why it’s harder now",
      heading: "Parenthood reshapes your identity.",
      paragraphs: [
        "The routines, expectations, and strategies that once worked may no longer fit your life. If you have ADHD, anxiety, or perfectionistic tendencies, the mental load can feel even heavier, and the guilt of being chronically behind adds up.",
        "Before becoming a therapist, I practiced as a BigLaw attorney. That, and my own experience of becoming a parent, gave me a firsthand understanding of how a demanding career and a family can pull in opposite directions.",
      ],
    },
    {
      kind: "pairs",
      eyebrow: "What we work on",
      heading: "Fewer impossible standards, more of what matters.",
      items: [
        {
          title: "The expectations you carry",
          body: "Examining the standards you’ve set for yourself as a professional and a parent, and which ones are worth keeping.",
        },
        {
          title: "What matters most",
          body: "Identifying what’s truly important to you, so your time and attention follow your values.",
        },
        {
          title: "Practical systems",
          body: "Strategies for schedules, decisions, and the mental load, built around your real week.",
        },
        {
          title: "Flexibility and self-compassion",
          body: "Navigating competing responsibilities without treating every tradeoff as a failure.",
        },
      ],
    },
    {
      kind: "prose",
      eyebrow: "The goal",
      heading: "Not perfect balance. A life that reflects your values.",
      paragraphs: [
        "My goal isn’t to help you achieve a mythical state of perfect balance. It’s to help you build a life where success isn’t measured by doing everything perfectly, but by feeling more present, more connected, and more like yourself.",
      ],
    },
    {
      kind: "faq",
      eyebrow: "Questions",
      heading: "Questions about getting started.",
      ids: ["scheduling", "employer", "what-to-expect", "frequency", "insurance"],
    },
    { kind: "outOfNetwork" },
  ],
  closing: {
    heading: "Make room to think it through.",
    body: "Therapy is a place to slow down and decide what you want your work and family life to look like. A free consultation is a good first step.",
  },
  related: [{ label: "Therapy for adults with ADHD", href: "/adhd-therapy" }],
};

export const cliniciansPage: PageContent = {
  slug: "/for-clinicians",
  seoTitle: "For Referring Clinicians",
  seoDescription:
    "Referral information for psychiatrists, physicians, prescribers, and coaches. Telehealth therapy across New York State for working parents and adults with ADHD.",
  breadcrumb: "For Clinicians",
  hero: {
    eyebrow: "For psychiatrists, physicians, prescribers, and coaches",
    heading: "A therapy partner for your adult clients.",
    lead:
      "I provide individual psychotherapy by telehealth to adults located anywhere in New York State, with a focus on working parents in demanding careers, and on ADHD and executive functioning in professionals.",
  },
  sections: [
    {
      kind: "list",
      eyebrow: "Who I see",
      heading: "Adults who may be a good fit.",
      items: [
        "Working parents struggling with the competing demands of career and family",
        "Adults with ADHD, including those diagnosed in adulthood and those exploring whether ADHD fits",
        "Professionals whose executive functioning challenges affect their work",
        "Adults with co-occurring anxiety, depression, or burnout",
      ],
      columns: 1,
    },
    {
      kind: "pairs",
      eyebrow: "What I offer",
      heading: "Psychotherapy with practical executive functioning work.",
      items: [
        {
          title: "Approach",
          body: "CBT, ACT, Motivational Interviewing, and Solution-Focused Therapy, integrated with executive functioning strategies.",
        },
        {
          title: "Format",
          body: "Individual sessions by video for adults in New York State. Most clients begin weekly.",
        },
        {
          title: "Scheduling",
          body: "Flexible rescheduling on short notice.",
        },
        {
          title: "Insurance",
          body: "Out-of-network. I provide superbills and help clients verify their out-of-network benefits.",
        },
      ],
    },
    {
      kind: "prose",
      eyebrow: "Background",
      heading: "Tanya Fridland, LCSW.",
      paragraphs: [
        "I’m a New York licensed clinical social worker with an MSW from the Columbia University School of Social Work, where I specialized in Advanced Clinical Social Work Practice. Before becoming a therapist, I practiced as a BigLaw attorney in New York City after earning my JD at Harvard Law School.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "Making a referral",
      heading: "How to refer.",
      paragraphs: [
        "The simplest route is for your client to book a free consultation through my online scheduling page. You’re also welcome to email me to introduce yourself or ask whether a referral would be a good fit.",
        "Please don’t include protected health information by email.",
      ],
    },
  ],
  closing: {
    heading: "Have a client in mind?",
    body: "Clients can book a free consultation directly. For questions about fit, email tanya@aldertreetherapy.com.",
  },
};


export const approachPage: PageContent = {
  slug: "/approach",
  seoTitle: "My Approach to Therapy: CBT, ACT and Executive Functioning",
  seoDescription:
    "A collaborative, strengths-based, practical approach to therapy that combines CBT, ACT, Motivational Interviewing, and Solution-Focused Therapy with executive functioning strategies.",
  breadcrumb: "Approach",
  hero: {
    eyebrow: "My approach",
    heading: "Insight and strategy, in the same room.",
    lead:
      "Some therapy helps you understand yourself. Some gives you tools. Most people need both. My approach is collaborative, strengths-based, and practical: we make sense of what’s happening, then build something you can use between sessions.",
  },
  sections: [
    {
      kind: "pairs",
      eyebrow: "What I draw on",
      heading: "Evidence-based methods, tailored to you.",
      intro: "Rather than following one model, I combine several, depending on your needs, preferences, and goals.",
      items: [
        {
          title: "Cognitive Behavioral Therapy (CBT)",
          body: "Noticing the thoughts and habits that keep you stuck, and testing out more helpful ones.",
        },
        {
          title: "Acceptance and Commitment Therapy (ACT)",
          body: "Making room for difficult thoughts and feelings while still acting on what matters to you.",
        },
        {
          title: "Motivational Interviewing (MI)",
          body: "Working through mixed feelings about change, so the next step feels like your choice.",
        },
        {
          title: "Solution-Focused Brief Therapy (SFBT)",
          body: "Starting from what already works in your life and building on it.",
        },
        {
          title: "Executive functioning strategies",
          body: "Planning, prioritizing, starting, and following through, with systems built around how your brain works.",
        },
      ],
    },
    {
      kind: "prose",
      eyebrow: "What sessions look like",
      heading: "Collaborative, individualized, and practical.",
      paragraphs: [
        "We’ll work together to understand what’s contributing to your current challenges while building skills you can apply in everyday life. Depending on your goals, sessions may include exploring patterns, learning coping strategies, strengthening executive functioning skills, or developing new ways of responding to difficult thoughts and emotions.",
        "Many clients appreciate having space to process emotions while also leaving with concrete tools they can use between appointments.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "Anxiety and depression",
      heading: "Often part of the picture.",
      paragraphs: [
        "Anxiety is more than worry. It can look like perfectionism, procrastination, indecision, trouble relaxing, physical tension, irritability, or racing thoughts. For people with ADHD, it can quietly become a coping strategy built on last-minute pressure, overpreparing, and overworking. The goal isn’t to eliminate anxiety. It’s to keep it from running your life.",
        "Depression is more than sadness. It can feel like numbness, emptiness, exhaustion, self-criticism, or losing joy in things that used to matter. We look at the stressors and patterns behind what you’re feeling, move at a pace that feels manageable, and focus on small, practical steps.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "Strengths-based",
      heading: "A diagnosis is a tool, not a limitation.",
      paragraphs: [
        "We work collaboratively to explore whether a diagnosis is helpful for you, so that it serves as a source of insight rather than a label. The focus stays on self-understanding, skill-building, and change that lasts.",
      ],
    },
    {
      kind: "faq",
      eyebrow: "Questions",
      heading: "Questions about how we’ll work.",
      ids: ["what-to-expect", "different", "anxiety-depression", "frequency", "fit"],
    },
  ],
  closing: {
    heading: "See whether it’s a fit.",
    body: "A free consultation is the easiest way to get a feel for how I work and ask any questions you have.",
  },
  related: [
    { label: "Therapy for working parents", href: "/working-parents" },
    { label: "Therapy for adults with ADHD", href: "/adhd-therapy" },
  ],
};

export const aboutPage: PageContent = {
  slug: "/about",
  seoTitle: "About Tanya Fridland, LCSW",
  seoDescription:
    "Tanya Fridland, LCSW, is a New York therapist and former BigLaw attorney with a JD from Harvard Law School and an MSW from Columbia, working with working parents and adults with ADHD.",
  breadcrumb: "About",
  hero: {
    eyebrow: "About Tanya",
    heading: "I know the pace, because I’ve kept it.",
    lead:
      "I help adults who feel overwhelmed by the competing demands of work and family, ADHD, anxiety, burnout, or depression. My work is strengths-based and individualized, and it supports both emotional insight and practical change.",
    portraitVariant: "seated",
  },
  sections: [
    { kind: "video", eyebrow: "Say hello", heading: "A quick introduction." },
    {
      kind: "prose",
      eyebrow: "Who I work with",
      heading: "Bright, capable people carrying a lot.",
      paragraphs: [
        "Many of my clients are accomplished professionals who have spent years wondering why everyday tasks seem so much harder for them than for everyone else. Many are parents trying to meet the demands of a serious career and a family at the same time.",
        "I have a particular interest in helping adults with ADHD understand how executive functioning challenges affect their work, relationships, parenting, and self-esteem.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "Before I was a therapist",
      heading: "From BigLaw to clinical social work.",
      paragraphs: [
        "Before becoming a therapist, I practiced as a BigLaw attorney in New York City. That experience gave me firsthand insight into the pressures of high-achieving environments.",
        "My own experiences with ADHD, burnout, and becoming a parent deepened my understanding of how internal and external pressures can affect well-being. Together, they shaped my commitment to practical, compassionate, evidence-based care.",
      ],
    },
    { kind: "credentials", eyebrow: "Training and license", heading: "Education and credentials." },
    {
      kind: "prose",
      eyebrow: "Cultural humility",
      heading: "Your whole self is welcome here.",
      paragraphs: [
        "I strive to practice with cultural humility, and I recognize that each person’s identity and lived experiences shape how they move through the world. As a white, cisgender, heterosexual Jewish woman and immigrant, I also understand that my own experiences influence the therapeutic relationship.",
        "I’m committed to creating a space where you feel respected, understood, and empowered to bring your whole self into therapy.",
      ],
    },
    {
      kind: "photos",
      eyebrow: "My officemates",
      heading: "The rest of the team.",
      caption:
        "One supervises from the top of the cat tree. The other handles building security. Neither has ever shown up on time to a meeting, but they make excellent company on long days.",
      images: [
        {
          src: "/images/officemate-tabby.jpg",
          alt: "Tanya’s tabby cat lounging on a cat tree, gazing upward",
          width: 800,
          height: 1000,
        },
        {
          src: "/images/officemate-black-cat.jpg",
          alt: "Tanya’s black cat with yellow eyes peering through stair railings",
          width: 800,
          height: 1000,
        },
      ],
    },
    {
      kind: "prose",
      eyebrow: "What I hope for my clients",
      heading: "Grounded, capable, and living by your values.",
      paragraphs: [
        "My style emphasizes self-understanding, skill-building, and meaningful, sustainable change. My goal is to help you feel more grounded and capable, so you can lead a life that aligns with what matters to you.",
      ],
    },
  ],
  closing: {
    heading: "Let’s talk.",
    body: "A free consultation is a chance to ask questions and see whether we’re a good fit.",
  },
  related: [{ label: "My approach", href: "/approach" }],
};

export const insurancePage: PageContent = {
  slug: "/insurance",
  seoTitle: "Insurance and Out-of-Network Benefits",
  seoDescription:
    "Alder Tree Therapy is an out-of-network provider. Tanya Fridland, LCSW, provides superbills for insurance reimbursement and helps clients verify their out-of-network benefits.",
  breadcrumb: "Insurance",
  hero: {
    eyebrow: "Insurance",
    heading: "Using your out-of-network benefits.",
    lead:
      "I’m an out-of-network provider and don’t bill insurance directly. Many clients use their out-of-network benefits to offset the cost of therapy, and I’ll help you understand yours before we begin.",
  },
  sections: [
    { kind: "outOfNetwork" },
    {
      kind: "prose",
      eyebrow: "Before your first session",
      heading: "We’ll sort it out together.",
      paragraphs: [
        "Insurance paperwork is one more thing on a long list. During your free consultation, we can talk through your plan, and I can help you verify your out-of-network benefits so you know what to expect before you start.",
      ],
    },
    {
      kind: "faq",
      eyebrow: "Questions",
      heading: "Questions about insurance.",
      ids: ["insurance", "employer", "fit"],
    },
  ],
  closing: {
    heading: "Have questions about your plan?",
    body: "Bring them to your free consultation, and we’ll go through them together.",
  },
};

export const faqPage: PageContent = {
  slug: "/faq",
  seoTitle: "Frequently Asked Questions",
  seoDescription:
    "Answers to common questions about therapy with Tanya Fridland, LCSW: ADHD, working parents, anxiety and depression, scheduling, privacy, and out-of-network insurance.",
  breadcrumb: "FAQ",
  hero: {
    eyebrow: "Frequently asked questions",
    heading: "Answers before you book.",
    lead: "If your question isn’t here, you’re welcome to ask during a free consultation.",
    portrait: false,
  },
  sections: [
    {
      kind: "faq",
      eyebrow: "Getting started",
      heading: "Starting therapy.",
      ids: ["what-to-expect", "fit", "frequency", "scheduling", "virtual"],
    },
    {
      kind: "faq",
      eyebrow: "What I work with",
      heading: "Focus areas and approach.",
      ids: ["only-adhd", "anxiety-depression", "different", "modalities"],
    },
    {
      kind: "faq",
      eyebrow: "ADHD",
      heading: "Questions about ADHD.",
      ids: ["adhd-diagnosis", "organization-only", "coach-or-therapist", "medication"],
    },
    {
      kind: "faq",
      eyebrow: "Insurance and privacy",
      heading: "Insurance and privacy.",
      ids: ["insurance", "employer"],
    },
  ],
  closing: {
    heading: "Still have questions?",
    body: "A free consultation is a good place to ask them.",
  },
};

export const bookPage: PageContent = {
  slug: "/book",
  seoTitle: "Book a Free Consultation",
  seoDescription:
    "Book a free consultation with Tanya Fridland, LCSW. Telehealth therapy for adults anywhere in New York State.",
  breadcrumb: "Book",
  hero: {
    eyebrow: "Getting started",
    heading: "Book a free consultation.",
    lead:
      "A free consultation is a chance to talk about what’s bringing you in, ask your questions, and see whether we’re a good fit. Choose a time that works for you on my online scheduling page.",
  },
  sections: [
    {
      kind: "list",
      eyebrow: "What we’ll cover",
      heading: "A short, low-pressure conversation.",
      items: [
        "What’s been hard lately, and what you’d like to feel different",
        "How I work, and whether my approach fits what you’re looking for",
        "Your out-of-network benefits, if you’d like help checking them",
        "Any questions you have about getting started",
      ],
      columns: 1,
    },
    {
      kind: "contact",
      eyebrow: "Prefer email?",
      heading: "You can also write to me.",
      intro: "If you have a question before booking, you’re welcome to email me.",
      note: "Email isn’t a secure way to share health information, so please keep details brief. We can talk about them during the consultation.",
    },
    {
      kind: "prose",
      eyebrow: "In an emergency",
      heading: "If you need help right now.",
      paragraphs: [
        "This practice can’t respond to emergencies. If you are in crisis or thinking about harming yourself, call or text 988 to reach the 988 Suicide & Crisis Lifeline, or call 911.",
      ],
    },
  ],
};

export const accessibilityPage: PageContent = {
  slug: "/accessibility",
  seoTitle: "Accessibility",
  seoDescription: "Accessibility statement for the Alder Tree Therapy website.",
  breadcrumb: "Accessibility",
  lastUpdated: "October 20, 2026",
  hero: {
    eyebrow: "Accessibility",
    heading: "Accessibility statement.",
    lead:
      "I want everyone to be able to use this website, including people who use screen readers, keyboard navigation, magnification, or other assistive technology.",
    portrait: false,
    booking: false,
  },
  sections: [
    {
      kind: "list",
      eyebrow: "How the site is built",
      heading: "Designed with accessibility in mind.",
      intro: "This website is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. It includes:",
      items: [
        "A “skip to main content” link and full keyboard navigation",
        "Text alternatives for meaningful images",
        "Color contrast that meets WCAG AA standards",
        "Clear headings and page structure for screen readers",
        "Pages and menus that work without JavaScript",
        "Reduced animation for visitors who turn on that setting",
      ],
      columns: 1,
    },
    {
      kind: "prose",
      eyebrow: "Third-party services",
      heading: "Online scheduling.",
      paragraphs: [
        "Consultations are booked through Jane, an outside scheduling service. Its accessibility is managed by Jane. If you have trouble booking, please email me and I’ll help you schedule another way.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "Feedback",
      heading: "Tell me about a barrier.",
      paragraphs: [
        "If something on this site is hard to use, please email tanya@aldertreetherapy.com and describe what happened. I’ll work to fix it.",
      ],
    },
  ],
};

/** Every page built from this file, in the order they appear in the sitemap. */
export const builtPages = [
  parentsPage,
  adhdPage,
  approachPage,
  aboutPage,
  insurancePage,
  faqPage,
  bookPage,
  cliniciansPage,
  accessibilityPage,
];
