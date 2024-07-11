import acd from "./images/academics.png";
import arVr from "./images/ar,vr.jpeg";
import bio from "./images/bioengineering.jpg";
import blockchain from "./images/blockchain.jpeg";
import cybersecurity from "./images/cybersecurity.jpeg";
import DE from "./images/data engineering.jpeg";
import DS from "./images/data science.jpeg";
import EC from "./images/edge computing.jpeg";
const myths = [
    {
        img :  "artificial intelligence.avif",
        ques : "Artificial Intelligence",
        link : "/ai",
        events: [
            { name: "AI Workshop", date: "2024-12-28", link: "https://techfest.org/workshops/artificial%20intelligence", location: "IIT Bombay" },
            { name: "A 5-Day AI & ML Workshop", date: "2024-07-28", link: "https://www.knowafest.com/explore/events/2024/05/3102-a-5-day-ai-ml-workshop-2024-nit-rourkela", location: "NIT Rourkela"}
        ]
    },
    {
        img :  acd,
        ques : "Academics",
        link : "/academics",
        events: [
            { name: "Java Workshop", date: "2024-12-26", link: "https://techfest.org/workshops/java", location: "IIT Bombay" },
            { name: "Python Workshop", date: "2024-10-05", link: "https://techfest.org/workshops/python", location: "IIT Bombay" }
        ]
    },
    {
        img :  cybersecurity,
        ques : "Cyber Security",
        link : "/cybersecurity",
        events: [
            { name: "CROSSLINKS", date: "2024-07-12", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" },
            { name: "Cyber Data", date: "2024-10-05", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" }
        ]
    },
    {
        img :  "ml.jpg",
        ques : "Machine Learning",
        link : "/ml",
        events: [
            { name: "Asian Conference on Machine Learning", date: "2024-12-12", link: "https://www.iith.ac.in/events/2022/12/14/Asian-Conference-on-Machine-Learning/", location: "Boston" },
            { name: "ML Hackathon", date: "2024-10-05", link: "/ml-hackathon", location: "Chicago" }
        ]
    },
    {
        img :  DS,
        ques : "Data Science",
        link : "/ds",
        events: [
            { name: "CROSSLINKS", date: "2024-07-12", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" },
            { name: "Cyber Data", date: "2024-10-05", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" }
        ]
    },
    // {
    //     img :  "/5g technology.jpeg",
    //     ques : "5g Technology",
    //     link : "/5g"
    // },
    {
        img :  "/iot.jpeg",
        ques : "IoT",
        link : "/iot",
        events: [
            { name: "CROSSLINKS", date: "2024-07-12", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" },
            { name: "Cyber Data", date: "2024-10-05", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" }
        ]
    },
    {
        img :  EC,
        ques : "Edge Computing",
        link : "/edgecomp",
        events: [
            { name: "CROSSLINKS", date: "2024-07-12", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" },
            { name: "Cyber Data", date: "2024-10-05", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" }
        ]
    },
    {
        img :  blockchain,
        ques : "BlockChain",
        link : "/blockchain",
        events: [
            { name: "CROSSLINKS", date: "2024-07-12", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" },
            { name: "Cyber Data", date: "2024-10-05", link: "https://nitc.ac.in/upcoming-events/crosslinks----2024-a-national-conference-on-polymers", location: "NIT Calicut" }
        ]
    },
   
    {
        img :  bio,
        ques : "Bioengineering",
        link : "/bioeng"
    },
    
    {
        img :  "/nanotechnology.jpeg",
        ques : "Nanotechnology",
        link : "/"
    },
    
    {
        img : DE,
        ques : "Data Engineering",
        link : "/"
    },
    {
        img :  arVr,
        ques : "AR/VR",
        link : "/"
    },
    
]
export default myths;