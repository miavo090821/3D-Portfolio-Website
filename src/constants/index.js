import { pwc,aws,google,parttimejob } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    java,
    python,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
    title: "Technology Intern",
    company_name: "PricewaterhouseCoopers (PwC UK)",
    icon: pwc,
    iconBg: "#ffb500",
    date: "April 2024 - April 2024",
    points: [
        "Conducted a SWOT analysis for a slow-fashion, proposing solutions to improve business management, scalability, and customer engagement with sustainable products.",     
        "Suggested implementing an AR Try-on platform utilizing ARKit and AWS for improved customer engagement and streamlined logistics, leading to a 71% increase in consumer interaction and significant cost savings.",
        "Participated in client calls, gaining insights into PwC's professional services and how they add value to clients through collaboration and technology.",
        "Leveraged PwC's learning resources like Vantage, Her Tech Talent, learned about Large Language Models (LLMs), Machine Learning, and Artificial Intelligence, gaining insights into their applications and impacts on business solutions.",
    ],
    },
    {
        title: "Certificate: Google Machine Learning Engineer ",
        company_name: "Google",
        icon: google,
        iconBg: "#fbc3bc",
        date: "2024",
        points: [
            "Completed hands-on tasks involving Big Data and Big Query, demonstrating expertise in managing and analyzing large datasets.",
            "Developed and deployed machine learning models using Google Cloud, gaining practical experience with real-world AI applications.",
            "Engaged with generated AI tasks, showcasing proficiency in advanced AI techniques and their implementation in cloud environments.",
            "Learned to utilize Google Cloud's tools and services for efficient data processing and machine learning model deployment.",
            "Enhanced skills in data engineering, machine learning, and cloud computing through practical, project-based learning."
        ],
    },
    {
        title: "Microsoft Certified Azure Data Scientist Associate",
        company_name: "Microsoft",
        icon: aws,
        iconBg: "#b7e4c7",
        date: "2024",
        points: [
            "Applied machine learning techniques to implement and run workloads on Azure, demonstrating proficiency in cloud-based AI solutions.",
            "Gained hands-on experience with Azure's machine learning tools, including data preprocessing, model training, and deployment.",
            "Developed skills in using Azure Machine Learning Studio and other Azure services for end-to-end machine learning workflows.",
            "Learned to optimize machine learning models for performance and scalability in cloud environments.",
            "Enhanced understanding of Azure's infrastructure and services, enabling efficient management and deployment of machine learning projects."
        ],
    },
    {
        title: "Part-time jobs",
        company_name: "Diverse Workplaces",
        icon: parttimejob,
        iconBg: "#a2d2ff",
        date: "Jan 2019 - Present",
        points: [
            "Gained comprehensive business acumen by working in diverse part-time roles, understanding various business operations and strategies.",
            "Tailored services to meet client needs, demonstrating adaptability and a customer-focused approach in different job environments.",
            "Developed leadership and managerial skills by leading teams, organizing tasks, and ensuring efficient workflow in various settings.",
            "Balanced multiple part-time roles alongside academic commitments, reflecting strong time management and multitasking abilities."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/miavo090821',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/thi-minh-anh-vo-725bbb1a9/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full-stack Website Development_ my portfolio website',
        description: 'Build and deploy a 3D full-stack portfolio website using React.js and Three.js. This project involves deploying the website on a custom domain with hosting, and implementing 3D models into the website.',
        link: 'https://github.com/miavo090821',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Advanced Voice-Enabled Budget Tracker',
        description: 'Build a voice-enabled budget tracker while learning advanced React and JavaScript topics. This project covers state management using React Context API, saving data into Local Storage, creating a user interface with Material UI, and designing a scalable React folder structure. Additionally, it focuses on adding voice capabilities to applications using Speechly.',
        link: 'https://github.com/miavo090821',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'AI-Powered Podcast Website',
        description: 'Develop a podcast website with AI-powered features such as text-to-multiple-voices functionality and AI-generated images using Next.js 14 and Convex. This project leverages the OpenAI API to build a podcast platform with features like trending podcasts, user-generated content, interactive player, user management system with Clerk, and advanced search capabilities.',
        link: 'https://github.com/miavo090821',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full-Stack Cloud Storage Solution with AWS S3, Spring Boot & React',
        description: 'Built a full-stack application with Spring Boot and React.js that enables users to upload files to Amazon S3. This project involved integrating React.js on the frontend and Spring Boot 3 on the backend to create a RESTful API for file uploads. The application leverages AWS S3 for efficient storage solutions.',
        link: 'https://github.com/miavo090821',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '2D Mario Game in Java ',
        description: 'Developed a 2D Mario game in Java, featuring multiple levels and challenging gameplay. The game includes classic Mario elements such as coin collection, enemy encounters, and power-ups. Implemented various game mechanics like jumping, running, and collision detection to create an engaging player experience. Utilized object-oriented programming principles to design a scalable and maintainable game structure. Enhanced the game with visually appealing graphics and smooth animations.',
        link: 'https://github.com/miavo090821',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Apple Swift Challenge App',
        description: 'Developed the NailScope app for the Apple Swift Challenge, featuring real-time object detection using Apple Vision, AV, and Core ML models. Designed an intuitive UI/UX with Swift UI and Figma. Managed both frontend and backend functionalities, optimizing data management with CoreData. Focused on performance optimization and seamless user experience.',
        link: 'https://github.com/miavo090821',
    }
];