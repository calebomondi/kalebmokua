import { Project, TechStack, Experience } from '../../types';

export const projects: Project[] = [
    {
      title: "Undugu",
      description: "Undugu is blockchain-powered charity donation platform that enables trackable, transparent, secure, and decentralized fundraising.",
      tech: ["React.js", "Supabase", "Web3.js", "TypeScript"],
      link: "https://undugu-beta.vercel.app/"
    },
    {
      title: "FVP",
      description: "FVP is a financial management protocol that that enables digital asset holders to curb their impulsive spending behaviour and also promotes long-term saving in the Web3 space.",
      tech: ["React.js", "Solidity", "Wagmi/Viem", "ExpressJS"],
      link: "https://fvp-fe.vercel.app/"
    },
    {
      title: "Attendeez",
      description: "Attendeez is an automated class attendance taking system that leverages the use of QR codes for attendance sign in.",
      tech: ["React.js", "ExpressJS", "Supabase", "DaisyUI"],
      link: "https://attendeez.vercel.app/"
    },
    {
      title: "CryptoPunk Tracker",
      description: "CryptoPunk Tracker tracks the ownership of CryptoPunk NFTs through sales and transfers and also shows punks that are on sale currently.",
      tech: ["React.js", "GraphQL", "The Graph"],
      link: "https://calebomondi.github.io/cryptopunk-tracker/"
    }
];

export const upcomingProjects: Project[] = [
  {
    title: "FVP",
    description: "A protocol that aims to bring financial management in the Web3 space.",
    tech: ["React.js", "Solidity", "Wagmi/Viem/EthersJS", "ExpressJS"],
    link: ""
  }
];

export const techStack: TechStack = {
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "Django", "PostgreSQL", "MySQL"],
    "Containerization": ["Docker"],
    "Blockchain": ["Solidity", "Ethers.js", "Hardhat", "Wagmi", "Viem","The Graph"],
    "Tools": ["Git", "Supabase", "Remix", "Docker", "VS Code"],
};

export const experience: Experience[] = [
  {
    company: 'Zendawa Africa',
    position: 'Software Engineering Intern',
    description: "Zendawa is a healthcare SaaS company that offers a digital platform offering tele-pharmacy which enables neighborhood pharmacies to sell online and offer e-consultation. As a software engineering intern, I participated in the developement of the zenrekods platform for clients to upload their medical records and sociostat for tracking Zendawa's social media post performance."
  }
]