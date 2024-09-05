import {
  ArrowDownLeftIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const DashInfobox = ({ logo, title, value, units, timeline, percentage }) => {
  const [valueWithUnits, setValueWithUnits] = useState("");

  useEffect(() => {
    switch (units) {
      case "$":
        setValueWithUnits(units + value);
        break;
      case "%":
        setValueWithUnits(value + units);
        break;
      default:
        setValueWithUnits(value + units);
        break;
    }
  });
  return (
    <div className="px-8 py-4 bg-white  shadow-lg rounded-lg dark:bg-gray-800 dark:text-white cursor-pointer  mx-2 mb-2">
      <div className="flex text-sm mb-2 gap-1 text-gray-600 dark:text-gray-400 ">
        {logo}
        {title}
      </div>
      <div className="text-lg font-bold mb-2">{valueWithUnits}</div>
      <div className="flex gap-1 items-center text-xs ">
        <p className="text-gray-600 dark:text-gray-400">
          Since last {timeline}{" "}
        </p>
        <div
          className={` rounded-md flex gap-1 p-1 
        ${
          percentage < 0
            ? "bg-red-100 text-red-600"
            : "bg-green-100 text-green-600"
        }
        `}
        >
          {percentage < 0 ? (
            <ArrowTrendingDownIcon className="w-4" />
          ) : (
            <ArrowTrendingUpIcon className="w-4" />
          )}
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default DashInfobox;
