import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import i1 from '../assets/images/Electrify.jpg';
import i2 from '../assets/images/JSCOP.jpg';

function Events() {
  const [events] = useState([
    {
      name: 'Electrify',
      description: 'An electrifying event where the race is on to light the bulb by completing the circuit.',
      photo: i1,
    },
    {
      name: 'JSCOP',
      description: 'The tech event of the year, JSCOP 6.0',
      photo: i2,
    },
  ]);

  return (
    <div className="Eventstyle grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center px-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center w-4/5 mx-auto bottom-12 mt-40"
        >
          {/* Image with Hover Effect */}
          <motion.img
            src={event.photo}
            alt={event.name}
            className="w-4/5 h-4/5 object-cover rounded-lg shadow-lg transition-transform duration-0 ease-in-out hover:scale-105 mb-8 border-2"
            whileHover={{ scale: 1.05, rotate: 3.5}}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />

          {/* Content Below the Image */}
          <div className="mt-0 text-center border-2 rounded-lg p-4 transition-transform duration-200 ease-in-out hover:scale-105">
            <h3 className="text-lg font-bold text-gray-100">{event.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
