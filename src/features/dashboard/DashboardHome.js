import React from "react";
import Welcome from "./Welcome";
import SimpleBarGraph from "./SimpleBarGraph";
import DashInfobox from "../../components/DashInfobox";
import {
  AdjustmentsVerticalIcon,
  ArrowPathRoundedSquareIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import DummyTable from "../../components/DummyTable";
import SimplePieChart from "./SimplePieChart";
import SimpleRadarChart from "./SimpleRadarChart";
import SimpleAreaChart from "./SimpleAreaChart";

const FinancialData = [
  {
    name: "Jan",
    uv: 4000,
    Income: 2400,
    Expense: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    Income: 1398,
    Expense: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    Income: 4800,
    Expense: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    Income: 3908,
    Expense: 2000,
  },
  {
    name: "May",
    uv: 2780,
    Income: 1908,
    Expense: 2000,
  },
  {
    name: "Jun",
    uv: 1890,
    Income: 0,
    Expense: 0,
  },
];
const InfoBoxData = [
  {
    id: 1,
    logo: <CurrencyDollarIcon className="w-4" />,
    title: "Total Revenue",
    value: "156,236",
    units: "$",
    timeline: "month",
    percentage: 12,
  },
  {
    id: 2,
    logo: <DocumentChartBarIcon className="w-4" />,
    title: "Total Orders",
    value: "3,256 ",
    units: "units",
    timeline: "month",
    percentage: 12,
  },
  {
    id: 3,
    logo: <ArrowPathRoundedSquareIcon className="w-4" />,
    title: "Conversion Rate",
    value: "2.14",
    units: "%",
    timeline: "month",
    percentage: -6,
  },
];
const BoxCompo = ({ children }) => {
  return (
    <div className="p-4 bg-white  shadow-lg rounded-lg dark:bg-gray-800 dark:text-white cursor-pointer hover:bg-gray-400 m-2">
      {children}
    </div>
  );
};
const DashboardHome = () => {
  return (
    <div
      id="main-content"
      className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
    >
      <main>
        <div className="px-4 pt-6 max-w-[1150px]">
          <div className="flex justify-between my-6 flex-row h-8">
            <Welcome />
            {/* <img alt="infographic" src={info} className="w-64 rounded-lg" /> */}
            <button className="flex gap-2 bg-white  p-2 justify-center items-center rounded-md shadow-lg dark:bg-gray-800 dark:text-white text-sm">
              <AdjustmentsVerticalIcon className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex m-2">
                {InfoBoxData.map((box) => (
                  <DashInfobox
                    key={box.id}
                    logo={box.logo}
                    title={box.title}
                    units={box.units}
                    value={box.value}
                    timeline={box.timeline}
                    percentage={box.percentage}
                  />
                ))}
              </div>
              <div className="flex justify-between flex-col m-2 ">
                <BoxCompo>
                  <h3 className="font-semibold mb-2">Sales Analytics</h3>
                  {/* <SimpleLineGraph data={FinancialData} /> */}
                  <SimpleAreaChart />
                </BoxCompo>
                <div className="flex flex-row">
                  <BoxCompo>
                  <p className="font-semibold mb-2">Net Profits</p>
                    <SimpleBarGraph />
                  </BoxCompo>
                  <BoxCompo>
                    <p className="font-semibold mb-2">Growth Distributions</p>
                    <SimplePieChart />
                  </BoxCompo>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <BoxCompo>
                <div>
                  <p className="font-semibold mb-2">Recent Transactions</p>

                  <DummyTable />
                </div>
              </BoxCompo>
              <BoxCompo>
                <div>
                  <p className="font-semibold mb-2">Performance</p>
                </div>
                <SimpleRadarChart />
              </BoxCompo>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;
