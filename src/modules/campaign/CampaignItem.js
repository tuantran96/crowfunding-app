import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Your home for indie and classic cinema has just been handed an...
        </CampDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
