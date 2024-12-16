import React, { useState } from "react";
import CarouselClasses from "../classpage/GymSchedule";
import Footer from "./Footer";
import ContactSection from "../pages/ContactSection";
import Navbar from "./Navbar";
const ClassSchedule = () => {
  const [filter, setFilter] = useState("All");

  const schedule = [
    {
      day: "MON",
      time: "9:00am - 10:00am",
      className: "Fitness",
      color: "text-orange-500",
    },
    {
      day: "TUE",
      time: "9:00am - 10:00am",
      className: "Boxing",
      color: "text-red-500",
    },
    {
      day: "WED",
      time: "9:00am - 10:00am",
      className: "Cycling",
      color: "text-green-500",
    },
    {
      day: "THUR",
      time: "9:00am - 10:00am",
      className: "Body Building", // New class added for Thursday
      color: "text-blue-500", // You can change the color if desired
    },
    {
      day: "THUR",
      time: "10:00am - 11:00am",
      className: "Crossfit",
      color: "text-purple-500",
    },
    {
      day: "FRI",
      time: "9:00am - 10:00am",
      className: "Crossfit",
      color: "text-purple-500",
    },
    {
      day: "SAT",
      time: "10:00am - 11:00am",
      className: "Crossfit",
      color: "text-purple-500",
    },
    {
      day: "SUN",
      time: "10:00am - 11:00am",
      className: "Body Building",
      color: "text-blue-500",
    },
    {
      day: "MON",
      time: "10:00am - 11:00am",
      className: "Body Building",
      color: "text-blue-500",
    },
  ];

  const days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
  const classes = ["All", "Body Building", "Boxing", "Crossfit", "Cycling", "Fitness"];

  return (
    <> 
    <Navbar/>
    <div className="bg-gray-900 text-white min-h-screen p-16">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-6 space-x-4">
        {classes.map((category, index) => (
          <button
            key={index}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? "bg-red-500 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Schedule Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              {days.map((day, index) => (
                <th
                  key={index}
                  className="text-center py-3 border border-gray-700 uppercase"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, timeSlotIndex) => (
              <tr key={timeSlotIndex} className="h-20">
                {days.map((day, dayIndex) => {
                  const classItem = schedule.find(
                    (item) => item.day === day && item.time === "9:00am - 10:00am"
                  );
                  return (
                    <td
                      key={dayIndex}
                      className="text-center border border-gray-700 align-middle"
                    >
                      {classItem && (filter === "All" || classItem.className === filter) ? (
                        <div className="transition duration-300 ease-in-out transform hover:scale-105">
                          <p className="text-sm">{classItem.time}</p>
                          <p className={`font-bold ${classItem.color}`}>
                            {classItem.className}
                          </p>
                        </div>
                      ) : (
                        <div className="transition duration-300 ease-in-out transform hover:scale-105 text-gray-400">
                          <p>No Class</p>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   <CarouselClasses/>
   <ContactSection/>
   <Footer/>
    </>
  );
};

export default ClassSchedule;
