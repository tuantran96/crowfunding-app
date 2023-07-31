import React, { Fragment } from "react";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampCategory from "./parts/CampCategory";
import CampImage from "./parts/CampImage";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) 0%, rgba(0,0,0,0.4) 93.43%), url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] w-full mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="font-bold text-xl mb-4">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
