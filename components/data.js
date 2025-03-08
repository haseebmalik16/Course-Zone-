import { FaCode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

export const courses = [
    {
        id: "dsa",
        title: "Advance Data structure",
        icon: <FaCode color="#facc15" />,
    },
    {
        id: "python",
        title: "python full stack",
        icon: <FaPython color="#38bdf8" />,
    },
    {
        id: "java",
        title: "java full stack",
        icon: <FaJava color="#f97316" />,
    },
    {
        id: "mern",
        title: "mern full stack",
        icon: <FaReact color="#22c55e" />,
    },
    {
        id: "php",
        title: "php full stack",
        icon: <FaPhp color="#a855f7" />,
    },
    {
        id: "fetch",
        title: "fetch data (client)",
        icon: <FaCloudDownloadAlt color="#eab308" />,
    },
    {
        id: "server",
        title: "fetch data (server)",
        icon: <FaServer color="#ec4899" />,
    },
]

export const courseDetails = [
    {
        id: 1,
        title: "java full stack",
        duration: "6 months",
        level: "advance",
        projects: [
            { id: 101, title: "E-commerce website" },
            { id: 102, title: "Online banking system" },
            { id: 103, title: "job portal" },
            { id: 104, title: "library management system" },
        ],
    },
    {
        id: 2,
        title: "advance data structure - DSA",
        duration: "4 months",
        level: "intermediate",
        projects: [
            { id: 201, title: "file compression tool" },
            { id: 202, title: "data caching system" },
            { id: 203, title: "memory management simulator" },
            { id: 204, title: "graph-based social network" },
        ],
    },
    {
        id: 3,
        title: "mern full stack",
        duration: "5 months",
        level: "advance",
        projects: [
            { id: 301, title: "social media application" },
            { id: 302, title: "task management system" },
            { id: 303, title: "e-learning platform" },
            { id: 304, title: "real-time chat application" },
        ],
    },
    {
        id: 4,
        title: "python full stack",
        duration: "5 months",
        level: "intermediate",
        projects: [
            { id: 401, title: "blogging platform" },
            { id: 402, title: "weather forecast app" },
            { id: 403, title: "hospital management system" },
            { id: 404, title: "online quiz application" },
        ],
    },
    {
        id: 5,
        title: "php full stack",
        duration: "4 months",
        level: "basic",
        projects: [
            { id: 501, title: "portfolio website" },
            { id: 502, title: "event management system" },
            { id: 503, title: "CRM application" },
            { id: 504, title: "Inventory management system" },
        ],
    },
    {
        id: 6,
        title: "fetch data (client)",
        duration: "2 months",
        level: "basic",
        projects: [
            { id: 601, title: "fetch API with javascript" },
            { id: 602, title: "REST API Integration" },
            { id: 603, title: "GRAPHQL query client" },
            { id: 604, title: "real-time data fetching app" },
        ],
    },
    {
        id: 7,
        title: "fetch data (server)",
        duration: "3 months",
        level: "intermediate",
        projects: [
            { id: 701, title: "API server with node.js" },
            { id: 702, title: "server-side data caching" },
            { id: 703, title: "microservices data fetching" },
            { id: 704, title: "steaming data API" },
        ],
    },
]