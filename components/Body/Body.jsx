"use client"


import {MdAddBox} from 'react-icons/md'


import React from "react";
import Checkbox from "@mui/material/Checkbox";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import TaskStatus from "./TaskStatus";


const AddItem = ({ text, link, Time ,day}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <div className="md:ml-13 md:px-14  my-6 -ml-1.5 ">
        <div className=" text-xs font-medium ml-10 py-1 ">{day}</div>
        <div className="flex items-center justify-evenly">
        <div className="ml-5 items-center">
          
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            icon={<AddCircleOutlinedIcon />}
            checkedIcon={<AddCircleOutlinedIcon />}
          />
        </div>
        <div className="w-11/12">
          <p className="text-sm">
            {text}
            <a href="#" className="text-blue-600 font-bold px-2">
              {link}
            </a>
          </p>
          <p className="text-xs text-gray-500">{Time}</p>
        </div>
        </div>
      </div>
  );
};

const addItems = [
  {
    text: "Add Task with",
    link: "Add Memorise",
    Time: "8:30pm",
    day:"Tus 25 July"
  },
  {
    text: "Add Task with",
    link: "Add Memorise",
    Time: "8:30pm",
    day:"Tus 25 July"
  },
  {
    text: "Add Task with",
    link: "Add Memorise",
    Time: "8:30pm",
    day:"Tus 25 July"
  },
];

const Body = () => {
  return (
    <main className="px-6 py-6 container mx-auto relative">
      <div className="bg-white">
        {/* Your existing content */}
        {addItems.map((item, index) => (
          <AddItem key={index} {...item} />
        ))}
        <TaskStatus />
        <div className="bg-white z-20 rounded-md mt-9">
          {addItems.map((item, index) => (
            <AddItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Button with MdAddBox icon */}
      <button
className="text-indigo-700 text-5xl rounded-2xl cursor-pointer absolute bottom-8 right-7 "        onClick={() => {
          // Handle button click here
        }}
      >
        <MdAddBox />
      </button>
    </main>
  );
};

export default Body;
