import { Project, TechStack } from '../../types';

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
      title: "SocioStat",
      description: "Sociostat is social media posts tracking and analyzing tool for Instagram and Facebook to enable businesses make data driven decisions.",
      tech: ["Django","Supabase"],
      link: "https://sociostat.vercel.app/"
    },
    {
      title: "CountryOpedia",
      description: "CountryOpedia uses the REST countries API to showcase all the countries in the world with their up-to-date facts and flags.",
      tech: ["Vanilla"],
      link: "https://calebomondi.github.io/rest-countries-api/"
    }
  ];

export const techStack: TechStack = {
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    "Backend": ["Node.js", "Express.js", "Django", "PostgreSQL", "MySQL"],
    "Blockchain": ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Wagmi", "The Graph"],
    "Tools": ["Git", "VS Code", "Github", "Vercel", "Supabase"]
  };