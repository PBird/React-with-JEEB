import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
};

const x: Array<string> = ["a", "b"];
const y: ReadonlyArray<string> = ["a", "b"];

console.log(x[0], y[0]);

export default App;
