// What We Offer Icons
import SkillIcon from "@/public/icons/skill-icon";
import HassleFreeOnboarding from "@/public/icons/hassle-free-onboarding";
import DeadlineAssurance from "@/public/icons/deadline-assurance";
import CostEffectiveSolutions from "@/public/icons/cost-effective-solutions";
import ProjectTransparency from "@/public/icons/project-transparency";
import ReliableTalent from "@/public/icons/reliable-talent";

// Mockups
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

// Demos GIFS
import octilearnDemo from "@/public/images/octilearn_demo.gif";
import cumulusDemo from "@/public/images/demo-cumulus.gif";
import biaCareDemo from "@/public/images/bia-care-01.png";
import recruitmentPortalDemo from "@/public/images/recruitment_demo.gif";
import zensoryDemo from "@/public/images/zensory_demo.gif";
import neuroverseDemo from "@/public/images/neuroverse_demo.gif";
import movieAppDemo from "@/public/images/movie_app_demo.gif";
import brainDemo from "@/public/images/brain_demo.png";
import seeiumDemo from "@/public/images/seeium_demo.gif";
import atlaDemo from "@/public/images/atla_demo.png";

// Technology Icons
import AWS from "@/public/icons/aws";
import Express from "@/public/icons/express-js";
import Firebase from "@/public/icons/firebase";
import NextJS from "@/public/icons/next-js";
import NGINX from "@/public/icons/nginx";
import ReactJS from "@/public/icons/react-js";
import ReactNative from "@/public/icons/react-native";
import Supabase from "@/public/icons/supabase";

import type { Project } from "./project-card";
import Webflow from "@/public/icons/webflow";
import { ReactElement } from "react";

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
    slug: "octilearn",
    description: "string",
    img: octilearn,
    name: "Octilearn",
    github: "string",
    technologies: ["React", "PostgreSQL", "AWS", "OpenAI"],
    industry: "EdTech",
    timeline: "Current",
  },
  {
    slug: "cumulus_labs",
    description: "string",
    img: cumulus,
    name: "Cumulus Labs",
    github: "string",
    technologies: ["NextJS", "Supabase", "AWS", "Stripe"],
    industry: "Social Media",
    timeline: "Current",
  },
  {
    slug: "bia_care",
    description: "string",
    img: biaCare,
    name: "Bia Care",
    github: "string",
    technologies: ["NextJS", "Supabase", "React Native"],
    industry: "HealthTech",
    timeline: "2022",
  },

  {
    slug: "recruitment_portal",
    description: "string",
    img: candidatePortal,
    name: "Recruitment Portal",
    github: "string",
    technologies: ["NextJS", "Supabase", "Zoho"],
    industry: "Enterprise",
    timeline: "2023",
  },
  {
    slug: "the_zensory",
    description: "string",
    img: zensory,
    name: "The Zensory",
    github: "string",
    technologies: ["React Native", "Firebase", "React"],
    industry: "Mental Health",
    timeline: "2023",
  },
  {
    slug: "neuro_plan",
    description: "string",
    img: neuroplan,
    name: "NeuroPlan",
    github: "string",
    technologies: ["React Native", "Firebase", "AWS"],
    industry: "HealthTech",
    timeline: "2023",
  },
  {
    slug: "movie_app",
    description: "string",
    img: movieApp,
    name: "Movie App",
    github: "string",
    technologies: ["React Native"],
    industry: "Entertainment",
    timeline: "2022",
  },
  {
    slug: "brain",
    description: "string",
    img: brain,
    name: "Brain",
    github: "string",
    technologies: ["Webflow"],
    industry: "ISP",
    timeline: "2024",
  },
  {
    slug: "seeium",
    description: "string",
    img: seeium,
    name: "Seeium",
    github: "string",
    technologies: ["React Native", "NextJS"],
    industry: "Travel",
    timeline: "2024",
  },
  {
    slug: "atla",
    description: "string",
    img: atla,
    name: "Atla",
    github: "string",
    technologies: ["Webflow"],
    industry: "Textile",
    timeline: "2022",
  },
];

