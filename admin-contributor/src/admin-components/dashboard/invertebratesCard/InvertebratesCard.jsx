import React from "react";
import { Bug, Shell, Star, Waves, Activity, Droplets } from "lucide-react";
import { GiSpider } from "react-icons/gi";

function InvertebratesCard() {
  const invertebratesItem = [
    {
      title: "Insects",
      icon: Bug, // 🐞
      count: "45",
    },
    {
      title: "Arachnids",
      icon: GiSpider, // 🕷️
      count: "45",
    },
    {
      title: "Mollusks",
      icon: Shell, // 🐚
      count: "45",
    },
    {
      title: "Echinoderms",
      icon: Star, // ⭐ (starfish-like)
      count: "45",
    },
    {
      title: "Cnidarians",
      icon: Waves, // 🌊 (for jellyfish/coral-like)
      count: "45",
    },
    {
      title: "Worms",
      icon: Activity, // 🔄 (symbolic movement)
      count: "45",
    },
    {
      title: "Sponges",
      icon: Droplets, // 💧 (water organism)
      count: "45",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {invertebratesItem.map((item, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-5 ">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-lg shadow-sm">
              <item.icon className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-black">{item.title}</h2>
          </div>
          <div className="mt-4 flex justify-center">
            <span className="text-2xl font-bold text-black">{item.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvertebratesCard;
