import { useEffect, useState } from 'react';

const useWeatherTime = ({ weather }) => {
  const [time, setTime] = useState(null);
  const [completeTime, setCompleteTime] = useState(null);

  useEffect(() => {
    if (weather && weather.weather && weather.weather.timezone !== undefined) {
      const localTime = new Date();
      const timezoneOffsetInMilliseconds = weather.weather.timezone * 1000;
      const utcTime =
        localTime.getTime() + localTime.getTimezoneOffset() * 60000;
      const targetTime = new Date(utcTime + timezoneOffsetInMilliseconds);

      if (!isNaN(targetTime.getTime())) {
        const time = targetTime.toLocaleTimeString([], {
          hour: 'numeric',
        });
        const newCompleteTime = targetTime.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        });
        setTime(time);
        setCompleteTime(newCompleteTime);
      } else {
        console.error('Invalid Date calculated');
      }
    } else {
      console.error('Timezone data is missing or invalid');
    }
  }, [weather]);

  return { time, completeTime };
};

export default useWeatherTime;
