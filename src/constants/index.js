import { meta, shopify, starbucks, tesla } from "../assets/images";

import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  linkedin,
  twitter,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  arrow,
  contact,
  soundon,
  soundoff,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Version Control",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "nodejs",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "redux",
    type: "frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "tailwind",
    type: "frontend",
  },
];

export const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "Throughbit Technologies Private Limited",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2023 - Current",
    points: [
      "Developed and maintained web applications using React, HTML, and CSS.",
      "Integrated various APIs to enhance application functionality and improve user experience.",
      "Collaborated with design teams to implement responsive and accessible UI components.",
      "Conducted testing using Jest and React Testing Library to ensure application stability and performance.",
      "Deployed applications using Netlify,Vercel ensuring quick and seamless releases.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/muralirajCSE29",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/murali-raj-82b74b122/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Marma Chat App",
    decription:
      "Chat App build for Internal Chatting Conversation.. Works on Login,Sign Up,Profile Setting Components with responsive",
    link: "https://marma-chatapp.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "The MemeTv",
    decription:
      "MemeTv is a Web 3.0 project that user watch videos and collect tokens- Works on TV UI,TV Button Functionalities,Glitch,Animations,API Integrations,Deployment ",
    link: "https://www.thememe.tv/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Coindiary",
    decription:
      "Web 3.0 Projects works on Users Onboarding screen,Google Login, Resposnive for all devices",
    link: "https://www.coindiary.com",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "Hackathon",
    decription: "Hackathon Static Website",
    link: "https://hackathon-website-sigma.vercel.app/",
  },
];
