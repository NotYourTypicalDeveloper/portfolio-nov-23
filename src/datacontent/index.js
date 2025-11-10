import {
  bauermedialogo,
  bikeclublogo,
  bikeclubscreenshot,
  chakraUI,
  chatbotcreenshot,
  contactformscreenshot,
  css,
  FEdevicon,
  figma,
  formebikescreenshot,
  git,
  graphql,
  html,
  javascript,
  jest,
  nextjs,
  pingicon,
  powerautomate,
  reactjs,
  RPAicon,
  sharepoint,
  sharepointwheel,
  tailwind,
  typescript,
  vpostits_screenshot,
  WebAppicon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Applications Developer",
    icon: WebAppicon,
  },
  {
    title: "Front End Developer",
    icon: FEdevicon,
  },
  {
    title: "RPA automation",
    icon: RPAicon,
  },
  {
    title: "League Table tennis player",
    icon: pingicon,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Sharepoint",
    icon: sharepoint,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Power Automate",
    icon: powerautomate,
  },
  {
    name: "GraphQl",
    icon: graphql,
  },
  {
    name: "Chakra UI",
    icon: chakraUI,
  },
  {
    name: "Jest",
    icon: jest,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Bike Club",
    icon: bikeclublogo,
    iconBg: "#383E56",
    date: "From April 2022",
    points: [
      "Greenfield project",
      "Rebuild of our e-commerce site from the ground-up on frontend side using modern framework and following Agile methodologies",
      "Development of existing and brand new features",
      "Styling / fully responsive design matching Figma designs",
      "Connection to various APIs to integrate external data in and out of the site",
      "Unit Testing",
    ],
  },
  {
    title: "Web Applications Developer",
    company_name: "Bauer Media Group",
    icon: bauermedialogo,
    iconBg: "#E6DEDD",
    date: "April 2019 - April 2022",
    points: [
      "Full-stack development and customization of numerous SharePoint business web applications - on both online #365 and on-premise, from A to Z.",
      "Front-end coding",
      "Robotic Process Automation: Approval workflows & automated tasks (Power Automate)",
      "Maintenance, bug fixes",
      "Configuration",
      "UX/UI design",
      "Sites / servers administration, user permissions",
      "Data migration",
      "Enhancement of existing projects",
      "Back end coding (light exposure to C#, Powershell)",
      "IT support",
    ],
  },
];

const projects = [
  {
    name: "Bike Club",
    description:
      "2022- 2024: Rebuilt from scratch of the Bike Club's existing e-commerce platform using a substantial and modern FE tech stack, establishing various API connections to retrieve data from different end points",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
      {
        name: "graphQl",
        color: "orange-text-gradient",
      },
    ],
    image: bikeclubscreenshot,
    source_code_link: "",
    live_site_link: "https://bikeclub.com",
  },
  {
    name: "Forme Bikes",
    description:
      "2023: Independently developed, and architected the landing page for Forme Bikes using React Server Components, handling the entire process from start to finish without supervision.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs-14",
        color: "green-text-gradient",
      },
      {
        name: "pandaCSS",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
      {
        name: "graphQl",
        color: "orange-text-gradient",
      },
    ],
    image: formebikescreenshot,
    source_code_link: null,
    live_site_link: "https://forme-bikes.vercel.app/",
  },
  {
    name: "Chatbot",
    description:
      "2023: Personal project. Customized chatbot/virtual assistant to reply to screening questions from recruiters, and non-work-related conversations. The chatbot provides diverse menus and clickable option tags for user interaction, as well as open-ended questions.",
    tags: [
      {
        name: "react-simple-chatbot",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatbotcreenshot,
    source_code_link:
      "https://github.com/NotYourTypicalDeveloper/carolineVirtualAssistant",
    live_site_link:
      "https://notyourtypicaldeveloper.github.io/carolineVirtualAssistant/",
  },
  {
    name: "Job contact form",
    description:
      "2023: Personal project. Multi-step contact form tailored for recruiters, companies, enabling the straightforward submission of job specifications directly to my Gmail inbox. Boasting user-friendly features: navigation buttons, a graphical progress bar, and diverse input types",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "nodemailer",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: contactformscreenshot,
    source_code_link:
      "https://github.com/NotYourTypicalDeveloper/job-contact-form",
    live_site_link: "https://job-contact-form.vercel.app/",
  },
  {
    name: "Virtual Post-its",
    description:
      "2024: Personal project, desktop only web app that mimics real sticky notes with drag-and-drop functionality, along with display of weather forecast. Features include note creation, editing, archiving, bulk actions, keyboard shortcuts, persistent local storage, Weather forecast widget by desired city. Not suitable for mobiles.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React-toastify",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "OpenWeatherMap",
        color: "purple-text-gradient",
      },
    ],
    image: vpostits_screenshot,
    source_code_link:
      "https://github.com/NotYourTypicalDeveloper/virtual-postit",
    live_site_link: "https://virtual-postit.vercel.app/",
  },
  {
    name: "SharePoint business applications",
    description:
      "2019-2022: End-to-end development, maintenance, and optimization of business web applications built on SharePoint, seamlessly integrated with Microsoft 365 services, automation workflows, and communication systems.",
    tags: [
      {
        name: "PowerAutomate",
        color: "purple-text-gradient",
      },
      {
        name: "SharePoint",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "ASP.net",
        color: "orange-text-gradient",
      },
    ],
    image: sharepointwheel,
    source_code_link: null,
    live_site_link: null,
  },
];

export { experiences, projects, services, technologies };
