import { Project, TechStack, Experience } from '../../types';

export const projects: Project[] = [
    {
      title: "Undugu",
      description: "Undugu is blockchain-based charity donation platform that enables transparent, secure, and decentralized fundraising.",
      tech: ["React.js", "Supabase", "Web3.js", "Tailwind"],
      link: "https://undugu-beta.vercel.app/"
    },
    {
      title: "Attendeez",
      description: "Attendeez is an automated class attendance taking system that leverages the use of QR codes for attendance sign in.",
      tech: ["React.js", "Tailwind", "Supabase", "DaisyUI"],
      link: "https://attendeez.vercel.app/"
    },
    {
      title: "CryptoPunk Tracker",
      description: "CryptoPunk Tracker tracks the ownership of CryptoPunk NFTs through sales and transfers and also shows punks that are on sale currently.",
      tech: ["React.js", "GraphQL", "The Graph"],
      link: "https://calebomondi.github.io/cryptopunk-tracker/"
    },
    {
      title: "TitanDevs",
      description: "TitanDevs is our university class group portifolio that we were to create for a certain group project and was used for presentation purposes.",
      tech: ["React.js", "Tailwind", "DaisyUI"],
      link: "https://titandevs.vercel.app/"
    },
    {
      title: "CountryOpedia",
      description: "CountryOpedia uses the REST countries API to showcase all the countries in the world with their up-to-date facts and flags.",
      tech: ["Vanilla"],
      link: "https://calebomondi.github.io/rest-countries-api/"
    }
];

export const upcomingProjects: Project[] = [
  {
    title: "Attendeez-Tutor",
    description: "Attendeez is the tutor version of attendeez which will be used by tutors to start and end class sessions and manage class attendance and also to take class attendance.",
    tech: ["React.js", "Supabase", "Tailwind", "expressJS"],
    link: ""
  },
  {
    title: "OpenMRL Smart Contract",
    description: "OpenMRL will be a blockchain-based electronic medical records system aimed at revolutionizing healthcare data management to ensure complete ownership by a patient.",
    tech: ["Solidity", "Typescript"],
    link: ""
  }
];

export const techStack: TechStack = {
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "Django", "PostgreSQL", "MySQL"],
    "Blockchain": ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Wagmi", "The Graph"],
    "Tools": ["Git", "VS Code", "Github", "Vercel", "Supabase"]
};

export const experience: Experience[] = [
  {
    company: 'Zendawa Africa',
    position: 'Software Engineering Intern',
    description: "Zendawa is a healthcare SaaS company that offers a digital platform offering tele-pharmacy which enables neighborhood pharmacies to sell online and offer e-consultation. As a software engineering intern, I developed the zenrekods platform for clients to upload their medical records and sociostat for tracking Zendawa's social media post performance."
  }
]