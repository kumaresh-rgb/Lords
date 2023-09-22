import React from 'react';
import { GoDotFill } from 'react-icons/go';


const Carditems = [
  {
    value: '0',
    Text: 'Todo',
    indicator: <GoDotFill style={{ color: 'green' }} />,
  },
  {
    value: '10',
    Text: 'Overdue',
    indicator: <GoDotFill style={{ color: 'red' }} />,
  },
  {
    value: '0',
    Text: 'Unplanned',
    indicator: <GoDotFill style={{ color: 'orange' }} />,
  },
];

const TaskStatus = () => {
  return (
    <div className="text-center ">
      <div className="text-2xl">Today</div>
      <div className="flex gap-3 justify-center ">
        {Carditems.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg p-4 shadow-md w-40 h-30 flex flex-col items-center relative"
          >
            <div>{item.value}</div>
            <div>{item.Text}</div>
            <div
              className="mt-2 absolute top-0 right-0 "
              style={{
                transform: 'translate(50%, -50%)',
                animation: 'blink 1s infinite',
              }}
            >
              {item.indicator}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default TaskStatus;
