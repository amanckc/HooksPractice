import React from "react";

// function Time() {
//
//   console.log(time);
// }

function App() {
  let current = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(current);

  function TimeSetter() {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={TimeSetter}>Get Time</button>
    </div>
  );
}

export default App;
