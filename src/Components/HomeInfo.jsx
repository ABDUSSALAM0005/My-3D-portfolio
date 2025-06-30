//rafce
import React from "react";
import Button from "../../../MyDemo/src/components/Button";
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="
  mx-5 flex text-white flex-col gap-3 max-w-2xl pt-4 pb-12 px-8
  relative rounded-[10px] bg-[#2b77e7] border border-[#2b77e7] shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db]
  ">
    <p className="
    font-medium sm:text-xl text-center
    ">{text}</p>
    <Link  to = {link} 
    className="
    bg-white border border-white shadow-[0.6vmin_0.6vmin_#ffffff,1vmin_1vmin_#d2e4ff,1vmin_1vmin_#d2e4ff,0.65vmin_1vmin_#d2e4ff,1vmin_0.65vmin_#d2e4ff]
    py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto left-0 right-0 flex justify-center items-center gap-3
    "
    >
    {btnText}
    <img src={arrow} alt="" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <div
      className="
            sm:text-xl sm_leading-snug text-center text-white py-4 px-8 mx-5
            relative rounded-[10px] bg-[#2b77e7] border border-[#2b77e7] shadow-[0.6vmin_0.6vmin_#336cc1,1vmin_1vmin_#0092db,1vmin_1vmin_#0092db,0.65vmin_1vmin_#0092db,1vmin_0.65vmin_#0092db]"
    >
      Yokoso(Welcome),Oreno nawa <span className="font-semibold">Aizen Sosuke</span>
      <br />
      from soul society
    </div>
  ),
  2: <InfoBox
   text="Worked with many people,and picked lot of skills along the way"
   link="/about"
   btnText="Learn more"
  />,
  3: <InfoBox
   text="Led Multiple projects to success over the years. Curious about the impact? "
   link="/projects"
   btnText="Visit my portfolio"
  />,
  4: <InfoBox
   text="Need a project done or looking for a dev? I'm just a few keystrokes away"
   link="/contact"
   btnText="Lets Talk"
  />,
};



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
