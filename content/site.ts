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
    credentials: "LCSW",
    title: "Licensed Clinical Social Worker",
    licenseState: "New York",
    headshot: {
      src: "/images/tanya-fridland-lcsw.jpg",
      alt: "Tanya Fridland, LCSW, smiling, in a navy sweater beside a sunlit window",
      width: 1000,
      height: 920,
    },
    education: [
      {
        degree: "Master of Social Work (MSW)",
        school: "Columbia University School of Social Work",
        detail: "Advanced Clinical Social Work Practice",
      },
      { degree: "Juris Doctor (JD)", school: "Harvard Law School", detail: "" },
    ],
  },
  url: "https://www.aldertreetherapy.com",
  bookingUrl: "https://aldertreetherapy.janeapp.com",
  bookingLabel: "Book a free consultation",
  email: "tanya@aldertreetherapy.com",
  serviceArea: "New York State",
  scheduling: "Flexible rescheduling on short notice.",
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
    "I’m an out-of-network provider and don’t bill insurance directly. Many plans, especially PPOs, reimburse part of the cost of out-of-network therapy. I’ll help you find out what yours covers before we begin.",
  steps: [
    {
      title: "We verify your benefits",
      body: "Before your first session, I can help you check your out-of-network mental health benefits, so you know what to expect.",
    },
    {
      title: "I provide a superbill",
      body: "A superbill is a detailed receipt your insurer needs to process a claim. I provide one for your sessions.",
    },
    {
      title: "You get reimbursed",
      body: "I use Reimbursify, a service that makes submitting superbills to your insurance company simple, so reimbursement comes back to you with less paperwork.",
    },
  ],
  note: "Reimbursement depends on your plan and isn’t guaranteed.",
} as const;

export const home = {
  hero: {
    eyebrow: "Telehealth therapy for adults across New York State",
    heading: "You’re capable. It just shouldn’t feel this hard.",
    lead:
      "I’m Tanya Fridland, a licensed clinical social worker and former BigLaw attorney. I work with working parents who feel they’re falling short at work and at home, and professionals with ADHD whose jobs ask more than their systems can carry.",
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
    eyebrow: "Sound familiar?",
    heading: "From the outside, everything looks fine.",
    items: [
      "You give everything at work and come home with nothing left for the people you love.",
      "You feel like you’re falling short at work and at home at the same time.",
      "You know exactly what needs to get done, and still can’t get yourself to do it consistently.",
      "The to-do list never shrinks, and the important things keep slipping to tomorrow.",
      "You’ve spent years wondering why ordinary things seem harder for you than for everyone else.",
    ],
    closing:
      "None of this means you’re failing. Often it means the demands on you have outgrown the strategies that used to work.",
  },

  paths: {
    eyebrow: "Who I work with",
    heading: "Two kinds of pressure I know well.",
    items: [
      {
        label: "For working parents",
        title: "A demanding career and a family that needs you",
        body:
          "You care deeply about your work and your family, and you feel like you’re falling short at both. We’ll look at the expectations you carry and build a way of working and parenting that fits your life.",
        href: "/working-parents",
        cta: "Therapy for working parents",
      },
      {
        label: "For professionals with ADHD",
        title: "ADHD, or wondering if it’s ADHD",
        body:
          "You’re good at your job, but keeping up takes far more effort than it seems to for everyone else. Whether you were diagnosed as a child, as an adult, or not at all, we’ll work on the systems and the self-doubt.",
        href: "/adhd-therapy",
        cta: "Therapy for ADHD",
      },
    ],
    also:
      "I also work with anxiety, depression, burnout, chronic pain, social anxiety, relationship difficulties, and life transitions, which often show up alongside the pressures above.",
    scope: "I offer individual therapy for adults.",
  },

  approach: {
    eyebrow: "My approach",
    heading: "Insight and strategy, in the same room.",
    lead:
      "Some therapy helps you understand yourself. Some gives you tools. Most people need both. Our work is collaborative and practical: we make sense of what’s happening, then build something you can use between sessions.",
    methods: [
      {
        name: "Cognitive Behavioral Therapy",
        abbr: "CBT",
        plain: "Noticing the thoughts and habits that keep you stuck, and trying out better ones.",
      },
      {
        name: "Acceptance and Commitment Therapy",
        abbr: "ACT",
        plain: "Making room for hard feelings while still acting on what matters to you.",
      },
      {
        name: "Motivational Interviewing",
        abbr: "MI",
        plain: "Working through mixed feelings about change, so the next step feels like your choice.",
      },
      {
        name: "Solution-Focused Therapy",
        abbr: "SFBT",
        plain: "Starting from what already works in your life and building on it.",
      },
      {
        name: "Executive functioning strategies",
        abbr: "EF",
        plain:
          "Planning, prioritizing, starting, and following through, with systems built around your brain instead of generic productivity advice.",
      },
    ],
    link: { label: "More about my approach", href: "/approach" },
  },

  about: {
    eyebrow: "About Tanya",
    heading: "I know the pace, because I’ve kept it.",
    paragraphs: [
      "Before becoming a therapist, I practiced as a BigLaw attorney in New York City. I know the expectations of high-achieving environments, and what it can cost to keep up with them.",
      "My own experiences with ADHD, burnout, and becoming a parent deepened my understanding of how internal and external pressures affect well-being. They shaped how I work today: practical, compassionate, and grounded in evidence.",
    ],
    credentialsHeading: "Training and license",
    credential: "Licensed Clinical Social Worker (LCSW), New York State",
    link: { label: "Read my story", href: "/about" },
  },

  process: {
    eyebrow: "Getting started",
    heading: "How we begin.",
    steps: [
      {
        title: "Book a free consultation",
        body:
          "Choose a time on my online scheduling page. We’ll talk about what’s bringing you in and whether we’re a good fit, and I can help you check your out-of-network benefits.",
      },
      {
        title: "Start meeting weekly",
        body:
          "Most clients begin with weekly video sessions, from anywhere in New York State.",
      },
      {
        title: "Adjust as you go",
        body:
          "Plans change. I’m happy to reschedule on short notice, and we revisit your goals and how often we meet as things shift.",
      },
    ],
  },

  details: {
    eyebrow: "Practical details",
    heading: "What to know before you book.",
    items: [
      { term: "Format", detail: "Individual psychotherapy for adults, by video." },
      { term: "Where", detail: "Clients located anywhere in New York State." },
      { term: "Scheduling", detail: "Flexible rescheduling, even on short notice." },
      {
        term: "Insurance",
        detail:
          "Out-of-network. I provide superbills for reimbursement and can help you verify your out-of-network benefits.",
      },
    ],
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
    q: "Can therapy fit around a demanding work schedule?",
    a: "Yes. Sessions are by video, so there’s no commute, and I’m happy to reschedule on short notice when work or family plans change.",
  },
  {
    id: "virtual",
    q: "Do you offer virtual therapy?",
    a: "Yes. I provide telehealth therapy for adults located anywhere in New York State.",
  },
  {
    id: "insurance",
    q: "Do you accept insurance?",
    a: "I’m an out-of-network provider and don’t bill insurance directly. Many clients use out-of-network benefits to help offset the cost of therapy. I can help you verify your out-of-network benefits, and I provide superbills for reimbursement. I also use Reimbursify, a service that helps submit superbills to your insurance company to streamline reimbursement.",
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
  extraLinks: [
    { label: "Book a consultation", href: "/book" },
    { label: "For clinicians", href: "/for-clinicians" },
  ],
  legalLinks: [
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;
