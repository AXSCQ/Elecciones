import React from 'react';

const Timeline = ({ events }) => (
  <div className="relative pl-6 border-l-4 border-yellow-400 my-6">
    {events.map((item, idx) => (
      <div key={idx} className="mb-6">
        <div className="absolute -left-3 w-6 h-6 rounded-full bg-yellow-400 border-4 border-white shadow-lg"></div>
        <div className="ml-4">
          <div className="font-bold text-yellow-300">{item.year}</div>
          <div className="text-white">{item.event}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
