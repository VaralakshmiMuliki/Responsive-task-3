import React from "react";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Home } from "../Home/Home";
import { Logos } from "../Logos/Logos";
import { Pricing } from "../Pricing/Pricing";
import { Services } from "../Services/Services";
import { Stratagy } from "../Stratagy/Stratagy";
import { Team } from "../Team/Team";
import { Work } from "../Work/Work";
import {
  datacontext,
  stratageyDetails,
  list1,
  list2,
  logos,
  workListItems,
} from "../myDataContext/myDataContext";

export const Body = () => {
  return (
    <>
      <datacontext.Provider
        value={{ stratageyDetails, list1, list2, logos, workListItems }}
      >
        <Home />
        <Stratagy />
        <Services />
        <Work />
        <Team />
        <About />
        <Logos />
        <Pricing />
        <Contact />
      </datacontext.Provider>
    </>
  );
};
