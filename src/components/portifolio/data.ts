import { Project, TechStack, Experience } from '../../types';

export const projects: Project[] = [
    {
      title: "Undugu",
      description: "Undugu is blockchain-based charity donation platform that enables transparent, secure, and decentralized fundraising.",
      tech: ["React.js", "Supabase", "Web3.js", "TypeScript"],
      link: "https://undugu-beta.vercel.app/"
    },
    {
      title: "Fvkry prvnta",
      description: "FVKRY PRVNTA is a blockchain-based virtual assets and crypto locking platform that aims to enhance financial discipline and promote long-term saving among cryptocurrency and virtual asset owners.",
      tech: ["React.js", "Solidity", "Wagmi/Viem", "TypeScript"],
      link: "https://fvkry.vercel.app/"
    },
    {
      title: "Attendeez",
      description: "Attendeez is an automated class attendance taking system that leverages the use of QR codes for attendance sign in.",
      tech: ["React.js", "TypeScript", "Supabase", "DaisyUI"],
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
      tech: ["React.js", "TypeScript", "DaisyUI"],
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
    title: "FVKRY PRVNTA",
    description: "FVKRY PRVNTA is a smart contract-powered vault system that helps digital assets holders build wealth through disciplined saving. Acts as a fixed deposit account for your digital assets, but with the flexibility needed for the crypto age.",
    tech: ["React.js", "Solidity", "Wagmi/Viem", "TypeScript"],
    link: ""
  }
];

export const techStack: TechStack = {
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "Django", "PostgreSQL", "MySQL"],
    "Containerization": ["Docker"],
    "Blockchain": ["Solidity", "Ethers.js", "Hardhat", "Wagmi", "Viem","The Graph"],
    "Tools": ["Git", "VS Code", "Github", "Vercel", "Supabase", "Remix", "Docker"],
};

export const experience: Experience[] = [
  {
    company: 'Zendawa Africa',
    position: 'Software Engineering Intern',
    description: "Zendawa is a healthcare SaaS company that offers a digital platform offering tele-pharmacy which enables neighborhood pharmacies to sell online and offer e-consultation. As a software engineering intern, I developed the zenrekods platform for clients to upload their medical records and sociostat for tracking Zendawa's social media post performance."
  }
]