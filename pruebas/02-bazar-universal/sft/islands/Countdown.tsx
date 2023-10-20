import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef } from "preact/hooks";

export default function Countdown() {
  const now = useSignal(new Date());

  const target = useRef(new Date());

  const getTime = useCallback(function () {
    const timeToMidnight = target.current.getTime() - now.value.getTime();
    hours.value = Math.floor(timeToMidnight / 3600000);

    seconds.value = Math.floor((timeToMidnight % 60000) / 1000);
    minutes.value = Math.floor((timeToMidnight % 3600000) / 60000);
    if (hours.value < 0) {
      target.current.setDate(target.current.getDate() + 1);
    }
  }, []);

  const seconds = useSignal(0);
  const minutes = useSignal(0);
  const hours = useSignal(0);

  useEffect(() => {
    target.current.setDate(target.current.getDate() + 1);
    target.current.setHours(0, 0, 0, 0);
    getTime();
    const interval = setInterval(() => {
      now.value = new Date();
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {hours.value !== 0 && `${hours} h `}
      {minutes.value !== 0 && `${minutes} min `}
      {seconds.value !== 0 && `${seconds} secs`}
      {(hours.value !== 0 || minutes.value !== 0 || seconds.value !== 0) &&
        " remaining"}
    </span>
  );
}
