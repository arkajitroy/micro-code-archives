import Countdown from "./components/countdown";
import Stopwatch from "./components/stopwatch";

export default function CustomHookPattern() {
  return (
    <main>
      <h3 className="font-bold">Custom Hook Pattern</h3>
      <Stopwatch />
      <Countdown initialSeconds={60} />
    </main>
  );
}
