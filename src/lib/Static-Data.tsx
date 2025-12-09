import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Cakeryimg from "@/assets/images/cakeryimg.png";
import darksaaslandingpage from "@/assets/images/dark-saas-landing-page.png";

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "SOFTON LTD",
    year: "2025 - Present",
    description: [
      "Developed full-stack web applications using MERN stack, ensuring responsiveness and optimized performance.",
      "Implemented complex UI features in React.js and Next.js, improving user engagement.",
      "Integrated RESTful APIs with secure authentication using JWT",
    ],
  },
  {
    role: "MERN Stack Developer Intern ",
    company: "NETSOL Technologies",
    year: "2024",
    description: [
      "Contributed to frontend development using React.js, Bootstrap, and CSS3",
      "Collaborated with backend developers to integrate APIs and handle data with MongoDB.",
      "Improved UI/UX design and optimized code for better performance",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Science (MCS)",
    institution: "Gomal University",
    description:
      "I completed my Master of Computer Science from Gomal University, where I focused on advanced programming, software development, and modern web technologies. During my studies, I worked on practical projects that improved my understanding of real-world problem solving and system design.",
  },
  {
    degree: "Intermediate in computer science",
    institution: "Punjab College",
    description:
      "I completed my Intermediate in Computer Science from Punjab College, where I built a strong foundation in programming, databases, and computer fundamentals. During this time, I developed an interest in software development and strengthened my problem-solving skills",
  },
  // {
  //   degree: "Matric",
  //   institution: "Oxford Public School",
  //   description:
  //     "Studied mathematics, physics, and computer science. Participated in science exhibitions and developed software using Visual Basic and C++.",
  // },
];

export const summary = `I am a passionate MERN Stack Developer with hands-on experience in building responsive, scalable, and user-friendly web applications. Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and modern UI frameworks like Tailwind CSS and Material UI, I focus on writing clean, efficient, and maintainable code.

Currently working at Softon Ltd., I have contributed to multiple real-world projects, including e-commerce platforms, admin dashboards, and backend APIs. My work involves developing reusable components, integrating RESTful APIs, optimizing performance, and ensuring cross-browser compatibility.`;

export const ProtfolioProjects = [
  {
    company: "SOFTON LTD",
    year: "2025",
    title: "The Cakery",
    link: "https://thecakery.uk/",
    techStack: "Next.js, TypeScript, Tailwind CSS, MongoDB, Cloudinary",
    result: [
      { title: "Responsive React/Next.js UI" },
      { title: "Optimized APIs & MongoDB" },
      { title: "Boosted performance and speed" },
    ],
    fullDetails: [
      {
        title: "Designed a dynamic e-commerce cake store.",
      },
      {
        title: "Built an admin panel for product management.",
      },
      {
        title: "Integrated secure payment processing.",
      },
      {
        title: "Implemented image optimization and responsive UI.",
      },
      // {
      //   title: "Enhanced SEO performance using server-side rendering.",
      // },
      // {
      //   title:
      //     "Integrated SSO (Single Sign-On) for seamless branch admin login.",
      // },
      // {
      //   title:
      //     "Optimized APIs and improved frontend performance across all panels.",
      // },
    ],
    image: Cakeryimg,
  },

  {
    company: "SOFTON LTD",
    year: "2025",
    title: "NUR International University",
    result: [
      { title: "Developed reusable UI components" },
      { title: "Created multiple dashboard routes" },
      { title: "Optimized page loading speed" },
    ],
    fullDetails: [
      {
        title: "Built a responsive university admin dashboard.",
      },
      {
        title: "Created multiple dashboard routes with React Query.",
      },
      {
        title: "Developed UI components to maintain design.",
      },
      {
        title: "Integrated dynamic content fetching for events.",
      },
      // {
      //   title:
      //     "Optimized page loading speed and ensured cross-browser compatibility.",
      // },
      // {
      //   title:
      //     "Optimized APIs and improved frontend performance across all panels.",
      // },
    ],
    link: "",
    image: lightSaasLandingPage,
  },
  {
    company: "SOFTON LTD",
    year: "2025",
    title: "Reputly AI",
    result: [
      { title: "Developed backend APIs" },
      { title: "Designed database schemas" },
      { title: "Integrated authentication" },
    ],
    fullDetails: [
      {
        title: "Developed backend APIs for managing user profiles.",
      },
      {
        title: "Designed database schemas & implemented indexing.",
      },
      {
        title: "Built product filters, dynamic data fetching.",
      },
      {
        title: "Integrated authentication & role-based access control",
      },
      // {
      //   title: "Optimized API endpoints, reducing server response time by 30%.",
      // },
      // {
      //   title:
      //     "Collaborated with frontend team to ensure smooth data integration.",
      // },
      // {
      //   title:
      //     "Optimized APIs and improved frontend performance across all panels.",
      // },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
  {
    company: "Freelance",
    year: "2025",
    title: "Voice Mart",
    result: [
      { title: "Built a full-stack marketplace platform" },
      { title: "Integrated user authentication" },
      { title: "Implemented secure payment" },
    ],
    fullDetails: [
      {
        title: "Built a full-stack marketplace platform.",
      },
      {
        title: "Developed advanced search and filter features.",
      },
      {
        title: "Integrated user authentication & profile management.",
      },
      {
        title: "Designed responsive UI for seamless experience.",
      },
      // {
      //   title: "Implemented secure payment and order management system",
      // },
      // {
      //   title:
      //     "Integrated SSO (Single Sign-On) for seamless branch admin login.",
      // },
      // {
      //   title:
      //     "Optimized APIs and improved frontend performance across all panels.",
      // },
    ],
    link: "",
    image: darksaaslandingpage,
  },
];
