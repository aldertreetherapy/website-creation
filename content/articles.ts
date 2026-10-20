/**
 * ARTICLES
 * Each article is a list of sections. A section can have a heading,
 * paragraphs, and an optional bulleted list. Edit the text between quotes.
 * Newest or most important articles go first.
 */

export type ArticleSection = { heading?: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Working parents" | "ADHD" | "Insurance";
  published: string; // YYYY-MM-DD
  readingMinutes: number;
  intro: string;
  sections: ArticleSection[];
  sources?: { label: string; url: string }[];
};

export const articles: Article[] = [
  {
    slug: "failing-at-work-and-home",
    title: "“I Feel Like I’m Failing at Work and at Home”: Why High-Achieving Parents Feel Stretched Thin",
    description:
      "Why capable, successful parents in demanding careers so often feel they’re falling short everywhere, and what actually helps.",
    category: "Working parents",
    published: "2026-10-20",
    readingMinutes: 6,
    intro:
      "It’s one of the most common things I hear from parents in demanding careers: “I feel like I’m failing at work, and I’m failing at home.” It usually comes from people who, by any outside measure, are doing remarkably well. That gap between how things look and how they feel is worth understanding.",
    sections: [
      {
        heading: "Two full-time jobs, one set of hours",
        paragraphs: [
          "Many professional careers were built around an assumption that someone else would handle home. Most working parents today don’t have that someone. So you’re trying to meet the expectations of a demanding job and the needs of a family with the same 24 hours, and both sides were designed as if they had you to themselves.",
          "You leave work early for pickup and wonder whether you’re still seen as committed. You stay late for a deadline and miss bedtime. You’re thinking about the client call during dinner and about your child’s doctor’s appointment during the client call. Feeling like you’re never fully present anywhere isn’t a personal failing. It’s a predictable result of the setup.",
        ],
      },
      {
        heading: "You’re not imagining it",
        paragraphs: [
          "A 2022 report from The Ohio State University found that 66% of the working parents it surveyed met the criteria for burnout, and burnout was linked with anxiety and depression. The survey was done during the pandemic, but the pressures it describes haven’t gone away for most of the parents I see.",
          "High achievers are often especially hard on themselves here. The same standards that helped you succeed at school and work, being thorough, prepared, and dependable, can turn into impossible standards when they’re applied to every corner of life at once.",
        ],
      },
      {
        heading: "Signs the pressure is costing you",
        list: [
          "You feel irritable or short with the people you love, then guilty about it",
          "Rest doesn’t feel restful, because there’s always something you “should” be doing",
          "You’ve stopped doing things just for yourself",
          "Small tasks feel bigger than they used to, and decisions pile up",
          "You’re running on adrenaline during the week and crashing on weekends",
        ],
      },
      {
        heading: "What actually helps",
        paragraphs: [
          "The answer usually isn’t a better calendar app, though practical systems do matter. It starts with looking honestly at the expectations you’re carrying: which ones are truly yours, which ones you absorbed from your workplace, your family, or social media, and which ones you’d drop if you gave yourself permission.",
          "From there, we can get practical. What does “good enough” look like at work this quarter, and at home this week? Which decisions can you make once instead of every day? Where can you ask for help, and what gets in the way of asking? For many parents, especially those with ADHD or perfectionistic tendencies, the mental load itself needs a plan.",
          "The goal isn’t a mythical perfect balance. It’s a life where success isn’t measured by doing everything flawlessly, but by feeling more present, more connected, and more like yourself.",
        ],
      },
      {
        heading: "When to consider therapy",
        paragraphs: [
          "If you’ve been telling yourself it will get easier after the next deadline, the next school year, or the next promotion, and it hasn’t, therapy can be a place to step out of survival mode and think intentionally about how you want to spend your time and energy. You don’t need to be in crisis to deserve support.",
        ],
      },
    ],
    sources: [
      {
        label: "The Ohio State University College of Nursing, report on burnout among working parents (2022)",
        url: "https://nursing.osu.edu/news/2022/05/05/new-report-finds-burnout-among-working-parents-associated-more-mental-health",
      },
    ],
  },
  {
    slug: "mental-load-working-parents",
    title: "The Invisible Mental Load of Working Parents in Demanding Careers",
    description:
      "The mental load is the constant background work of running a family. Here’s how to recognize it, talk about it, and make it lighter.",
    category: "Working parents",
    published: "2026-10-20",
    readingMinutes: 5,
    intro:
      "You can finish a full workday, put the kids to bed, sit down on the couch, and still feel like you’re working. That’s the mental load: the remembering, planning, anticipating, and deciding that keeps a household running. It rarely shows up on anyone’s to-do list, which is exactly why it’s so exhausting.",
    sections: [
      {
        heading: "What the mental load looks like",
        list: [
          "Remembering that picture day is Thursday and the permission slip is due Wednesday",
          "Noticing the kids are about to outgrow their shoes",
          "Tracking who needs which appointment, prescription, or form",
          "Planning meals, birthday gifts, camp sign-ups, and childcare backups",
          "Holding everyone’s schedule in your head so nothing falls through",
        ],
        after: [
          "Each item is small. Together, they take up a surprising amount of attention, and that attention is the same resource you need for focused work.",
        ],
      },
      {
        heading: "Why it hits professionals so hard",
        paragraphs: [
          "Demanding jobs ask for deep concentration and quick decisions. So does running a family. When both draw from the same limited pool, decision fatigue sets in. You may notice you’re more forgetful, more irritable, or slower to start tasks than you used to be.",
          "If you have ADHD, the mental load can be even heavier, because the executive functions it relies on, like planning, prioritizing, and remembering, are the ones ADHD affects most.",
        ],
      },
      {
        heading: "Ways to make it lighter",
        paragraphs: [
          "Get it out of your head. A single shared place for family logistics, whether a calendar, a list, or a whiteboard, turns invisible work into visible work that others can share.",
          "Hand off whole responsibilities, not tasks. “Can you buy the gift?” still leaves you remembering the party, choosing the gift, and checking that it happened. Owning “all birthday parties this year” is a real handoff.",
          "Decide once. Repeating decisions, like weekday dinners, morning routines, and standing childcare plans, can be settled once and revisited occasionally, instead of re-decided every day.",
          "Lower the bar on purpose. Some things truly need your best effort. Many don’t. Choosing where “good enough” applies is a skill, not a failure.",
        ],
      },
      {
        heading: "The emotional side",
        paragraphs: [
          "The mental load often comes with resentment, guilt, or a sense that if you don’t hold everything, it will all fall apart. Those feelings are worth paying attention to. In therapy, we can look at both sides: practical systems that fit your real week, and the beliefs and expectations that make it hard to let go of control or ask for help.",
        ],
      },
    ],
  },
  {
    slug: "returning-to-work-after-parental-leave",
    title: "Going Back to Work After Parental Leave in a High-Pressure Job",
    description:
      "Returning to a demanding job after parental leave can shake your confidence and your sense of identity. Here’s what to expect and how to make the transition gentler.",
    category: "Working parents",
    published: "2026-10-20",
    readingMinutes: 6,
    intro:
      "Going back to work after parental leave is often described as a logistics problem: childcare, pumping schedules, commute times. Those matter. But for many professionals, the harder part is quieter. You return to the same job as a different person, and it can take time for the two to fit together again.",
    sections: [
      {
        heading: "Common feelings, all normal",
        list: [
          "Guilt about leaving your baby, and sometimes guilt about being relieved to be back",
          "Worry that colleagues see you as less committed or less capable",
          "Feeling slower, foggier, or less confident than before leave",
          "Grief for the version of your career, or your life, that existed before",
          "Pressure to prove that nothing has changed",
        ],
        after: [
          "Sleep deprivation alone can affect focus and memory. Add a major identity shift and a new set of responsibilities, and it makes sense that the first months feel hard.",
        ],
      },
      {
        heading: "Before you go back",
        paragraphs: [
          "If you can, talk with your manager before your return date about expectations for the first few weeks. A gradual ramp-up, clarity about which projects you’re returning to, and a plan for the hours you’ll be reachable can prevent a lot of anxiety.",
          "Do a few practice runs of the morning routine and childcare drop-off. Small rehearsals reveal problems while there’s still time to solve them.",
        ],
      },
      {
        heading: "In the first months",
        paragraphs: [
          "Expect an adjustment period, and try to judge yourself by a longer timeline than the first week. Pick a few things to do really well at work, rather than trying to recover everything at once.",
          "Notice the stories you tell yourself. “Everyone thinks I’ve lost my edge” is a thought, not a fact. Checking it against evidence, or asking a trusted colleague, often brings it down to size.",
          "Protect a little time that belongs only to you, even if it’s small. Parents who have nothing left for themselves tend to burn out faster.",
        ],
      },
      {
        heading: "When it’s more than adjustment",
        paragraphs: [
          "If you feel persistently down, anxious, numb, or unlike yourself, or if the worry is constant, it’s worth talking to your doctor or a therapist. Perinatal mood and anxiety concerns are common and treatable, and they can show up months after a baby arrives, not just in the first weeks.",
          "Therapy can also help even when nothing is “wrong.” It’s a place to think through what you want from this next chapter of your career, how you want to parent, and how to hold both without losing yourself.",
        ],
      },
    ],
  },
  {
    slug: "parenting-with-adhd-demanding-job",
    title: "Parenting with ADHD While Working a Demanding Job",
    description:
      "ADHD can make the logistics of parenting and a demanding career feel overwhelming. Here’s why, and what helps.",
    category: "Working parents",
    published: "2026-10-20",
    readingMinutes: 6,
    intro:
      "Many adults with ADHD build careers that reward their strengths: thinking quickly under pressure, creative problem-solving, hyperfocus on interesting work. Then parenthood adds a stream of small, repetitive, time-sensitive tasks, exactly the kind of work ADHD makes hardest. If the systems that once worked have stopped working, this may be why.",
    sections: [
      {
        heading: "Why parenthood can unmask ADHD",
        paragraphs: [
          "Before children, many people with ADHD compensate with long hours, last-minute adrenaline, and a lot of effort. Parenthood takes away the slack. There’s less sleep, less unstructured time, and far more to track. Some adults first wonder about ADHD after becoming parents, or after a child is diagnosed and they recognize themselves in the description.",
        ],
      },
      {
        heading: "Where it tends to show up",
        list: [
          "Mornings that feel chaotic no matter how well you plan",
          "Forgotten forms, appointments, and school emails",
          "Overwhelm and irritability when several people need you at once",
          "Starting the day with good intentions and ending it far behind",
          "Shame about not being the organized parent you think you should be",
        ],
      },
      {
        heading: "Strategies that fit an ADHD brain",
        paragraphs: [
          "Make things visible. Out of sight is often out of mind with ADHD. Put the calendar where you’ll see it, keep everything for the morning in one spot by the door, and use reminders that interrupt you rather than ones you have to remember to check.",
          "Build routines around your energy, not an ideal. If you’re sharpest in the morning, protect that time for your hardest work task and simplify everything else.",
          "Reduce decisions. Standing plans for meals, outfits, and weekly logistics free up attention for the things that matter.",
          "Plan for transitions. Moving from work mode to parent mode is hard for many people with ADHD. A short buffer, even ten minutes, can make the evening go better for everyone.",
        ],
      },
      {
        heading: "The emotional part matters too",
        paragraphs: [
          "The practical side and the emotional side of ADHD can’t really be separated. The guilt over what didn’t get done and the anxiety about what’s coming up are part of the same cycle as the executive functioning challenges themselves. That’s why my approach combines teaching executive functioning skills and strategies with therapy, so we can work on the systems and on the self-criticism together.",
          "You don’t need a formal diagnosis to start. We can explore whether ADHD explains what you’ve been experiencing and whether an evaluation would be useful.",
        ],
      },
    ],
  },
  {
    slug: "adhd-lawyers-high-pressure-professionals",
    title: "ADHD in Lawyers and Other High-Pressure Professionals: When Willpower Stops Working",
    description:
      "Many lawyers and other professionals with ADHD succeed through sheer effort until the demands outgrow it. A former BigLaw attorney turned therapist on what helps.",
    category: "ADHD",
    published: "2026-10-20",
    readingMinutes: 7,
    intro:
      "Before I became a therapist, I practiced as a BigLaw attorney in New York City. I know the billable hour, the late-night redlines, and the feeling that everyone else is managing the workload more easily than you are. For professionals with ADHD, that feeling is often accurate, and it isn’t about intelligence or work ethic.",
    sections: [
      {
        heading: "How ADHD hides in high achievers",
        paragraphs: [
          "Many accomplished adults with ADHD were never diagnosed as children because they did well in school. They compensated with intelligence, interest, and adrenaline. The pattern often continues into demanding careers: brilliant under deadline pressure, stuck on anything that isn’t urgent.",
          "That strategy has a cost. It runs on stress, and it tends to stop working when responsibilities multiply, after a promotion, a move into management, or the arrival of children.",
        ],
      },
      {
        heading: "What it can look like at work",
        list: [
          "Putting off important but non-urgent projects until the deadline forces them",
          "Losing hours to email and small tasks while the big task waits",
          "Trouble estimating how long things will take",
          "Overpreparing out of fear of missing something",
          "Strong reviews alongside a constant fear of being found out",
          "Working evenings and weekends to make up for unfocused days",
        ],
      },
      {
        heading: "Why “just try harder” doesn’t work",
        paragraphs: [
          "ADHD affects executive functioning: planning, prioritizing, starting tasks, managing time, regulating emotions, and following through. These aren’t character traits that improve with willpower. They’re skills that depend on how your brain manages attention and motivation.",
          "Generic productivity advice often assumes a brain that can start a task simply because it’s important. ADHD brains tend to run on interest, urgency, novelty, or challenge. Effective strategies work with that, not against it.",
        ],
      },
      {
        heading: "Approaches that help",
        paragraphs: [
          "Break work into concrete next actions. “Draft the motion” is a project. “Open the template and write the statement of facts heading” is a task you can start.",
          "Create urgency on purpose, with smaller self-imposed deadlines, body doubling, or working in short timed blocks.",
          "Externalize your memory. Your brain is for thinking, not storing. Capture everything in one trusted system you actually check.",
          "Address the emotional side. Years of compensating often leave behind perfectionism, anxiety, and shame. Those patterns make the practical problems worse, so they deserve attention too.",
        ],
      },
      {
        heading: "Therapy that understands both",
        paragraphs: [
          "My approach combines teaching executive functioning skills and strategies with therapy. We work on the systems that make your days run better and on the self-doubt that years of extra effort can leave behind. If you take ADHD medication or are considering it, I’m happy to coordinate with your prescriber, with your permission and a signed release.",
        ],
      },
    ],
  },
  {
    slug: "adult-adhd-diagnosis-what-now",
    title: "Diagnosed with ADHD as an Adult: What Now?",
    description:
      "An adult ADHD diagnosis can bring relief, grief, and a lot of questions. Here’s how to make sense of it and what to do next.",
    category: "ADHD",
    published: "2026-10-20",
    readingMinutes: 6,
    intro:
      "If you were recently diagnosed with ADHD as an adult, you’re in good company. According to the CDC, more than half of U.S. adults with a current ADHD diagnosis received it in adulthood. For many, the diagnosis answers a question they’ve carried for years: why do things that seem easy for others feel so hard for me?",
    sections: [
      {
        heading: "Mixed feelings are normal",
        paragraphs: [
          "Many people feel relief first. There’s finally an explanation that isn’t “lazy” or “careless.” That relief is often followed by grief, or even anger, about the years spent struggling without understanding why, and about what might have been different with earlier support.",
          "Both reactions make sense. It can help to look back with compassion at the version of you who worked so hard to compensate.",
        ],
      },
      {
        heading: "A diagnosis is a tool, not a label",
        paragraphs: [
          "A diagnosis can open doors to treatment, workplace accommodations, and self-understanding. It doesn’t define who you are or limit what you can do. Many of the traits that come with ADHD, like creativity, energy, and the ability to thrive in a crisis, are real strengths.",
        ],
      },
      {
        heading: "Practical next steps",
        list: [
          "Learn how ADHD affects you specifically. It looks different in different people.",
          "Talk with a prescriber if you’re considering medication. It helps many adults, and it’s a personal decision.",
          "Start building systems that work with your brain instead of against it.",
          "Notice the emotional patterns, like perfectionism, people-pleasing, or harsh self-talk, that may have grown up around undiagnosed ADHD.",
          "Decide whom, if anyone, you want to tell, and when. There’s no obligation to disclose.",
        ],
      },
      {
        heading: "Where therapy fits",
        paragraphs: [
          "Medication can help with attention, but it doesn’t teach skills or undo years of beliefs like “I’m not good enough.” Therapy can help with both. In my work, I combine teaching executive functioning skills and strategies with therapy, because the practical and emotional sides of ADHD are deeply connected.",
          "And if you haven’t been diagnosed but suspect ADHD, you don’t need a diagnosis to start therapy. We can look at your history and goals together and decide whether a formal evaluation would be helpful.",
        ],
      },
    ],
    sources: [
      {
        label: "CDC, ADHD Diagnosis, Treatment, and Telehealth Use in Adults (MMWR, 2024)",
        url: "https://www.cdc.gov/mmwr/volumes/73/wr/mm7340a1.htm",
      },
    ],
  },
  {
    slug: "out-of-network-therapy-benefits-new-york",
    title: "How to Use Out-of-Network Benefits for Therapy in New York",
    description:
      "A plain-English guide to out-of-network therapy benefits: what they are, how reimbursement works, and the terms you’ll see on your plan.",
    category: "Insurance",
    published: "2026-10-20",
    readingMinutes: 5,
    intro:
      "Many therapists in private practice, including me, are out-of-network providers. That doesn’t necessarily mean your insurance won’t help. Many plans include out-of-network benefits that reimburse part of the cost of therapy. Here’s how it works.",
    sections: [
      {
        heading: "In-network vs. out-of-network",
        paragraphs: [
          "An in-network therapist has a contract with your insurance company and bills it directly. An out-of-network therapist doesn’t. Instead, you pay the therapist, and your insurer reimburses you for part of the cost according to your plan.",
          "Out-of-network coverage is most common in PPO and POS plans. HMO and EPO plans often don’t include it. Your plan documents, or your insurer, can tell you which kind you have.",
        ],
      },
      {
        heading: "Terms you’ll see",
        list: [
          "Deductible: the amount you pay out of pocket each year before your plan starts reimbursing. Out-of-network deductibles are often separate from in-network ones.",
          "Coinsurance: the percentage of the allowed amount your plan reimburses after the deductible is met.",
          "Allowed amount: the amount your plan considers reasonable for a service. Reimbursement is usually based on this, not on the therapist’s full fee.",
          "Superbill: a detailed receipt with the information your insurer needs to process a claim.",
        ],
      },
      {
        heading: "How reimbursement works with me",
        paragraphs: [
          "Before we begin, I can help you verify your out-of-network benefits, so you have a sense of what to expect. After sessions, I provide superbills. I also use Reimbursify, a service that helps submit superbills to your insurance company and streamlines reimbursement, so there’s less paperwork for you.",
          "Reimbursement depends on your plan and isn’t guaranteed, which is why checking your benefits first is worthwhile.",
        ],
      },
      {
        heading: "Why some people choose out-of-network care",
        paragraphs: [
          "Out-of-network benefits can let you choose a therapist based on fit and specialty, rather than only on who’s in your plan’s network. For many people, finding the right person matters more than anything else in therapy.",
          "If you have questions about your plan, bring them to a free consultation and we’ll go through them together.",
        ],
      },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
