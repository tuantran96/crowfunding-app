import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-x-3 text-xs font-medium text-text3 mb-4"
        >
          <IconFolder></IconFolder>
          <span className="-mb-1">Education</span>
        </Link>
        <h3 className="font-semibold text-text1 mb-1">
          Powered Kits Learning Boxes
        </h3>
        <p className="text-sm mb-4 text-text3">
          Your home for indie and classic cinema has just been handed an...
        </p>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">$2,000</h4>
            <span className="text-text4 text-xs">Raised of $1,900</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <h4 className="text-text2 text-sm font-semibold">173</h4>
            <span className="text-text4 text-xs">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-xs text-text3">
            by <span className="text-text2 font-semibold">Mahfuzul Nabil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
