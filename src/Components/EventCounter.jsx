import { useEffect, useState } from "react";

const EventCounter = () => {
  const targetDate = new Date("2023-11-18T00:00:00");

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="EventCounter">
      {timeRemaining.days === 0 &&
      timeRemaining.hours === 0 &&
      timeRemaining.minutes === 0 &&
      timeRemaining.seconds === 0 ? (
        <div className="item">
          <h2>The event has started!</h2>
          <span>18 Nov 2023 - Today</span>
        </div>
      ) : (
        <>
          <div className="item">
            <h2 className="number">{timeRemaining.days}</h2>
            <span className="text">Days</span>
          </div>
          <div className="item">
            <h2 className="number">{timeRemaining.hours}</h2>
            <span className="text">Hours</span>
          </div>
          <div className="item">
            <h2 className="number">{timeRemaining.minutes}</h2>
            <span className="text">Minutes</span>
          </div>
          <div className="item">
            <h2 className="number">{timeRemaining.seconds}</h2>
            <span className="text">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
};

export default EventCounter;
