import React from "react";
const data = [
  {
    name: "Ron Williams",
    date: "05/09/2024",
    amount: "$1,256",
  },
  {
    name: "John Payne",
    date: "05/09/2024",
    amount: "$1,256",
  },
  {
    name: "Sliaon Wills",
    date: "05/09/2024",
    amount: "$1,256",
  },
  {
    name: "Rocky Sams",
    date: "05/09/2024",
    amount: "$1,256",
  },
  {
    name: "Alison Joe",
    date: "05/09/2024",
    amount: "$1,256",
  },
  {
    name: "Jason Donald",
    date: "05/09/2024",
    amount: "$1,256",
  },
];
const DummyTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((_, i) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {_.name}
              </th>
              <td className="px-6 py-4">{_.date}</td>
              <td className="px-6 py-4">{_.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
