import { Project, TechStack } from '../../types';

export const projects: Project[] = [
    {
      title: "FVP",
      description: "FVP is a financial management tool that allows digital asset holders to curb their impulsive spending behaviour by locking their assets and also promotes long-term saving in the Web3 space.",
      link: "https://fvp.finance/"
    },
    {
      title: "Korvbox",
      description: "Korvbox is simplified DeFi built on top of Morpho Protocol that allows anyone to earn yield on their USDC without needing deep DeFi technical knowledge. It allows everyone to benefit from the onchain economy",
      link: "https://korvbox.xyz/"
    }
];

export const upcomingProjects: Project[] = [
  {
    title: "Rare24 (Being built in public)",
    description: "A miniapp built on Farcaster and TBA that will enable creators to share their rare moments as NFTs which their followers can mint and later on resale in our inbuilt market place.",
    link: "https://x.com/blockyard1"
  }
];

export const techStack: TechStack = {
    "Frontend": ["React.js", "Next.js"],
    "Backend": ["Node.js", "Express.js", "Django"],
    "Containerization": ["Docker"],
    "Blockchain": ["Solidity", "Ethers.js", "Wagmi", "Viem",],
    "Tools": ["Git", "Foundry", "Remix", "Docker", "The Graph"],
};