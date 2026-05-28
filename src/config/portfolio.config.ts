import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import GmailIconRaw from "@assets/SVGs/Gmail.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
    title: "Prajyot J | Full Stack Developer",
    description: "Prajyot J is a full stack developer from Pune building practical web applications with a focus on clean UI, solid backend work, and reliable user experiences.",
    canonical: "https://chiragchrg.netlify.app/",
    googleSiteVerification: "YRAUUyc8TP4QJ1s53KAdLxcON9xifQf33BnLeP-F_5Y",
    keywords: "Prajyot J, Prajyot Jagtap, Full Stack Developer, Frontend Developer, Backend Developer, React Developer, Node.js Developer, TypeScript Developer, Web Developer, Portfolio, Pune, AISSMS IOIT",
    avatar: "https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Avatar.webp",
    siteUrl: "https://chiragchrg.netlify.app/",
}

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/prajyot_resume_react.pdf" // use full URL or Public Folder path
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Hi👋🏻 I’m",
    firstName: "Prajyot",
    lastName: "J.",
    position: "Full Stack Developer",
    tagLine: {
        prefixText: "I build",
        highlightedText: "useful web apps",
        suffixText: "across the stack."
    },
    avatar: Avatar_180,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/PrajyotJagtap12",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/prajyot-jagtap-225155302/",
            icon: LinkedinIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/prajyottt_12_?igsh=MWMwbHgzYmJkcnJveA==",
            icon: InstagramIconRaw
        },
        {
            label: "Email",
            url: "mailto:jagtapprajyot23@gmail.com",
            icon: GmailIconRaw
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    description: [
        "Hi, I'm Prajyot Jagtap — a Full Stack Developer from Pune, India, and a Computer Engineering graduate from AISSMS Institute of Information Technology.",
        "I specialize in building modern web applications using React for responsive, user-friendly interfaces and Spring Boot for secure, scalable backend services. I enjoy working across the entire stack, from designing intuitive user experiences to building robust APIs and managing databases.",
        "At Thynk Technology, I worked on real-world projects that strengthened my skills in frontend development, backend architecture, API integration, and full-stack application development.",
        "I'm passionate about creating practical solutions, continuously learning new technologies, and improving my craft. If a project solves a real problem, offers technical challenges, and creates value for users, I'm always excited to be part of it. 🚀"
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "Prajyot J | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/PrajyotJagtap12",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/prajyot-jagtap-225155302/",
            icon: LinkedinIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/prajyottt_12_?igsh=MWMwbHgzYmJkcnJveA==",
            icon: InstagramIconRaw
        },
        {
            label: "Email",
            url: "mailto:jagtapprajyot23@gmail.com",
            icon: GmailIconRaw
        }
    ],
    copyrightText: `© Copyright 2023-${new Date().getFullYear()} Prajyot J`
}

