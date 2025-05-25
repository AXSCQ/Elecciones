import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 py-2 px-4 text-center bg-black bg-opacity-70">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold uppercase mb-0 text-white drop-shadow-lg">
          Elecciones Bolivia 2025
        </h1>
        <p className="text-sm text-gray-200 drop-shadow-md">
          Conoce a los partidos políticos y sus candidatos
        </p>
      </div>
    </header>
  );
};

export default Header;
