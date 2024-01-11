import ProgressBar from "./components/ProgressBar";
import { useEffect, useRef, useState } from "react";

const totalTime = 10 * 1000;
const interval = 1000;
const totalCycle = totalTime / interval;
const progressMade = (interval / totalTime) * 100;

function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cycleCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prev) => prev + progressMade);
      cycleCompleted.current = cycleCompleted.current + 1;
      if (cycleCompleted.current === totalCycle) {
        clearInterval(timer.current);
      }
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="App">
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
