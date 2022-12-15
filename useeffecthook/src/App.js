
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 10000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

export default App;
