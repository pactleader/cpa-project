
import { useState, useEffect } from "react";

const newsItems = [
  "Port Operations Resume Normal Schedule - All facilities operational",
  "New Cargo Handling Equipment Arrives at Saipan Port",
  "Environmental Impact Study for Port Expansion Completed",
  "Ferry Service Between Islands Experiencing High Demand"
];

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-900 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="bg-red-600 px-3 py-1 text-xs font-bold rounded mr-4">
            LATEST NEWS
          </span>
          <div className="flex-1 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {newsItems.map((item, index) => (
                  <div key={index} className="min-w-full text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
