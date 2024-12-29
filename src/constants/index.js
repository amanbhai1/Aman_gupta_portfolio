import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiPhpmyadmin,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1_rwDAU56m-MJLSyaSTknPC_2_IterDOA/view?usp=sharing";
export const repoLink = "#";

export const callToAction = "https://www.linkedin.com/in/aman-gupta-a11a672ab";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];     


// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: "gla_university_icon", // Replace with the actual icon for GLA University
    title: "GLA University, Mathura",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2021 - 2024",
    content1: "CGPA: 8.27/10",
    content2: "Major: Computer Applications",
  },
  {
    id: "education-2",
    icon: "veer_abdul_hameed_icon", // Replace with the actual icon for Veer Abdul Hameed Inter College
    title: "Veer Abdul Hameed Inter College, Sikandra Rao",
    degree: "Intermediate",
    duration: "May 2020",
    content1: "64%",
    content2: "Stream: Science",
  },
  {
    id: "education-3",
    icon: "veer_abdul_hameed_icon", // Replace with the actual icon for Veer Abdul Hameed Inter College
    title: "Veer Abdul Hameed Inter College, Sikandra Rao",
    degree: "High School",
    duration: "May 2018",
    content1: "86.16%",
    content2: "Stream: Science",
  },
  {
    id: "education-4",
    icon: "sikandra_rao_icon", // Replace with the actual icon for M.DOPP
    title: "G.K.I.I.T, Sikandra Rao",
    degree: "Master Diploma in Computer Professional Publishing (M.DOPP)",
    duration: "June 2019",
    content1: "83%",
    content2: "",
  },
];


// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "Hackvision 2024",
    position: "1st Position",
    content1: "Secured 1st place in the Hackvision 2024 competition at GLA University.",
    content2: "Developed the 'Grow Together' web application for collaborative learning.",
    content3: "Built using the MERN stack with features like user groups, chatbots, collaborative document editing, live video sessions, and progress tracking.",
    article: "https://example.com/hackvision2024", // Replace with actual link
    project: "https://devfolio.co/projects/grow-together",
    youtube: "https://youtu.be/examplelink", // Replace with actual link
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Hackspace@GLA (Abacus, GLA)",
    position: "Participated",
    content1: "Competed in Hackspace@GLA (Abacus, GLA) in February 2024.",
    content2: "",
    content3: "",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "BCA-O-CRATES, GLA",
    position: "Participant",
    content1: "Participated in the BCA-O-CRATES competition at GLA University in November 2023.",
    content2: "",
    content3: "",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "Quiz Competition on Nutrition Day, GLA",
    position: "Participant",
    content1: "Competed in the Quiz Competition on Nutrition Day at GLA University in October 2023.",
    content2: "",
    content3: "",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Internal Smart India Hackathon, GLA University",
    position: "Participant",
    content1: "Participated in the Internal Smart India Hackathon at GLA University in August 2024.",
    content2: "",
    content3: "",
  },
  {
    id: "a-6",
    icon: icon,
    event: "Hackvision 2024",
    position: "1st Position",
    content1: "Secured 1st place in Hackvision 2024 at GLA University, working on the 'Grow Together' project.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/grow-together", // Replace with actual project link
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "Hackvision 2024",
    position: "Winner",
    content1: "Winner in Hackvision 2024 with the 'Grow Together' project.",
    content2: "Collaborative learning platform developed using MERN stack.",
    content3: "Successfully built a platform for students and professionals to learn and collaborate.",
  },
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPhpmyadmin,
        name: "PhpMyAdmin",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "NodeJS",
      },
      {
        id: "f-2",
        icon: SiReact,
        name: "ExpressJS",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Cloud Quest",
    logo: "cloud-quest-logo.png", // Replace with the correct logo file path
    link: "https://cloudquest.io/", // Replace with the actual URL if available
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Jul 2024 - Present",
        content: [
          {
            text: "Building secure RESTful APIs using MERN stack (MongoDB, Express.js, React.js, Node.js).",
            link: "",
          },
          {
            text: "Collaborating with teams to design, test, and deploy innovative features.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "GLA University",
    logo: "gla-logo.png", // Replace with the correct logo file path
    link: "https://www.gla.ac.in/",
    positions: [
      {
        title: "Hackathon Participant (Smart India Hackathon - RoutePulse)",
        duration: "Aug 2024",
        content: [
          {
            text: "Backend Lead for the RoutePulse project, focusing on automatic bus scheduling and route management.",
            link: "",
          },
          {
            text: "Developed APIs and managed server-side logic for optimal route generation.",
            link: "",
          },
        ],
      },
      {
        title: "Hackathon Participant (Hackvision 2024 - Grow Together)",
        duration: "Nov 2024",
        content: [
          {
            text: "Collaborated on the development of a collaborative learning platform using the MERN stack.",
            link: "",
          },
          {
            text: "Integrated features like live video sessions, chatrooms, and a collaborative document editor.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Freelance",
    logo: "freelance-logo.png", // Replace with the correct logo file path
    link: "",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "Feb 2024 - Jul 2024",
        content: [
          {
            text: "Developed a Student Management System for managing student data using HTML, CSS, PHP, and SQL.",
            link: "",
          },
          {
            text: "Integrated secure database management with PhpMyAdmin for seamless data operations.",
            link: "",
          },
        ],
      },
    ],
  },
];


// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "GreenTrust",
    github: "https://github.com/mittal-parth/GreenTrust",
    link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Winning project at 3 hackathons, GreenTrust offers a novel solution for obtaining certification in organic farming by organizing credible and decentralized Participatory Guarantee Systems (PGSs).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-6",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-3",
    title: "ChargeSwap",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      "A Blockchain-based EV-Battery swapping solution - winning project at ETHIndia'22, the world's largest Ethereum Hackathon",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiSolidity,
        name: "Solidity"
      },
      {
        id: "icon-5",
        icon: FaHardHat,
        name: "HardHat"
      },
      {
        id: "icon-6",
        icon: SiIpfs,
        name: "IPFS"
      },
      {
        id: "icon-7",
        icon: SiArduino,
        name: "Arduino"
      },
      {
        id: "icon-8",
        icon: IoIosNotificationsOutline,
        name: "Push Protocol"
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Non-Teaching Recruitment Portal, NITK",
    github: "",
    link: "http://recruitment.nitk.ac.in/",
    image: recruitment,
    content:
      "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
    ],
  },
  {
    id: "project-6",
    title: "Career Development Centre, NITK Website",
    github: "",
    link: "http://cdc.nitk.ac.in/",
    image: cdc,
    content:
      "The official website of CDC, NITK with a custom built CMS.",
    stack: [
      {
        id: "icon-1",
        icon: SiRubyonrails,
        name: "Ruby on Rails"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
    ],
  },
  {
    id: "project-7",
    title: "Huntly",
    github: "",
    link: "https://devfolio.co/projects/huntly-b5a9",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit"
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-8",
    title: "Cluboard",
    github: "https://github.com/mittal-parth/Cluboard",
    link: "",
    image: cluboard,
    content:
      "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Minimiser",
    github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
    link: "https://minimise-cash-flow.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "www.linkedin.com/in/aman-gupta-a11a672ab",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/amanbhai1",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:amangupta121@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/aman_gupta1092/?next=%2Fbluegodzi%2Ftagged%2F&locale=%E5%9C%A8%E7%BA%BF%E5%AE%9A%E5%88%B6%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6TEF%E8%AF%81%E4%B9%A6%E8%81%94%E7%B3%BB%7B%E5%A8%81%E4%BF%A1%2BTG%2F%E9%A3%9E%E6%9C%BA%3A%40buth2788%7DsjwNH%3F%3F%3F%3F%3F%3F%D1%A7%3F%3F%C6%BESwQuO",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Aman Gupta",
  githubUsername: "amanbhai1",
  tagLine: "Full Stack Developer | Hackathon Winner | BCA '26 | Tech Enthusiast",
  intro: `
      I am a dedicated Full Stack Developer specializing in the MERN stack, with a passion for crafting innovative web applications. 
      My project 'Grow Together' secured the top position at Hackvision 2024, showcasing my ability to deliver impactful solutions.

      Currently pursuing a BCA at GLA University (CGPA: 8.27/10), I have gained expertise in building secure APIs, managing databases, and collaborating effectively with teams. 
      As a Full Stack Developer Intern at Cloud Quest, I have hands-on experience in creating scalable web applications.

      With a focus on solving real-world challenges, I continuously strive to leverage cutting-edge technologies and enhance my craft.
  `
};


// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];