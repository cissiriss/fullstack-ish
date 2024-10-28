import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

  return (
    <>
      <div>Hej</div>
    </>
  );
}

export default App;
