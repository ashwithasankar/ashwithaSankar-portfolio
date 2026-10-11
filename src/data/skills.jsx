import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiGraphql,
  SiPython,
} from "react-icons/si";
import { FaVial } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const skills = [
  {
    title: "HTML5",
    description: "Semantic and accessible web development.",
    icon: FaHtml5,
  },
  {
    title: "CSS3",
    description: "Responsive layouts and modern styling.",
    icon: FaCss3Alt,
  },
  {
    title: "JavaScript",
    description: "Building dynamic and interactive applications.",
    icon: FaJsSquare,
  },
  {
    title: "React",
    description: "Modern component-based frontend development.",
    icon: FaReact,
  },
  {
    title: "Node.js",
    description: "Scalable backend application development.",
    icon: FaNodeJs,
  },
  {
    title: "Express.js",
    description: "REST API development and middleware.",
    icon: SiExpress,
  },
  {
    title: "MongoDB",
    description: "NoSQL database design and integration.",
    icon: SiMongodb,
  },
  {
    title: "MySQL",
    description: "Relational database management.",
    icon: SiMysql,
  },
  {
    title: "Bootstrap",
    description: "Responsive UI development.",
    icon: SiBootstrap,
  },
  {
    title: "Git & GitHub",
    description: "Version control and collaboration.",
    icon: FaGitAlt,
  },
  {
  title: "Playwright",
  description: "End-to-end testing and browser automation.",
  icon: FaVial,
},
  {
    title: "GraphQL",
    description: "API querying and data integration.",
    icon: SiGraphql,
  },
];

export default skills;