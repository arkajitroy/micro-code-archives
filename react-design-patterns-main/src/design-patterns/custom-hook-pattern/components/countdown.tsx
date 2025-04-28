import useTimer from "../hooks/use-timer";

type CountdownProps = {
  initialSeconds: number;
};

export default function Countdown({ initialSeconds }: CountdownProps) {
  const { seconds, isRunning, start, stop, reset } = useTimer({
    initialSeconds,
    isCounting: true,
  });

  return (
    <div className="mt-4 w-fit border-black border-2 p-2">
      <h3>Countdown</h3>
      <div className="digit">{seconds}s</div>
      <div className="flex space-x-2">
        <button
          className="px-2 bg-blue-500 text-white"
          onClick={start}
          disabled={isRunning || seconds <= 0}
        >
          Start
        </button>
        <button
          className="px-2 bg-red-500 text-white"
          onClick={stop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button className="px-2 bg-slate-500 text-white" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
