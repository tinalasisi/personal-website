// Everything on the Media page. TV & video renders in the order listed here;
// podcasts and press render newest first, so those entries can go anywhere.
// Podcast links are to the specific episode, not the show: `apple` is the
// podcasts.apple.com URL with its ?i= episode id, `spotify` the
// open.spotify.com/episode URL, and `web` the show's own episode page.
// `featured` entries also appear in the Media strip on the home page.
export interface Podcast {
  show: string;
  title: string;
  date: string;      // YYYY-MM-DD
  apple?: string;
  spotify?: string;
  web?: string;
  featured?: boolean;
}

// An award claim always carries its own proof: `href` is the awarding body's
// winner record where one exists, otherwise a news release naming the win.
// `label` spells out year, award, tier or region, category, and what won.
export interface Award {
  label: string;
  href: string;
}

export interface VideoWork {
  title: string;
  network: string;
  role: string;
  years: string;     // display text, e.g. "2022–2023"
  summary: string;
  href: string;
  awards?: Award[];
  featured?: boolean;
}

export interface PressItem {
  outlet: string;
  headline: string;
  date: string;      // YYYY-MM
  story: string;     // groups coverage of the same paper
  href: string;
  featured?: boolean;
}

export const video: VideoWork[] = [
  {
    title: 'Why Am I Like This?',
    network: 'PBS Terra',
    role: 'Host & writer',
    years: '2022–2023',
    summary: 'A science series on why our bodies are the way they are.',
    href: 'https://www.pbs.org/show/why-am-i/',
    awards: [
      {
        label: '2023 Bronze Telly Award, Online: General – Science & Technology, for the episode “Where Does My Skin Color Come From?”',
        href: 'https://www.tellyawards.com/winners/2023/online/general-science-technology/why-am-i-like-this-where-does-my-skin-color-come-from/289118/',
      },
    ],
    featured: true,
  },
  {
    title: 'Hairy Tales',
    network: 'CBC · The Nature of Things',
    role: 'Featured expert',
    years: '2024',
    summary: 'A full episode on the science and evolution of human hair.',
    href: 'https://www.channelcanada.com/canadian-channels/english-networks/cbc/hairy-tales-directed-by-leora-eisen-world-premiere-march-7-cbcs-the-nature-of-things/',
  },
  {
    title: 'Finding Your Roots: The Seedlings',
    network: 'WPSU',
    role: 'Instructor',
    years: '2018',
    summary: 'Episode 6, “Evolution of Skin Color”: teaching campers at a Penn State genetics and genealogy camp how human skin color evolved.',
    href: 'https://wpsu.org/digital/finding-your-roots-the-seedlings/evolution-of-skin-color-ep-6/',
  },
];

