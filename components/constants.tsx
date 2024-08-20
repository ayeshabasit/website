import SkillIcon from "@/public/icons/skill-icon";
import HassleFreeOnboarding from "@/public/icons/hassle-free-onboarding";
import DeadlineAssurance from "@/public/icons/deadline-assurance";
import CostEffectiveSolutions from "@/public/icons/cost-effective-solutions";

import Octilearn from "@/public/images/octilearn-1.png";
import Octilearn2 from "@/public/images/octilearn-2.png";
import BiaCare1 from "@/public/images/bia-care-01.png";
import BiaCare2 from "@/public/images/bia-care-02.png";
import CandidatePortal from "@/public/images/candidate-portal-01.png";
import MovieApp1 from "@/public/images/movie-app-01.png";
import MovieApp2 from "@/public/images/movie-app-02.png";
import Neuroverse1 from "@/public/images/neuroverse-01.png";
import Neuroverse2 from "@/public/images/neuroverse-02.png";
import Zensory1 from "@/public/images/zensory-01.png";
import Zensory2 from "@/public/images/zensory-02.png";
import ProjectTransparency from "@/public/icons/project-transparency";
import ReliableTalent from "@/public/icons/reliable-talent";

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

export const portfolio = [
  {
    title: "NextJS Web App",
    year: "2024",
    firstImage: Octilearn,
    secondImage: Octilearn2,
  },
  {
    title: "NextJS Web App & React Native Mobile App",
    year: "2022",
    firstImage: BiaCare1,
    secondImage: BiaCare2,
  },
  {
    title: "NextJS Web App",
    year: "2022",
    firstImage: CandidatePortal,
    secondImage: null,
  },
  {
    title: "React Native App",
    year: "2021",
    firstImage: MovieApp1,
    secondImage: MovieApp2,
  },
  {
    title: "React Native App",
    year: "2023",
    firstImage: Neuroverse1,
    secondImage: Neuroverse2,
  },
  {
    title: "React Native App",
    year: "2023",
    firstImage: Zensory1,
    secondImage: Zensory2,
  },
];
