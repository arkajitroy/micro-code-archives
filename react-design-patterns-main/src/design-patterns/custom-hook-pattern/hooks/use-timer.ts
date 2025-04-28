import { useEffect, useRef, useState } from "react";

type UseTimerProps = {
  initialSeconds: number;
  isCounting: boolean;
};

type UseTimerReturn = {
  seconds: number;
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
};

export default function useTimer({
  initialSeconds = 0,
  isCounting = false,
}: UseTimerProps): UseTimerReturn {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(initialSeconds);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (isCounting && prevSeconds <= 0) {
            clearInterval(intervalRef.current!);
            return 0;
          }
          return isCounting ? prevSeconds - 1 : prevSeconds + 1;
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, isCounting]);

  return { seconds, isRunning, start, stop, reset };
}
