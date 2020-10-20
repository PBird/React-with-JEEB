import React from "react";
import Hello from "./Hello";

const App: React.FC = () => {
  return (
    <div>
      <Hello />
    </div>
  );
};

const x: Array<string> = ["a", "b"];
const y: ReadonlyArray<string> = ["a", "b"];

console.log(x[0], y[0]);

export default App;