export const podcasts: Podcast[] = [
  {
    show: 'Science Quickly',
    title: 'Where Did Curly Hair Come From? Biological Anthropology May Provide Insights',
    date: '2025-02-21',
    apple: 'https://podcasts.apple.com/us/podcast/where-did-curly-hair-come-from-biological-anthropology/id189330872?i=1000694706272',
    spotify: 'https://open.spotify.com/episode/3KqMAt3cVKmvP2bff9ffyQ',
    web: 'https://www.scientificamerican.com/podcast/episode/biological-anthropology-points-to-possible-reasons-for-hair-and-skin-tone/',
  },
  {
    show: 'Smologies',
    title: 'Skin & Hair Color with Tina Lasisi',
    date: '2025-02-20',
    apple: 'https://podcasts.apple.com/us/podcast/skin-hair-color-with-tina-lasisi/id1746567248?i=1000694274441',
    spotify: 'https://open.spotify.com/episode/3NS7OF8s75GCabF57cNsbb',
  },
  {
    show: 'Origin Stories',
    title: 'The Story of Human Hair',
    date: '2024-04-30',
    apple: 'https://podcasts.apple.com/us/podcast/the-story-of-human-hair/id982555930?i=1000654840624',
    spotify: 'https://open.spotify.com/episode/2PhGQykJ9583JfLzCZkv18',
    web: 'https://leakeyfoundation.org/podcast/the-story-of-human-hair/',
  },
  {
    show: 'Brains On!',
    title: 'How do our eyes, skin and hair get their colors?',
    date: '2023-08-15',
    apple: 'https://podcasts.apple.com/us/podcast/how-do-our-eyes-skin-and-hair-get-their-colors/id703720228?i=1000624493553',
    spotify: 'https://open.spotify.com/episode/3nqScL0xOUmUg7cwNoidMz',
  },
  {
    show: 'The Decibel',
    title: 'The evolutionary advantage of curly hair',
    date: '2023-08-09',
    apple: 'https://podcasts.apple.com/us/podcast/the-evolutionary-advantage-of-curly-hair/id1565410296?i=1000623903077',
    spotify: 'https://open.spotify.com/episode/06x9rDEzBwnvjWV3Mx44lA',
  },
  {
    show: 'Science Friday',
    title: 'Curly Hair Keeps Your Scalp Cooler',
    date: '2023-06-16',
    apple: 'https://podcasts.apple.com/us/podcast/avian-flu-curly-hair-june-16-2023-part-2/id73329284?i=1000617320559',
    spotify: 'https://open.spotify.com/episode/2oK35OowqWlHU1PqAmvD4W',
    web: 'https://www.sciencefriday.com/segments/curly-hair-scalp-cool/',
  },
  {
    show: 'Black Girl Nerds',
    title: 'STEM Chat with Dr. Tina Lasisi and Dr. Kareem Edouard',
    date: '2023-03-20',
    apple: 'https://podcasts.apple.com/us/podcast/343-stem-chat-with-dr-tina-lasisi-and-dr-kareem-edouard/id1056793768?i=1000605012125',
    spotify: 'https://open.spotify.com/episode/34cEyQvF9r1A5WpFle0Aiz',
  },
  {
    show: 'Ologies with Alie Ward',
    title: 'Melaninology (Skin/Hair Pigment)',
    date: '2023-02-16',
    apple: 'https://podcasts.apple.com/us/podcast/melaninology-skin-hair-pigment-with-tina-lasisi/id1278815517?i=1000599861977',
    spotify: 'https://open.spotify.com/episode/1IjWDU1nCi04I2g7XLH0QM',
    web: 'https://www.alieward.com/ologies/melaninology',
    featured: true,
  },
  {
    show: 'Big Biology',
    title: 'Why are we like this? (Ep 95)',
    date: '2023-01-12',
    apple: 'https://podcasts.apple.com/us/podcast/why-are-we-like-this-ep-95/id1321630019?i=1000594122457',
    spotify: 'https://open.spotify.com/episode/3PRbPcoX14ryrJ6MaEMapj',
    web: 'https://www.bigbiology.org/episodes/2023/1/12/ep-95-why-are-we-like-this-with-tina-lasisih',
  },
  {
    show: 'Exolore',
    title: 'Living World of Flying Whisks',
    date: '2022-12-29',
    apple: 'https://podcasts.apple.com/us/podcast/living-world-of-flying-whisks/id1511097941?i=1000591575313',
    spotify: 'https://open.spotify.com/episode/5taJJAPAQ0ekwUkzgyaM4Q',
  },
  {
    show: "Zora's Daughters",
    title: 'The Crown Chronicles (S3, E8)',
    date: '2022-12-21',
    apple: 'https://podcasts.apple.com/us/podcast/s3-e8-the-crown-chronicles/id1523068454?i=1000590853787',
    spotify: 'https://open.spotify.com/episode/0w7BIEC3DTNh90aTqX3b58',
  },
  {
    show: 'Film Nuts',
    title: 'Everything Everywhere All At Once with Dr. Tina Lasisi',
    date: '2022-10-19',
    apple: 'https://podcasts.apple.com/us/podcast/everything-everywhere-all-at-once-with-dr-tina-lasisi/id1509543199?i=1000583206951',
    spotify: 'https://open.spotify.com/episode/21zcu372K8dD3tsxYEIEZk',
  },
  {
    show: 'Tracking Traits',
    title: 'Unexplored Dimensions of Human Scalp Hair',
    date: '2022-10-10',
    apple: 'https://podcasts.apple.com/us/podcast/unexplored-dimensions-of-human-scalp-hair/id1577873872?i=1000582184140',
    spotify: 'https://open.spotify.com/episode/0LazXHr4RGqwvldmcFyaRu',
  },
  {
    show: 'BBC CrowdScience',
    title: 'What is healthy hair?',
    date: '2022-07-01',
    apple: 'https://podcasts.apple.com/us/podcast/what-is-healthy-hair/id1172855980?i=1000568480216',
    spotify: 'https://open.spotify.com/episode/3dHYi9rSx75gc82YTneKrW',
    web: 'https://www.bbc.co.uk/programmes/w3ct3j71',
  },
  {
    show: 'Getting Curious with Jonathan Van Ness',
    title: "Hair Variation, What's Her Story?",
    date: '2022-02-23',
    apple: 'https://podcasts.apple.com/us/podcast/hair-variation-whats-her-story-with-dr-tina-lasisi/id1068563276?i=1000551957364',
    spotify: 'https://open.spotify.com/episode/0uLxaFfnAPO6z9MZpG2A4J',
    web: 'https://jonathanvanness.com/podcast/getting-curious-hair-variation-whats-her-story-with-dr-tina-lasisi/',
  },
  {
    show: 'In Those Genes',
    title: "Black Don't Crack",
    date: '2021-12-30',
    apple: 'https://podcasts.apple.com/us/podcast/black-dont-crack/id1489257965?i=1000546526304',
    spotify: 'https://open.spotify.com/episode/1wEYWulCsYXeFtDozXP9E0',
  },
  {
    show: 'In Those Genes',
    title: 'The Future is Black AF',
    date: '2021-12-21',
    apple: 'https://podcasts.apple.com/us/podcast/the-future-is-black-af/id1489257965?i=1000545632356',
    spotify: 'https://open.spotify.com/episode/5AKQNGU3DJwUR3S0R9rnoG',
  },
  {
    show: 'In Those Genes',
    title: 'Black to the Future',
    date: '2021-12-14',
    apple: 'https://podcasts.apple.com/us/podcast/black-to-the-future/id1489257965?i=1000544945565',
    spotify: 'https://open.spotify.com/episode/6hTMCjYMakffwHHkxvk3o8',
    web: 'https://soundcloud.com/inthosegenes/black-to-the-future',
  },
  {
    show: 'Sausage of Science',
    title: 'Methods and measuring hair morphology (SoS 142)',
    date: '2021-11-01',
    apple: 'https://podcasts.apple.com/us/podcast/sos-142-f-around-and-find-out-methodsandmeasuring/id1340030371?i=1000540376079',
    spotify: 'https://open.spotify.com/episode/0UxAcHbymuxFaE62Fs9W7I',
  },
  {
    show: 'NPR Short Wave',
    title: "Here's a better way to talk about hair",
    date: '2021-10-06',
    apple: 'https://podcasts.apple.com/us/podcast/heres-a-better-way-to-talk-about-hair/id1482575855?i=1000691145746',
    spotify: 'https://open.spotify.com/episode/1E7oWnimUIMSiynLqlW6g7',
  },
  {
    show: 'Sausage of Science',
    title: 'A Hairy History with Tina Lasisi (SoS 51)',
    date: '2019-10-14',
    apple: 'https://podcasts.apple.com/us/podcast/sos-51-a-hairy-history-with-tina-lasisi/id1340030371?i=1000453483263',
    spotify: 'https://open.spotify.com/episode/3gjiu83M3v6OCg138Tl0no',
    web: 'https://soundcloud.com/sausageofscience/sos51-a-hairy-situation-with-tina-lasisi',
  },
  {
    show: 'Super Awesome Science Show',
    title: 'Bad Hair Days',
    date: '2019-07-09',
    apple: 'https://podcasts.apple.com/us/podcast/bad-hair-days/id1441016618?i=1000444003775',
    spotify: 'https://open.spotify.com/episode/25ZrUzyLDd4zPTaAX7X2nv',
    web: 'https://globalnews.ca/news/5463700/bad-hair-days/',
  },
];