export const projectsDictionary: { [key in string]: Project } = {
  octilearn: {
    slug: "octilearn",
    intro:
      "An adaptive e-learning platform for IGCSE Students. Leverages AI, has simulations, assessments, personalized notes, and flashcards.",
    description:
      "Through a comprehensive overhaul, we transformed Octilearn's platform into a high-performing, secure, and feature-rich system. By addressing both performance and security concerns, and fixing critical bugs, we positioned Octilearn for sustained growth and success.",
    img: octilearnDemo,
    name: "Octilearn",
    github: "string",
    technologies: ["React", "PostgreSQL", "AWS", "OpenAI"],
    industry: "EdTech",
    timeline: "Current",
    url: "https://app.octilearn.com/",
    isMobile: false,
  },
  cumulus_labs: {
    slug: "cumulus_labs",
    intro:
      "A memorialization platform designed to preserve our deceased loved ones' digital assets",
    description:
      "We implemented video streaming, uploading, overhauled their database schema, and fixed numerous issues with their web app",
    img: cumulusDemo,
    name: "Cumulus Labs",
    github: "string",
    technologies: ["NextJS", "Supabase", "AWS", "Stripe"],
    industry: "Social Media",
    timeline: "Current",
    url: "https://app.cumulus.world/login",
    isMobile: false,
  },
  bia_care: {
    slug: "bia_care",
    intro:
      "An online menopause clinic to support people going through menopause with group calls, doctor consultations, symptom tracking, and readily available HRT treatment.",
    description:
      "We implemented their chat app and symptom tracker with React Native. We also created a user facing web app with a beautiful dashboard and a powerful admin panel",
    img: biaCareDemo,
    name: "Bia Care",
    github: "string",
    technologies: ["NextJS", "Supabase", "React Native"],
    industry: "HealthTech",
    timeline: "2022",
    isMobile: false,
  },
  recruitment_portal: {
    slug: "recruitment_portal",
    intro: "A NextJS and Zoho Recruit based web app",
    description:
      "Automatically picked up applications from Zoho Recruit and displayed them in a comprehensive dashboard for applicants along with email notifications.",
    img: recruitmentPortalDemo,
    name: "Recruitment Portal",
    github: "string",
    technologies: ["NextJS", "Supabase", "Zoho"],
    industry: "Enterprise",
    timeline: "2023",
    isMobile: false,
  },
  the_zensory: {
    slug: "the_zensory",
    img: zensoryDemo,
    intro:
      "A mental health platform designed to provide users with tools for mindfulness and relaxation through personalized sensory experiences.",
    description:
      "The Zensory app offers a unique approach to mental health by combining technology with sensory-based relaxation techniques. We developed a mobile solution that delivers a soothing, user-friendly experience, ensuring seamless interactions across both iOS and Android platforms.",
    name: "The Zensory",
    github: "string",
    technologies: ["React Native", "Firebase", "React"],
    industry: "Mental Health",
    url: "https://apps.apple.com/us/app/the-zensory/id1582845981",
    timeline: "2023",
    isMobile: true,
  },
  neuro_plan: {
    slug: "neuro_plan",
    intro:
      "A comprehensive health app aimed at improving cognitive performance through personalized brain training.",
    description:
      "NeuroPlan is a HealthTech application designed to provide users with personalized brain training exercises. We architected the platform for scalability and reliability, using Firebase and AWS to handle large volumes of data securely and efficiently.",
    img: neuroverseDemo,
    name: "NeuroPlan",
    github: "string",
    technologies: ["React Native", "Firebase", "AWS"],
    industry: "HealthTech",
    url: "https://apps.apple.com/us/app/neuroplan/id1458068817",
    timeline: "2023",
    isMobile: true,
  },
  movie_app: {
    slug: "movie_app",
    intro:
      "A dynamic mobile app that offers users a way to search and view movies from the free online movie database.",
    description:
      "The Movie App provides an engaging user experience with personalized movie recommendations and reviews. We optimized the app for both Android and iOS, ensuring fast load times and smooth navigation for all users.",
    img: movieAppDemo,
    name: "Movie App",
    github: "string",
    technologies: ["React Native"],
    industry: "Entertainment",
    timeline: "2022",
    isMobile: true,
  },
  brain: {
    slug: "brain",
    intro:
      "An ISP platform designed to provide seamless internet service management for users across Pakistan.",
    description:
      "Brain is a comprehensive ISP platform we helped optimize for performance and scalability. The platform allows users to manage their internet services efficiently while providing a smooth and responsive user interface.",
    img: brainDemo,
    name: "Brain",
    github: "string",
    technologies: ["Webflow"],
    industry: "ISP",
    timeline: "2024",
    url: "https://www.brain.net.pk/",
    isMobile: false,
  },
  seeium: {
    slug: "seeium",
    intro:
      "A next-gen travel app that offers users personalized itineraries and travel recommendations.",
    description:
      "Seeium transforms the travel experience by providing users with curated itineraries based on their preferences. The mobile app is optimized for seamless performance across different devices, enhancing the user journey from planning to execution.",
    img: seeiumDemo,
    name: "Seeium",
    github: "string",
    technologies: ["React Native", "NextJS"],
    industry: "Travel",
    timeline: "2024",
    isMobile: true,
  },
  atla: {
    slug: "atla",
    intro:
      "A textile industry platform aimed at simplifying B2B transactions and streamlining operations.",
    description:
      "Atla is a platform built to facilitate smooth B2B transactions in the textile industry. With a robust Webflow-based frontend, we ensured the platform could handle complex operations while maintaining a simple, intuitive user interface.",
    img: atlaDemo,
    name: "Atla",
    github: "string",
    technologies: ["Webflow"],
    industry: "Textile",
    timeline: "2022",
    isMobile: false,
  },
};

export const technologyIcons: { [key in string]: ReactElement } = {
  AWS: <AWS />,
  Express: <Express />,
  Firebase: <Firebase />,
  NextJS: <NextJS />,
  NGINX: <NGINX />,
  React: <ReactJS />,
  "React Native": <ReactNative />,
  Supabase: <Supabase />,
  Webflow: <Webflow />,
};
