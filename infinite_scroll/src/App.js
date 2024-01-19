import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(50);

  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(<div key="i">{i + 1}</div>);
  }

  useEffect(() => {
    const handleInfiniteScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        setCount((prev) => prev + 50);
      }
    };

    window.addEventListener("scroll", handleInfiniteScroll);
  }, [count]);

  return <div className="App">{arr}</div>;
}

export default App;
