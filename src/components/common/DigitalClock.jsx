import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    if (hour < 20) return "Evening";
    return "Night";
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <div className="text-xs xs:text-sm font-mono whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
        </div>
        <div className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">
           Good {getGreeting()}
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
