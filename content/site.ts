/**
 * SITE CONTENT
 * ------------------------------------------------------------------
 * The homepage, navigation, FAQs and practice details live in this file.
 * Text for every other page (Working Parents, ADHD, Approach, About, Insurance, FAQ, Book, etc.) is in content/pages.ts.
 * To change wording, edit the text between the quotation marks and save.
 */

export const site = {
  practiceName: "Alder Tree Therapy",
  legalName: "Alder Tree Therapy LCSW PLLC",
  clinician: {
    name: "Tanya Fridland",
    pronouns: "she/her",
    credentials: "LCSW",
    title: "Licensed Clinical Social Worker",
    licenseState: "New York",
    headshot: {
      src: "/images/tanya-fridland-lcsw-portrait.jpg",
      alt: "Tanya Fridland, LCSW, smiling, in a navy sweater beside a sunlit window",
      width: 1000,
      height: 920,
    },
    /** Second headshot, used at the top of the About page. */
    seatedPhoto: {
      src: "/images/tanya-fridland-lcsw-seated.jpg",
      alt: "Tanya Fridland, LCSW, seated on a sofa by a sunlit window, smiling",
      width: 400,
      height: 400,
    },
    /** Short introduction video. */
    video: {
      src: "/videos/tanya-fridland-intro.mp4",
      poster: "/images/tanya-fridland-intro-poster.jpg",
      width: 640,
      height: 360,
      title: "Meet Tanya Fridland, LCSW",
      uploadDate: "2026-11-04",
      duration: "PT1M14S",
    },
    education: [
      {
        degree: "Master of Social Work (MSW)",
        school: "Columbia University School of Social Work",
        detail: "Advanced Clinical Social Work Practice",
      },
      { degree: "Juris Doctor (JD)", school: "Harvard Law School", detail: "" },
      { degree: "Bachelor of Arts (BA)", school: "Yale University", detail: "" },
    ],
  },
  url: "https://www.aldertreetherapy.com",
  bookingUrl: "https://aldertreetherapy.janeapp.com",
  bookingLabel: "Book a free consultation",
  email: "tanya@aldertreetherapy.com",
  serviceArea: "New York State",
  /**
   * Tanya's profiles on other sites. Search engines and AI tools use these to
   * confirm that all of these listings describe the same person and practice.
   * Add a new profile link on its own line, in quotes, followed by a comma.
   */
  profiles: [
    "https://www.therapyden.com/therapist/tanya-fridland-scarsdale-ny",
    "https://www.carenyc.org/10024/tanya-fridland-new-york-lcsw",
  ],
  scheduling: "Flexible rescheduling on short notice.",
  /**
   * What AI assistants are told about availability. Update this line whenever it changes.
   * Live openings are always on the Jane booking page.
   */
  availability: {
    acceptingNewClients: true,
    summary: "Accepting new clients. Free consultations can be booked online, and current openings are shown live on the booking page.",
  },
  description:
    "Telehealth therapy across New York State for working parents in demanding careers and professionals with ADHD, including anxiety, depression, and burnout. Tanya Fridland, LCSW, is a former BigLaw attorney with a JD from Harvard Law School and an MSW from Columbia.",
} as const;

