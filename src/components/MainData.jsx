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
      textKey: "testimonials.0.text",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      textKey: "testimonials.1.text",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      textKey: "testimonials.2.text",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      textKey: "testimonials.3.text",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      textKey: "testimonials.4.text",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      textKey: "testimonials.5.text",
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
  
  

  