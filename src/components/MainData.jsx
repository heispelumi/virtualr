import { VscServerEnvironment } from "react-icons/vsc";
import { IoFingerPrint } from "react-icons/io5";
import { IoShieldHalf } from "react-icons/io5";
import { IoBatteryChargingOutline } from "react-icons/io5";
import { LuGlobeLock, LuPlugZap } from "react-icons/lu";


import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import user4 from "../assets/users/user4.jpg";
import user5 from "../assets/users/user5.jpg";
import user6 from "../assets/users/user6.jpg";




export const features = [
    {
      icon: <VscServerEnvironment size={22}  />,
      text: "feature_drag_and_drop_text",
      description:
        "feature_drag_and_drop_description",
    },
    {
      icon: <IoFingerPrint size={22}   />,
      text: "feature_multi_platform_text",
      description:
        "feature_multi_platform_description",
    },
    {
      icon: <IoShieldHalf size={22}   />,
      text: "feature_templates_text",
      description:
        "feature_templates_description",
    },
    {
      icon: <IoBatteryChargingOutline size={22}   />,
      text: "feature_preview_text",
      description:
        "feature_preview_description",
    },
    {
      icon: <LuPlugZap size={22}   />,
      text: "feature_collaboration_text",
      description:
        "feature_collaboration_description",
    },
    {
      icon: <LuGlobeLock size={22}   />,
      text: "feature_analytics_text",
      description:
        "feature_analytics_description",
    },
  ];




  export const workflow = [
    {
      text:"workflow_code_merge_made_easy_text" ,
      description:  
      "workflow_code_merge_made_easy_description" ,
      
    },
    {
      text:
         "workflow_review_code_without_worry_text",
      description:
            "workflow_review_code_without_worry_description" ,
       
    },
    {
      text: "workflow_ai_assistant_text" ,
      description: 
             "workflow_ai_assistant_description" ,
      
    },
    {
      text: "share_work_instantly_text"  ,
      description: 
              "share_work_instantly_description",
       
    },
  ];

  export const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];
  



    
  export const pricing = [
    {
      title: "free",
      price: "$0",
      features: [
        "private_board", 
        "storage_5gb",  
        "web_analytics", 
        "private_mode"   
      ],
    },
    {
      title: "pro", 
      price: "$10",
      features: [
        "private_board", 
        "storage_10gb",  
        "web_analytics_advanced", 
        "private_mode"   
      ],
    },
    {
      title: "enterprise", 
      price: "$200",
      features: [
        "private_board", 
        "storage_unlimited", 
        "high_performance_network", 
        "private_mode"  
      ],
    },
  ];
  
  

  