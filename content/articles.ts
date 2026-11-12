/**
 * ARTICLES
 * Each article is a list of sections. A section can have a heading,
 * paragraphs, and an optional bulleted list. Edit the text between quotes.
 *
 * Endnotes: write {{1}}, {{2}}, ... in the text where a citation goes.
 * Each number links to the matching entry in `notes` (1 = first entry).
 */

export type ArticleSection = { heading?: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export type ArticleNote = { citation: string; url: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Working parents" | "ADHD" | "Insurance";
  published: string; // YYYY-MM-DD
  readingMinutes: number;
  intro?: string;
  sections: ArticleSection[];
  notes?: ArticleNote[];
};

export const articles: Article[] = [
  {
    slug: "is-adhd-an-evolutionarily-adaptive-trait",
    title: "Is ADHD an evolutionarily adaptive trait?",
    description:
      "Why people with ADHD can be remarkably good at some things and struggle with others, what the evolutionary theory of ADHD suggests, and how therapy helps in the modern world.",
    category: "ADHD",
    published: "2026-11-12",
    readingMinutes: 5,
    sections: [
      {
        heading: "The juxtapositions",
        paragraphs: [
          "You seem to be bizarrely good at some things and quite awful at others. You are great at noticing a weird noise in a room while you’re trying to take a test and quite awful at concentrating on a boring task. You love exploring and adventures but sometimes you’re put off by unfamiliar textures and tastes. You are remarkably clear-headed in emergencies but cannot seem to stick to a daily routine. Some days you struggle to stay awake and alert during daytime but find yourself wide awake and energetic at night despite a lack of sleep.",
        ],
      },
      {
        heading: "Disabled, or simply different?",
        paragraphs: [
          "Have you ever heard ADHD described as a disability and thought it only half applied to you? One emerging theory is that ADHD is actually an evolutionarily adaptive trait.{{1}}{{2}}{{3}}{{4}} Most people with ADHD have noticed that while they may perform worse than neurotypical peers on certain tasks, they actually outperform neurotypical peers on others. Certain of these tasks almost certainly sustained communities and tribes and propelled advancements in human understanding and technology. Diversity is valuable in a tribe, and early humans with ADHD may have contributed in valuable ways.",
          "Some examples of how ADHD could have been useful:",
        ],
        list: [
          "Being easily distractible by outside stimuli means noticing nearby predators or attackers faster",
          "Hyperfocus to the point of neglecting basic needs (eating, drinking, bathroom needs) could have been useful to complete tasks requiring persistent concentration, like hunting{{5}}{{6}}",
          "Sensitivities to food of unfamiliar texture or taste could have kept people safe from rotten foods or poisonous new foods{{7}}{{8}}",
          "Fidgeting and sensory seeking actions could have led to the development of crafts like knitting, weaving, and pottery",
          "Having a shifted sleep schedule and trouble sleeping at night could have helped with protecting a tribe from attackers or large predators at night{{9}}{{10}}",
          "Having trouble finishing tasks could have been helped when tasks needed to be imagined, described, and then delegated",
          "Creativity and seeking auditory stimulation could have led to the development of music and various art forms and perpetuated the tradition of oral history storytelling{{11}}{{12}}",
          "Emotional hyperawareness and rejection sensitivity could have been useful for maintaining social connections and community cohesion{{13}}{{14}}",
          "Being a social chameleon could have helped with mediating situations or connecting with neighboring tribes",
        ],
      },
      {
        heading: "What about the modern world?",
        paragraphs: [
          "Most of us no longer live in tribes, so how does ADHD play out in the modern context? We know that ADHD is over-represented among entrepreneurs and in the incarcerated population. People with ADHD traits are more likely to start their own businesses.{{15}} Incarcerated adults have ADHD at about five times the rate of the general population.{{16}}{{17}} Why might this be the case?",
          "Depending on the context, ADHD can be an advantage or a disability:",
        ],
        list: [
          "Seeking stimulation and novelty can play out as devising new ideas and innovations that drive success at a large company or as risk-taking behavior that leads one to commit crime.",
          "Hyperfocus on a niche interest can be a huge asset in STEM fields and a large disability if it distracts from a job that you were hired to do.",
          "Sensitivities to stimuli can be seen as eccentric and innovative (think tech CEOs wearing sweatpants) or as undesirable in the workplace (who would want to be the person who cannot eat anything at a work dinner?)",
          "Fidgeting can look like motivation and energy (an executive pacing in a room, swiveling in a chair, or constantly on the move) or distracting (doodling in a meeting)",
          "Having a shifted sleep schedule can make one appear productive (Wow! This person is answering emails at 2am!) or unproductive (“I can’t believe they are late again…”)",
          "Having trouble finishing tasks can be an asset (like an executive who needs to be able to delegate) or a liability (like an associate who can’t seem to finish any project on time)",
        ],
        after: [
          "Context is everything with ADHD. Most traits associated with ADHD are not inherently advantages or disadvantages in all contexts.",
        ],
      },
      {
        heading: "What do we do with this information?",
        paragraphs: [
          "Many of us are not CEOs. Most of us frequently need to finish tasks we find unpleasant. Most of us cannot simply follow our whims to do whatever we please when we please. So how can we harness the advantages of ADHD while coping with the disabling aspects of it? This is where therapy and practicing executive functioning skills are crucial, in addition, of course, to medication where it is warranted, desired, and accessible.{{18}}{{19}} Therapy can help identify what environments are best suited for you long-term (what careers, what sorts of hobbies, what schedules can look like) as well as how to cope with difficult circumstances. If we cannot eliminate undesirable tasks, we can at least decrease the on-ramp for them, make the physical environment more conducive to work, practice executive functioning strategies and skills, and troubleshoot when needed.",
          "Research shows us that therapy can increase productivity and improvement in people with ADHD and that the effects of therapy lasted even after sessions ended.{{20}}{{21}} Many of my clients harness the power of both. Imagine what might happen if you did.",
        ],
      },
    ],
    notes: [
      {
        citation: "Hartmann, T. (1993). Attention Deficit Disorder: A Different Perception. Underwood-Miller. (The original “hunter versus farmer” theory.)",
        url: "https://www.goodreads.com/book/show/278998",
      },
      {
        citation: "Williams, J., & Taylor, E. (2006). The evolution of hyperactivity, impulsivity and cognitive diversity. Journal of the Royal Society Interface, 3(8), 399–413.",
        url: "https://doi.org/10.1098/rsif.2005.0102",
      },
      {
        citation: "Eisenberg, D. T. A., Campbell, B., Gray, P. B., & Sorenson, M. D. (2008). Dopamine receptor genetic polymorphisms and body composition in undernourished pastoralists: An exploration of nutrition indices among nomadic and recently settled Ariaal men of northern Kenya. BMC Evolutionary Biology, 8, 173.",
        url: "https://doi.org/10.1186/1471-2148-8-173",
      },
      {
        citation: "Barack, D. L., Ludwig, V. U., Parodi, F., Ahmed, N., Brannon, E. M., Ramakrishnan, A., & Platt, M. L. (2024). Attention deficits linked with proclivity to explore while foraging. Proceedings of the Royal Society B, 291(2017), 20222584.",
        url: "https://doi.org/10.1098/rspb.2022.2584",
      },
      {
        citation: "Hupfeld, K. E., Abagis, T. R., & Shah, P. (2019). Living “in the zone”: Hyperfocus in adult ADHD. ADHD Attention Deficit and Hyperactivity Disorders, 11(2), 191–208.",
        url: "https://doi.org/10.1007/s12402-018-0272-y",
      },
      {
        citation: "Ashinoff, B. K., & Abu-Akel, A. (2021). Hyperfocus: The forgotten frontier of attention. Psychological Research, 85(1), 1–19.",
        url: "https://doi.org/10.1007/s00426-019-01245-8",
      },
      {
        citation: "Bijlenga, D., Tjon-Ka-Jie, J. Y. M., Schuijers, F., & Kooij, J. J. S. (2017). Atypical sensory profiles as core features of adult ADHD, irrespective of autistic symptoms. European Psychiatry, 43, 51–57.",
        url: "https://doi.org/10.1016/j.eurpsy.2017.02.481",
      },
      {
        citation: "Panagiotidi, M., Overton, P. G., & Stafford, T. (2018). The relationship between ADHD traits and sensory sensitivity in the general population. Comprehensive Psychiatry, 80, 179–185.",
        url: "https://doi.org/10.1016/j.comppsych.2017.10.008",
      },
      {
        citation: "Van Veen, M. M., Kooij, J. J. S., Boonstra, A. M., Gordijn, M. C. M., & Van Someren, E. J. W. (2010). Delayed circadian rhythm in adults with attention-deficit/hyperactivity disorder and chronic sleep-onset insomnia. Biological Psychiatry, 67(11), 1091–1096.",
        url: "https://doi.org/10.1016/j.biopsych.2009.12.032",
      },
      {
        citation: "Samson, D. R., Crittenden, A. N., Mabulla, I. A., Mabulla, A. Z. P., & Nunn, C. L. (2017). Chronotype variation drives night-time sentinel-like behaviour in hunter–gatherers. Proceedings of the Royal Society B, 284(1858), 20170967. (About varied sleep schedules in a hunter-gatherer group generally, not ADHD specifically.)",
        url: "https://doi.org/10.1098/rspb.2017.0967",
      },
      {
        citation: "White, H. A., & Shah, P. (2011). Creative style and achievement in adults with attention-deficit/hyperactivity disorder. Personality and Individual Differences, 50(5), 673–677.",
        url: "https://doi.org/10.1016/j.paid.2010.12.015",
      },
      {
        citation: "Boot, N., Nevicka, B., & Baas, M. (2020). Creativity in ADHD: Goal-directed motivation and domain specificity. Journal of Attention Disorders, 24(13), 1857–1866.",
        url: "https://doi.org/10.1177/1087054717727352",
      },
      {
        citation: "Shaw, P., Stringaris, A., Nigg, J., & Leibenluft, E. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. American Journal of Psychiatry, 171(3), 276–293.",
        url: "https://doi.org/10.1176/appi.ajp.2013.13070966",
      },
      {
        citation: "Beaton, D. M., Sirois, F., & Milne, E. (2022). Experiences of criticism in adults with ADHD: A qualitative study. PLOS ONE, 17(2), e0263366.",
        url: "https://doi.org/10.1371/journal.pone.0263366",
      },
      {
        citation: "Tran, M. H., Wiklund, J., Antshel, K., Jhawar, N., & Montgomery, C. (2025). Entrepreneurship and ADHD: A meta-analytical assessment of the state-of-the-art and suggestions for the future. Entrepreneurship Theory and Practice, 50(3), 789–829.",
        url: "https://doi.org/10.1177/10422587251392498",
      },
      {
        citation: "Baggio, S., Fructuoso, A., Guimaraes, M., Fois, E., Golay, D., Heller, P., Perroud, N., Aubry, C., Young, S., Delessert, D., Gétaz, L., Tran, N. T., & Wolff, H. (2018). Prevalence of attention deficit hyperactivity disorder in detention settings: A systematic review and meta-analysis. Frontiers in Psychiatry, 9, 331. (About 26% of incarcerated adults; the authors describe this as a five-fold increase.)",
        url: "https://doi.org/10.3389/fpsyt.2018.00331",
      },
      {
        citation: "Song, P., Zha, M., Yang, Q., Zhang, Y., Li, X., & Rudan, I. (2021). The prevalence of adult attention-deficit hyperactivity disorder: A global systematic review and meta-analysis. Journal of Global Health, 11, 04009. (About 2.6% of adults have persistent ADHD; about 6.8% have symptomatic ADHD.)",
        url: "https://doi.org/10.7189/jogh.11.04009",
      },
      {
        citation: "Cortese, S., Adamo, N., Del Giovane, C., et al. (2018). Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: A systematic review and network meta-analysis. The Lancet Psychiatry, 5(9), 727–738.",
        url: "https://doi.org/10.1016/S2215-0366(18)30269-4",
      },
      {
        citation: "Lichtenstein, P., Halldner, L., Zetterqvist, J., Sjölander, A., Serlachius, E., Fazel, S., Långström, N., & Larsson, H. (2012). Medication for attention deficit–hyperactivity disorder and criminality. New England Journal of Medicine, 367(21), 2006–2014.",
        url: "https://doi.org/10.1056/NEJMoa1203241",
      },
      {
        citation: "López-Pinar, C., Martínez-Sanchís, S., Carbonell-Vayá, E., Fenollar-Cortés, J., & Sánchez-Meca, J. (2018). Long-term efficacy of psychosocial treatments for adults with attention-deficit/hyperactivity disorder: A meta-analytic review. Frontiers in Psychology, 9, 638.",
        url: "https://doi.org/10.3389/fpsyg.2018.00638",
      },
      {
        citation: "Safren, S. A., Sprich, S., Mimiaga, M. J., Surman, C., Knouse, L., Groves, M., & Otto, M. W. (2010). Cognitive behavioral therapy vs relaxation with educational support for medication-treated adults with ADHD and persistent symptoms: A randomized controlled trial. JAMA, 304(8), 875–880.",
        url: "https://doi.org/10.1001/jama.2010.1192",
      },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
