import SkillIcon from "@/public/icons/skill-icon";
import HassleFreeOnboarding from "@/public/icons/hassle-free-onboarding";
import DeadlineAssurance from "@/public/icons/deadline-assurance";
import CostEffectiveSolutions from "@/public/icons/cost-effective-solutions";
import ProjectTransparency from "@/public/icons/project-transparency";
import ReliableTalent from "@/public/icons/reliable-talent";

import octilearn from "@/public/images/Mockups/octilearn.png";
import atla from "@/public/images/Mockups/atla.png";
import biaCare from "@/public/images/Mockups/bia-care-mac-and-iphone.png";
import brain from "@/public/images/Mockups/brain.png";
import candidatePortal from "@/public/images/Mockups/candidate-portal.png";
import cumulus from "@/public/images/Mockups/Cumulus.png";
import movieApp from "@/public/images/Mockups/movie-app.png";
import neuroplan from "@/public/images/Mockups/neuroplan.png";
import seeium from "@/public/images/Mockups/Seeium.png";
import zensory from "@/public/images/Mockups/zensory.png";

export const skills = [
  {
    skillTitle: "Expert Management",
    skillDetail:
      "Benefit from a seasoned technical manager who bridges the gap between your business goals and technical execution.",
    skillIcon: <SkillIcon key="1" />,
  },
  {
    skillTitle: "Hassle-Free Onboarding",
    skillDetail:
      "Start working on your project immediately with our seamless developer onboarding process.",
    skillIcon: <HassleFreeOnboarding key="2" />,
  },
  {
    skillTitle: "Deadline Assurance",
    skillDetail:
      "Stay on track with our diligent management of timelines and deliverables, ensuring your project meets every deadline.",
    skillIcon: <DeadlineAssurance key="3" />,
  },
  {
    skillTitle: "Cost-Effective Solutions",
    skillDetail:
      "Access top-tier developers without breaking the bank, maximizing your startup's budget.",
    skillIcon: <CostEffectiveSolutions key="4" />,
  },
  {
    skillTitle: "Project Transparency",
    skillDetail:
      "Enjoy full transparency with regular updates and progress reports from your dedicated technical manager. We are happy to do pure formal scrum, keep communication completely free flowing, or anything in between.",
    skillIcon: <ProjectTransparency key="5" />,
  },
  {
    skillTitle: "Reliable Talent",
    skillDetail:
      "Trust in our pool of vetted, reliable developers who are ready to contribute from day one.",
    skillIcon: <ReliableTalent key="6" />,
  },
];

export const projects = [
  {
    slug: "string",
    description: "string",
    img: octilearn,
    name: "Octilearn",
    github: "string",
    technologies: ["React", "PostgreSQL", "AWS", "OpenAI"],
    industry: "EdTech",
    timeline: "Current",
  },
  {
    slug: "string",
    description: "string",
    img: cumulus,
    name: "Cumulus Labs",
    github: "string",
    technologies: ["NextJS", "Supabase", "AWS", "Stripe"],
    industry: "Social Media",
    timeline: "Current",
  },
  {
    slug: "string",
    description: "string",
    img: biaCare,
    name: "Bia Care",
    github: "string",
    technologies: ["NextJS", "Supabase", "React Native"],
    industry: "HealthTech",
    timeline: "2022",
  },

  {
    slug: "string",
    description: "string",
    img: candidatePortal,
    name: "Recruitment Portal",
    github: "string",
    technologies: ["NextJS", "Supabase", "Zoho"],
    industry: "Enterprise",
    timeline: "2023",
  },
  {
    slug: "string",
    description: "string",
    img: zensory,
    name: "The Zensory",
    github: "string",
    technologies: ["React Native", "Firebase", "React"],
    industry: "Mental Health",
    timeline: "2023",
  },
  {
    slug: "string",
    description: "string",
    img: neuroplan,
    name: "NeuroPlan",
    github: "string",
    technologies: ["React Native", "Firebase", "AWS"],
    industry: "HealthTech",
    timeline: "2023",
  },
  {
    slug: "string",
    description: "string",
    img: movieApp,
    name: "Movie App",
    github: "string",
    technologies: ["React Native"],
    industry: "Entertainment",
    timeline: "2022",
  },
  {
    slug: "string",
    description: "string",
    img: brain,
    name: "Brain",
    github: "string",
    technologies: ["Webflow"],
    industry: "ISP",
    timeline: "2024",
  },
  {
    slug: "string",
    description: "string",
    img: seeium,
    name: "Seeium",
    github: "string",
    technologies: ["React Native", "NextJS"],
    industry: "Travel",
    timeline: "2024",
  },
  {
    slug: "string",
    description: "string",
    img: atla,
    name: "Atla",
    github: "string",
    technologies: ["Webflow"],
    industry: "Textile",
    timeline: "2022",
  },
];
