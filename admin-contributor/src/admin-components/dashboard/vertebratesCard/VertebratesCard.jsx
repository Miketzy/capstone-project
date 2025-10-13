import { Bird, Fish, PawPrint, Turtle, Frog, Dog } from "lucide-react";
import React from "react";
import { GiFrog } from "react-icons/gi";

function VertebratesCard() {
  const vertebratesItem = [
    {
      title: "Mammals",
      icon: Dog,
      count: "45",
    },
    {
      title: "Fish",
      icon: Fish,
      count: "45",
    },
    {
      title: "Birds",
      icon: Bird,
      count: "45",
    },
    {
      title: "Reptiles",
      icon: Turtle,
      count: "45",
    },
    {
      title: "Amphibians",
      icon: GiFrog,
      count: "45",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vertebratesItem.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-5 ">
          <div className="flex">
            <item.icon className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-black">{item.title}</h2>
          </div>
          <div className="font-medium text-black">{item.count}</div>
        </div>
      ))}
    </div>
  );
}

export default VertebratesCard;