export const press: PressItem[] = [
  {
    outlet: 'Wall Street Journal',
    headline: 'Hair Kept Our Ancestors’ Brains Cool—and Gave Them an Evolutionary Advantage',
    date: '2025-07',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.wsj.com/science/biology/human-hair-evolution-brain-sun-protection-9f109694',
  },
  {
    outlet: 'National Geographic',
    headline: 'Why curly hair was an evolutionary advantage',
    date: '2023-06',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.nationalgeographic.com/premium/article/curly-hair-evolutionary-advantage-brain-protect',
  },
  {
    outlet: 'Smithsonian Magazine',
    headline: 'Curly Hair Keeps the Head Coolest',
    date: '2023-06',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.smithsonianmag.com/smart-news/curly-hair-keeps-the-head-coolest-but-any-hair-is-better-than-none-180982424/',
    featured: true,
  },
  {
    outlet: 'BBC Newsround',
    headline: 'Curly hair may help keep your head cool, study suggests',
    date: '2023-06',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.bbc.co.uk/newsround/65879881',
  },
  {
    outlet: 'The Independent',
    headline: 'Curly hair may have evolved to keep early humans cool',
    date: '2023-06',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.independent.co.uk/news/science/africa-scientists-loughborough-university-homo-erectus-anthropology-b2353952.html',
  },
  {
    outlet: 'ScienceDaily',
    headline: 'Life before air conditioning: Curly hair kept early humans cool',
    date: '2023-06',
    story: 'Curly hair and keeping cool (PNAS, 2023)',
    href: 'https://www.sciencedaily.com/releases/2023/06/230607215834.htm',
  },
  {
    outlet: 'SAPIENS',
    headline: 'Untangling Race From Hair',
    date: '2022-03',
    story: 'A better way to measure hair (Scientific Reports, 2021)',
    href: 'https://www.sapiens.org/biology/hair-race-evolution/',
  },
];
