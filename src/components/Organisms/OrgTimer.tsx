import React, { useEffect, useState } from 'react';

type TimerType = {
  onTimerChange: (timer: boolean) => void;
}

const Timer: React.FC<TimerType> = ({ onTimerChange }) => {





  const [time, setTime] = useState<number | undefined>(60);


  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (time !== undefined && time > 0) {
      const timerID = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime! - 1;
          localStorage.setItem('timer', newTime.toString());
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timerID);
    } else if (time === 0) {
      onTimerChange(false);
      setMessage('دریافت مجدد کد');
    }
  }, [time, onTimerChange]);




  const handleReset = () => {
    setTime(60);
    setMessage('');
    onTimerChange(true);

  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };

  return (
    <div className='w-full h-10 flex items-center justify-center'>
      {message ? (
        <p onClick={handleReset} className='text-[#bad135] text-sm font-normal cursor-pointer animate-pulse'>{message}</p>
      ) : (
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