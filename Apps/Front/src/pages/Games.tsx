import React from "react";
import { TOR, NYY, MLB, ARI } from 'react-mlb-logos';

export function Games() {
  const days = Array.from({ length: 10 });

  return (
    <div
      className="overflow-auto p-2 mt-10 flex gap-2"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {days.map((_, day) => (
        <div
          key={day}
          className="flex flex-col p-2 rounded-full h-28 shadow bg-white flex-shrink-0"
        >
          <div className="bg-gray-100  mx-auto rounded-full h-16 w-16 flex justify-center gap-1 items-center">
            <ARI size={40}/>
            <p>x</p>
            <NYY size={40} />
          </div>
          <div className="h-10 flex justify-center mx-auto items-center">
            <p>{day + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}