export const nav = [
  { label: "Working Parents", href: "/working-parents" },
  { label: "ADHD", href: "/adhd-therapy" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Insurance", href: "/insurance" },
  { label: "FAQ", href: "/faq" },
] as const;

/** Reused wherever out-of-network benefits are explained. */
export const outOfNetwork = {
  eyebrow: "Using your insurance",
  heading: "How out-of-network benefits work.",
  lead:
    "I’m an out-of-network provider. Many insurance plans reimburse part of the cost of therapy. I’ll help verify your coverage before we begin.",
  steps: [
    {
      title: "We verify your benefits",
      body: "Before our first session, I can verify your out-of-network benefits.",
    },
    {
      title: "I provide a superbill",
      body: "Each month, I will send you a superbill for the sessions we’ve had that month. You can submit this to your insurance for reimbursement directly or use Reimbursify, a service I offer to help simplify and expedite this process.",
    },
    {
      title: "You get reimbursed",
      body: "Your insurance reimburses you according to the superbills submitted.",
    },
  ],
  note: "Reimbursement depends on your plan and isn’t guaranteed.",
} as const;

export const home = {
  hero: {
    eyebrow: "Telehealth therapy for adults across New York State",
    heading: "You know you’re capable of more. Yet, what’s on your plate already seems like too much.",
    lead:
      "I’m Tanya Fridland, a therapist and former BigLaw attorney. I work with high-achieving professionals who are overwhelmed by their to-do list, causing them anxiety and guilt and spiraling into irritation and anger with loved ones. My clients don’t only need empathy; they need strategies for managing their emotions and systems that work better for their brains, especially for those with ADHD.",
    secondaryCta: { label: "See how I work", href: "#approach" },
    facts: [
      "By video, anywhere in New York State",
      "Flexible rescheduling",
      "Out-of-network, with superbills provided",
    ],
    figureCaption: "Alnus glutinosa, the common alder",
    credentialLine: "Former BigLaw attorney · JD, Harvard Law School · MSW, Columbia",
  },

  recognition: {
    eyebrow: "Sound Familiar?",
    heading: "From the outside, it looks like you’re managing.",
    items: [
      "You complete work assignments well enough, but you’re exhausted at the end of the day.",
      "It’s a struggle to keep your head above water at work.",
      "You’re irritable and angry at home.",
      "Your partner, your children, or your loved ones sometimes get the worst of you.",
      "You know exactly what you need to do, but you just can’t get yourself to do it consistently.",
      "The to-do list feels like a game of whack-a-mole that you’re constantly losing.",
      "You wonder if everyone else struggles as hard as you are struggling.",
    ],
    closing:
      "It doesn’t need to be this way. You’re not failing; your systems and strategies are failing you.",
  },

  paths: {
    eyebrow: "Who I work with",
    heading: "I know what it’s like to appear high-functioning and struggle on the inside.",
    items: [
      {
        label: "For working professionals",
        title: "Your career demands 100%, and your loved ones do, too",
        body:
          "There are never enough hours in the day and there is never enough patience left for both your work and your family. It seems you’re always letting someone down. We’ll work on a new approach to help you feel fulfilled and at peace when “balance” feels unachievable.",
        href: "/working-parents",
        cta: "Therapy for working professionals",
      },
      {
        label: "For clients with ADHD",
        title: "ADHD and the ADHD-curious",
        body:
          "You work twice as hard (in occasional sprints) to achieve half of your goals. You’re either at 200% or 0%. The guilt and anxiety come in cycles. What if we reimagined The Tortoise and The Hare? Slow and Steady doesn’t have to win the race. With new systems and strategies in place, The Hare can have its success story, too.",
        href: "/adhd-therapy",
        cta: "Therapy for ADHD",
      },
    ],
    also:
      "Many adults have more than one concern bringing them to therapy. I also work with clients who struggle with anxiety, depression, burnout, chronic pain or health conditions, social anxiety, relationship difficulties, and life transitions.",
    scope: "I offer individual therapy for adults.",
  },

  approach: {
    eyebrow: "My approach",
    heading: "I offer solutions alongside empathy.",
    lead:
      "Many of my clients have found that talk therapy alone isn’t enough. Finding validation and empathy in another human is invaluable. But, it’s only half the battle. We will also discuss coping strategies, emotional regulation and distress tolerance skills, executive functioning tools, and other creative solutions.",
    methodsIntro: "Modalities I draw from include:",
    methods: [
      {
        name: "Cognitive Behavioral Therapy",
        abbr: "CBT",
        plain:
          "You logically know your emotions don’t match reality–you catastrophize, your thinking is all-or-nothing, you overgeneralize–but you can’t seem to stop. We’ll work to change your thoughts, actions, and feelings.",
      },
      {
        name: "Acceptance and Commitment Therapy",
        abbr: "ACT",
        plain:
          "Sometimes your thinking isn’t distorted. Sometimes, the reality just sucks. We’ll work to help you deal with tough times.",
      },
      {
        name: "Motivational Interviewing",
        abbr: "MI",
        plain:
          "You know change is needed. Whether you are reluctant to change, don’t know where to start, or think you need a push to get going, therapy starts from wherever you are.",
      },
      {
        name: "Solution-Focused Brief Therapy",
        abbr: "SFBT",
        plain:
          "Especially if you have ADHD, sometimes you need some short-term wins to help propel you to your long-term goals. You can’t learn to swim while you’re actively drowning. We’ll discuss the rescue first and then we’ll build on that momentum.",
      },
      {
        name: "Executive Functioning Strategies for ADHD",
        abbr: "EF",
        plain:
          "You need better strategies and systems to help you prioritize tasks, start tasks, keep focus, reduce distractions, stay organized, manage time, cope with impaired memory (working memory, short-term, and long-term!), resist impulses, and deal with emotional dysregulation.",
      },
    ],
    link: { label: "More about my approach", href: "/approach" },
  },

  about: {
    eyebrow: "About Tanya",
    heading: "I believe therapy can and should change your life.",
    paragraphs: [
      "Before becoming a therapist, I practiced law at a large firm in New York City. I know the pressures of being “on” 24-7 at work and trying to maintain a home life.",
      "My own experiences with motherhood and ADHD also affect how I show up for my clients. I know what it’s like to juggle important responsibilities and struggle to maintain emotional composure.",
    ],
    credentialsHeading: "Training and license",
    credential: "Licensed Clinical Social Worker (LCSW), New York State",
    link: { label: "Read my story", href: "/about" },
  },

  process: {
    eyebrow: "Getting started",
    heading: "How to begin.",
    steps: [
      {
        title: "Book a free consultation",
        bookingButton: true,
        body:
          "Research shows that whether we’re a good fit is the most important factor for progress in therapy. Schedule a free consultation with me to tell me what brings you to therapy, ask questions about my approach, and get help verifying your out-of-network benefits.",
      },
      {
        title: "Start meeting weekly",
        bookingButton: false,
        body:
          "Weekly sessions help us build rapport, build a foundation, and address immediate and long-term goals.",
      },
      {
        title: "Adjust as you go",
        bookingButton: false,
        body:
          "Plans change. I offer flexible rescheduling on short notice. This in particular has been beneficial for working professionals and parents of young children.",
      },
    ],
  },

  details: {
    eyebrow: "Practical details",
    heading: "The where, when, and how.",
    items: [
      { term: "Format", detail: "Individual therapy for adults, by video." },
      {
        term: "Where",
        detail:
          "For clients located anywhere in New York State: all 62 counties, including New York City, Long Island, the Hudson Valley, the Capital Region, the North Country, Central New York, the Southern Tier, the Finger Lakes, and Western New York.",
      },
      { term: "Scheduling", detail: "Flexible rescheduling, even on short notice." },
      {
        term: "Insurance",
        detail:
          "I’m an out-of-network provider. I provide superbills and have a service called Reimbursify, which helps you with submitting your out-of-network claims and streamlining reimbursement.",
      },
    ],
    link: { label: "See all areas served", href: "/areas-served" },
  },

  faq: {
    eyebrow: "Questions",
    heading: "Common questions.",
    // These IDs refer to entries in `faqs` below.
    ids: ["scheduling", "employer", "adhd-diagnosis", "coach-or-therapist"],
    link: { label: "See all questions", href: "/faq" },
  },

  closing: {
    heading: "Ready to talk it through?",
    body: "A free consultation is the simplest way to see whether working together makes sense.",
  },
} as const;

/** Full FAQ list. Pages pick the ones they show by ID. */
export const faqs = [
  {
    id: "adhd-diagnosis",
    q: "Do I need an ADHD diagnosis before starting therapy?",
    a: "No. Many of my clients come to therapy wondering whether ADHD might explain some of the challenges they’ve experienced throughout their lives. Together, we’ll explore your symptoms, history, and goals to determine whether pursuing a formal evaluation or diagnosis would be helpful. A diagnosis can provide valuable insight, but it’s only one tool. It doesn’t define who you are.",
  },
  {
    id: "coach-or-therapist",
    q: "Should I see an ADHD coach or a therapist?",
    a: "Many people with ADHD assume they need one person for the practical side and another for the emotional side. In my experience, the two can’t be separated. The guilt over what didn’t get done and the anxiety about what’s coming up are tangled up with the executive functioning challenges themselves. My approach combines teaching executive functioning skills and strategies with therapy, so we work on both together, with one person who sees the whole picture.",
  },
  {
    id: "medication",
    q: "Do you prescribe ADHD medication?",
    a: "No. I’m a therapist, not a prescriber. If you take ADHD medication or are considering it, you’d work with a psychiatrist or other prescriber for that. If you’re comfortable with it, and you sign a HIPAA release allowing me to speak with your prescriber, I’ll communicate with them so we can coordinate your care and better address your needs.",
  },
  {
    id: "employer",
    q: "Will my employer know I’m in therapy?",
    a: "My practice is independent of any employer or employee assistance program, and I don’t share information about you with your workplace without your written permission.",
  },
  {
    id: "anxiety-depression",
    q: "Do you work with anxiety and depression?",
    a: "Yes. Anxiety and depression often show up alongside ADHD, burnout, and the pressure of balancing work and family, and I work with both. Anxiety can look like perfectionism, procrastination, indecision, or a mind that won’t switch off. Depression can feel like numbness, exhaustion, self-criticism, or losing interest in things that used to matter. Using ACT, CBT, and solution-focused therapy, we look at the stressors and patterns behind what you’re feeling and take small, practical steps at a pace that feels manageable.",
  },
  {
    id: "what-to-expect",
    q: "What can I expect in therapy?",
    a: "Therapy is collaborative, individualized, and practical. We’ll work together to better understand what’s contributing to your current challenges while building skills and strategies you can apply in everyday life. Depending on your goals, sessions may include exploring patterns, learning coping strategies, strengthening executive functioning skills, or developing new ways of responding to difficult thoughts and emotions.",
  },
  {
    id: "different",
    q: "How is your approach different?",
    a: "I combine evidence-based psychotherapy with practical executive functioning support. Many clients appreciate having space to process emotions while also leaving sessions with concrete tools they can use between appointments. My goal is to help you better understand yourself while making meaningful changes in your daily life.",
  },
  {
    id: "only-adhd",
    q: "Do you only work with people who have ADHD?",
    a: "No. My main areas of focus are working parents and adults with ADHD, and I also work with adults experiencing anxiety, depression, burnout, life transitions, relationship concerns, and chronic pain. Many of these concerns overlap, and therapy is tailored to your experiences and goals.",
  },
  {
    id: "organization-only",
    q: "I have ADHD. Will therapy just be about organization and time management?",
    a: "No. Executive functioning strategies can be an important part of our work, but ADHD affects far more than productivity. Together, we may explore emotional regulation, self-esteem, perfectionism, relationships, work stress, burnout, and the ways ADHD has shaped how you see yourself. Therapy addresses both the practical and emotional sides of living with ADHD.",
  },
  {
    id: "modalities",
    q: "What types of therapy do you use?",
    a: "My work integrates Acceptance and Commitment Therapy (ACT), Cognitive Behavioral Therapy (CBT), Motivational Interviewing (MI), Solution-Focused Brief Therapy (SFBT), and executive functioning skill-building. Rather than following a one-size-fits-all approach, I tailor therapy to your needs, preferences, and goals.",
  },
  {
    id: "frequency",
    q: "How often will we meet?",
    a: "Most clients begin with weekly sessions. As you make progress and your needs change, we can discuss adjusting the frequency of sessions together.",
  },
  {
    id: "scheduling",
    q: "Can therapy fit around my work schedule?",
    a: "Yes, most of my clients fit therapy during their lunch hours or remote work days. I understand work schedules can be demanding and change on short notice, so I offer flexible rescheduling.",
  },
  {
    id: "virtual",
    q: "Do you offer virtual therapy?",
    a: "Yes, we will meet virtually by video for each session.",
  },
  {
    id: "insurance",
    q: "Do you accept insurance?",
    a: "I’m an out-of-network provider, and I can provide you with superbills for insurance reimbursement. I also offer Reimbursify, a service that assists with submitting my superbills to your insurance for easy reimbursement. If you’re curious, I can help you verify your out-of-network benefits.",
  },
  {
    id: "fit",
    q: "How do I know if we’re a good fit?",
    a: "Finding the right therapist is an important decision. If you’re looking for a collaborative, practical approach that combines evidence-based therapy with real-world strategies, I’d be happy to schedule a consultation to answer your questions and help you decide whether we’re a good fit.",
  },
] as const;

export type FaqId = (typeof faqs)[number]["id"];

export const footer = {
  crisis:
    "If you are in crisis or thinking about harming yourself, call or text 988 to reach the 988 Suicide & Crisis Lifeline, or call 911. This practice can’t respond to emergencies.",
  emailNote: "Please don’t include health details by email. We can discuss them in session.",
  affirming: "LGBTQIA+ affirming. All identities are welcome here.",
  extraLinks: [
    { label: "Book a consultation", href: "/book" },
    { label: "Areas served", href: "/areas-served" },
    { label: "For clinicians", href: "/for-clinicians" },
  ],
  legalLinks: [
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;
