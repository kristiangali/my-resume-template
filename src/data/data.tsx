import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import profilepic from '../images/me.png';
import porfolioImage11 from '../images/portfolio/allseasons.png';
import porfolioImage4 from '../images/portfolio/interlinksupply.png';
import porfolioImage5 from '../images/portfolio/internetmarketingos.png';
import porfolioImage9 from '../images/portfolio/middleuce.png';
import heroImage from '../images/portfolio/portfolio_background.png';
import porfolioImage8 from '../images/portfolio/rhinorock.png';
import porfolioImage10 from '../images/portfolio/rotorooter.png';
import porfolioImage6 from '../images/portfolio/simplytemples.png';
import porfolioImage1 from '../images/portfolio/solarinstalldealsscrnsht.png';
import porfolioImage3 from '../images/portfolio/trendmappers_youtube.png';
import porfolioImage2 from '../images/portfolio/xurli.png';
import porfolioImage7 from '../images/portfolio/ydraw.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'KG Portfolio Resume',
  description: "Example site built with Kristian Gali's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kristian Gali.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Located in Cedar City, Utah as a <strong className="text-stone-100">SEO Strategist / Counselor</strong>,
        currently working at <strong className="text-stone-100">Solar Install Deals</strong> helping build a modern,
        mobile-first, domain solar website and presence.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">socializing</strong>, playing my{' '}
        <strong className="text-stone-100">guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">State of Utah.</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a first and foremost believer in a righteous creator, secondly a father, and third a proponent of truth and learning about how to help others through technological advancements.`,
  aboutItems: [
    {label: 'Location', text: 'Cedar City, Utah', Icon: MapIcon},
    {label: 'Age', text: '39', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / W. Samoan', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, Cosmilogical Reality, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Dixie State (Utah Tech)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Solar Install Deals', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Samoan',
        level: 6,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Typed Languages',
    skills: [
      {
        name: 'React / Qwik',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Ionic',
        level: 4,
      },
      {
        name: 'Rust Tauri',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Solar Install Deals',
    description: 'Build and manage the leads for Solar Install Deals. Built site & calculator in PHP',
    url: 'https://solarinstalldeals.com',
    image: porfolioImage1,
  },
  {
    title: 'Xurli Online Marketing',
    description: 'I built the e-sign docs for Xurli and managed many clients during my work here.',
    url: 'https://xurli.com',
    image: porfolioImage2,
  },
  {
    title: 'Trendmappers | Youtube',
    description:
      'This is a youtube channel I built and manage that speaks of non-popular, but true aspects of cosmology and events that I am passionate about.',
    url: 'https://youtube.com/@trendmappers',
    image: porfolioImage3,
  },
  {
    title: 'Interlink Supply | Aramsco',
    description:
      'I built and submitted the IOS and Android app for Interlink Supply technicians to reference the equipment they use. This was built in ionic / angular',
    url: 'https://interlinksupply.com',
    image: porfolioImage4,
  },
  {
    title: 'Orangesoda (301 Redirect to Deluxe corp)',
    description:
      'During my time working here, I managed many premium internet marketing client online marketing camplaigns. I was actively speaking to contacts about their serp results.',
    url: 'https://deluxe.com',
    image: porfolioImage5,
  },
  {
    title: 'Simply Temples (301 Redirect LDS Art)',
    description:
      'I built and managed an ecommerce store in prestashop that sold artwork for temples. They recently merged this store to their primary brand LDS Art.',
    url: 'https://ldsart.com',
    image: porfolioImage6,
  },
  {
    title: 'Ydraw',
    description:
      'During my time working with Ydraw, I helped them manage an organic seo campaign that dealt with keywords like but not limited to: "Whiteboard Explainer Videos" etc..',
    url: 'https://ydraw.com',
    image: porfolioImage7,
  },
  {
    title: 'Rhino Rock',
    description:
      'Built site in wordpress and managed an organic seo presence for keywords like: "Concrete Walls in Utah" ',
    url: 'https://rhinorock.com',
    image: porfolioImage8,
  },
  {
    title: 'Middle Uce Breakdancing',
    description:
      'Collaborated with Rex Jones Films to breakdance and this is just one of my more fun, happy projects to be apart of.',
    url: 'https://youtube.com/@samerican',
    image: porfolioImage9,
  },
  {
    title: 'Roto Rooter',
    description:
      'I worked closely as an SEO Strategist and Analyst during my deluxe job days to help RR with many keywords for their locations across the U.S.',
    url: 'https://rotorooter.com',
    image: porfolioImage10,
  },
  {
    title: 'All Seasons Shades',
    description:
      'During a time, working with a company called Blusuit internet marketing, we built and strategized All Seasons Organic SEO.',
    url: 'https://polarshades.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2017',
    location: 'UVSC (Utah Valley University) & Dixie State ( Utah Tech )',
    title: 'Assoiciates',
    content: <p>Got the basics out of the way and followed my business endeavors.</p>,
  },
  {
    date: 'March 2003',
    location: 'Technical Certs',
    title: 'A+, Cisco, Google Adwords, Linked In',
    content: <p>Linked In Pass Certs in PHP, Javascript, HTM, CSS, Amazon Ec2, Adobe & a few more... </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2023 - Present',
    location: 'Kristian Gali ~ Freelance Web & SEO',
    title: 'Freelance Web Technologies.',
    content: (
      <p>
        I build stable websites and apps that perform well in many search engines. I build and manage search projects,
        performance and landing products for various local and other technologies.
      </p>
    ),
  },
  {
    date: 'June 2023 - Present',
    location: 'Doordash Southern Utah',
    title: 'Dasher',
    content: (
      <p>
        Many would say that Doordash doesn't qualify as a valid "job". However I've had a great experience with this and
        have doordashed more than 750 deliveries and have made some reliable income in doing so.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Gerome Gali',
      text: 'I would like to recommend Kristian Gali for several areas of employment and expertise. Kristian possesses an in-depth knowledge of many different skill sets as a valuable contributor to the work community. Some of these areas include a strong background in Web and UI development and coding, which include languages such as HTML5, CSS3, PHP, Flash, Java, JQuery etc.',
      image: 'https://kristiangali.netlify.app/images/portfolio/gerome.jpeg',
    },
    {
      name: 'Curtis Lane Jensen',
      text: 'Kristian is passionate, exhuberant, and energetic. He works hard, works long and works with a determination that is inspiring. ',
      image: 'https://kristiangali.netlify.app/images/portfolio/curtis.jpeg',
    },
    {
      name: 'Dusty Oliverson',
      text: 'Kristian works hard and understands the internet marketing and online building sphere.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'mr.gali@protonmail.com',
      href: 'mailto:mr.gali@protonmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Cedar City, Utah',
      href: 'https://www.google.ca/maps/place/Cedar+City',
    },
    {
      type: ContactType.Instagram,
      text: '@thecalmnapalm',
      href: 'https://www.instagram.com/thecalmnapalm/',
    },
    {
      type: ContactType.Github,
      text: 'kristiangali',
      href: 'https://github.com/kristiangali',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kristiangali'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kristiangali/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/thecalmnapalm/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/thecalmnapalm'},
];
