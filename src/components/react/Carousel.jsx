import React, { useState } from 'react';

export default function Carousel({ children }) {
  const [current, setCurrent] = useState(0);
  const total = React.Children.count(children);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex items-center justify-center w-full">
        <button
          onClick={prev}
          className="absolute left-0 z-20 p-2 m-2 rounded-full bg-black/40 hover:bg-blue-700 text-white text-2xl shadow-lg transition-colors"
          aria-label="Anterior"
          style={{ top: '40%' }}
        >
          &#8592;
        </button>
        <div className="w-full flex items-center justify-center">
          {React.Children.toArray(children)[current]}
        </div>
        <button
          onClick={next}
          className="absolute right-0 z-20 p-2 m-2 rounded-full bg-black/40 hover:bg-blue-700 text-white text-2xl shadow-lg transition-colors"
          aria-label="Siguiente"
          style={{ top: '40%' }}
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-gray-400'} transition-colors`}
            aria-label={`Ir a la tarjeta ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
