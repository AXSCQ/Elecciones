import { useState, useEffect } from 'react';

export default function SimpleCountdownTimer() {
  // Fecha de las elecciones: 17 de agosto de 2025
  const electionDate = new Date('2025-08-17T00:00:00-04:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = electionDate - now;
      
      if (difference <= 0) {
        // Si ya pasó la fecha de elecciones
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      // Cálculo de tiempo restante
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Función para añadir ceros a la izquierda si es necesario
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="flex justify-center mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
          <span className="block text-4xl font-bold text-white">{timeLeft.days}</span>
          <span className="text-blue-200">Días</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
          <span className="block text-4xl font-bold text-white">{formatNumber(timeLeft.hours)}</span>
          <span className="text-blue-200">Horas</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
          <span className="block text-4xl font-bold text-white">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-blue-200">Minutos</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20">
          <span className="block text-4xl font-bold text-white">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-blue-200">Segundos</span>
        </div>
      </div>
    </div>
  );
}
