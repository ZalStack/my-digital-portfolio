import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "🌅 Morning";
    if (hour < 17) return "☀️ Afternoon";
    if (hour < 20) return "🌤️ Evening";
    return "🌙 Night";
  };

  return (
    <div className="flex items-center gap-2">
      <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-xl">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
        {getGreeting()}
      </span>
    </div>
  );
};

export default DigitalClock;