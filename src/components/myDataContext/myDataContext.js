import React from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaChromecast } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export const list1 = [
  "The Philosophy Of business analytics",
  "Fast-Track Your business",
  "Lies And Damn Lies About business",
  "The Ultimate Deal On business",
];

export   const workListItems = [
    "Tactics That Can Help Your Business Grow.",
    "The Secret of Successful Business",
    "How To Start A Business With Business",
    "Your Business Skills But Never Stop Improving.",
  ];


export const list2 = [
  "Proof That business Really Works",
  "Fast-Track Your business",
  "Here Is What You Should Do For Your business",
];
export  const logos = [
    "	https://trydo.rainbowit.net/assets/images/brand/brand-01.png",
    "	https://trydo.rainbowit.net/assets/images/brand/brand-02.png",
    "   https://trydo.rainbowit.net/assets/images/brand/brand-03.png",
    "	https://trydo.rainbowit.net/assets/images/brand/brand-04.png",
    "	https://trydo.rainbowit.net/assets/images/brand/brand-05.png",
    "	https://trydo.rainbowit.net/assets/images/brand/brand-06.png",
  ];

export const menus = ["Home", "Service", "About", "Pages", "Blocks", "Contact"];

export const stratageyDetails = [
  {
    icon: <FaChromecast className="stratagy-icon" />,
    title: "Business Stratagy",
  },
  {
    icon: <FiLayers className="stratagy-icon" />,
    title: "Website Development",
  },
  {
    icon: <AiOutlineUsergroupDelete className="stratagy-icon" />,
    title: "Marketing & Reporting",
  },
];

export const datacontext = React.createContext();
