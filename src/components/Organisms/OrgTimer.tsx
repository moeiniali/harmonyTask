import React, { useEffect, useState } from 'react';

type TimerType = {
  onTimerChange: (timer: boolean) => void; // Callback function to handle timer status changes
}

const Timer: React.FC<TimerType> = ({ onTimerChange }) => {




  // State to keep track of the remaining time (in seconds)
  const [time, setTime] = useState<number | undefined>(60);

  // State to display a message when the timer ends
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // If there is time remaining, set up a timer interval
    if (time !== undefined && time > 0) {
      const timerID = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime! - 1;
          localStorage.setItem('timer', newTime.toString());
          return newTime;
        });
      }, 1000);  // Update every 1 second
      // Cleanup the timer when the component unmounts or time changes
      return () => clearInterval(timerID);
    } else if (time === 0) {
        // When the timer reaches 0, call onTimerChange with false and set a message
      onTimerChange(false);
      setMessage('دریافت مجدد کد');
    }
  }, [time, onTimerChange]); // Effect depends on 'time' and 'onTimerChange'



  // Reset the timer and message when user clicks on the message
  const handleReset = () => {
    setTime(60); // Reset the timer to 60 seconds
    setMessage(''); // Clear the message
    onTimerChange(true); // Notify parent component that the timer has been reset

  };
 // Format time from seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60); // Calculate minutes
    const s = seconds % 60; // Calculate seconds
    return `${m}:${s < 10 ? `0${s}` : s}`; // Format as MM:SS
  };

  return (
    <div className='w-full h-10 flex items-center justify-center'>
      {message ? (
           // If there is a message, display it with a click handler to reset the timer
        <p onClick={handleReset} className='text-[#bad135] text-sm font-normal cursor-pointer animate-pulse'>{message}</p>
      ) : (
          // Display the formatted time with a label if no message is set
        <p className='text-[#ffffff] text-sm font-normal px-1'>{time !== undefined ? formatTime(time) : '0:00'}
          <span className='text-[#ffffff] text-sm font-normal px-1'>
            :تا دریافت مجدد کد
          </span>
        </p>
      )}
    </div>
  );
};

export default Timer;