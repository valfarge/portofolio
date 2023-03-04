// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Valentin FARGE",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/valentin-farge-23b18a9b/",
  github: "https://github.com/valfarge",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Freelance`,
    Location: "France",
    Type: "Full Time",
    Duration: "Mars 2021 - Present",
  },
  {
    Position: "Banker",
    Company: `Société Générale`,
    Location: "France",
    Type: "CDI",
    Duration: "2021 - 2022",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Developer Web",
    Company: `Openclassrooms Paris`,
    Location: "France",
    Type: "Full Time",
    Duration: "Jun 2022 - Mar 2023",
  },
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "BTS MUC",
    Company: `Joliot Curie`,
    Location: "France",
    Type: "Full Time",
    Duration: "2015 - 2017 ",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Kasa",
    image: projectImage1,
    description: `Création d'une application web de location immobilière avec React`,
    techstack: "HTML/CSS, JavaScript, React",
    previewLink: "https://candid-duckanoo-026033.netlify.app",
    githubLink: "https://github.com/valfarge/Kasa",
  },
  {
    title: "HotTakes",
    image: projectImage2,
    description: `Construire une API sécurisée pour une application d'avis gastronomiques`,
    techstack: "HTML/CSS, JavaScript, MongoDB",
    previewLink: "https://incomparable-praline-b071d7.netlify.app",
    githubLink: "https://github.com/valfarge/HotTakes",
  },
  {
    title: "API wikipedia",
    image: projectImage3,
    description: `Création d'une API web avec wikipedia, avec mise en place de loader `,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://valfarge.github.io/API-Wikipedia/",
    githubLink: "https://github.com/valfarge/API-Wikipedia",
  },
  {
    title: "Site Ecommerce",
    image: projectImage4,
    description: `Exécution de la partie front-end d'un site Ecommerce de canapé`,
    techstack: "HTML/CSS, JavaScript",
    githubLink: "https://github.com/valfarge/P5",
  },
  {
    title: "ohMyFood",
    image: projectImage5,
    description: `Projet de maquette style Figma avec uniquement HTML/CSS avec animation`,
    techstack: "HTML/CSS",
    previewLink: "https://curious-starlight-e9811a.netlify.app/index.html",
    githubLink: "https://github.com/valfarge/OhMyFood-project",
  },
  {
    title: "Quiz",
    image: projectImage6,
    description: `Mise en place d'un quiz de 5 questions avec du JS vanilla`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://elaborate-fox-2100ad.netlify.app",
    githubLink: "https://github.com/valfarge/Quizz",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "val.farge@icloud.com",
  phone: "+33 6 61 97 11 92",
};
