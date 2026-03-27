import React, { useState, useEffect } from "react";

function TimerSection() {
  // Set the date we're counting down to
  const countDownDate = new Date("June 10, 2026 07:30:00").getTime();

  // State variables to hold the time components
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeIsUp, setTimeIsUp] = useState(false);

  // Update the count down every 1 second
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // If the countdown is complete, display a message and set timeIsUp to true
      if (distance <= 0) {
        clearInterval(intervalId);
        setTimeIsUp(true);
      } else {
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the state
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, [countDownDate]);

  return (
    <section className="text-blue-950 body-font border-t bg-blue-50">
      <div className="container flex flex-col justify-center items-center px-5 py-12 mx-auto">
        <h3 className="text-2xl font-bold text-gray-700 my-4">Are You Ready?</h3>
        <div className="flex justify-center items-center">
          <div className="block max-w-sm p-6 bg-blue-900 border border-gray-200 rounded-lg shadow text-center">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-blue-50">{timeIsUp ? "00" : days}</h5>
            <p className="font-normal text-blue-50">Days</p>
          </div>
          <div className="block max-w-sm p-6 bg-blue-900 border border-gray-200 rounded-lg shadow text-center">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-blue-50">{timeIsUp ? "00" : hours}</h5>
            <p className="font-normal text-blue-50">Hours</p>
          </div>
          <div className="block max-w-sm p-6 bg-blue-900 border border-gray-200 rounded-lg shadow text-center">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-blue-50">{timeIsUp ? "00" : minutes}</h5>
            <p className="font-normal text-blue-50">Minutes</p>
          </div>
          <div className="block max-w-sm p-6 bg-blue-900 border border-gray-200 rounded-lg shadow text-center">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-blue-50">{timeIsUp ? "00" : seconds}</h5>
            <p className="font-normal text-blue-50">Seconds</p>
          </div>
        </div>
        {timeIsUp && (
          <div className="block max-w-sm p-6 bg-blue-900 border border-gray-200 rounded-lg shadow text-center mt-4">
            <h5 className="mb-2 text-4xl font-bold tracking-tight text-blue-50">Time is up!</h5>
          </div>
        )}
      </div>
    </section>
  );
}

export default TimerSection;

