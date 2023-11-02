import { useState } from "react";

function App() {
  const [dots, setDots] = useState([]);
  const [forward, setForward] = useState([]);

  const handleClick = (e) => {
    const data = { left: e.clientX, top: e.clientY };
    setDots([...dots, data]);
    setForward([]);
  };
  const handleBack = (e) => {
    e.stopPropagation();
    if (dots.length > 0) {
      const cloneArr = [...dots];
      const deleted = cloneArr.pop();
      setForward([...forward, deleted]);
      setDots(cloneArr);
    }
  };

  function handleForward(e) {
    e.stopPropagation();
    const cloneArr2 = [...forward];
    const newArr2 = cloneArr2.pop();
    setDots([...dots, newArr2]);
    setForward(cloneArr2);
  }
  return (
    <div className="mainDiv" onClick={(e) => handleClick(e)}>
      <button disabled={dots.length === 0} onClick={(e) => handleBack(e)}>
        Back
      </button>
      <button onClick={(e) => handleForward(e)} disabled={forward?.length === 0}>
        Forward
      </button>
      {dots.map((item, key) => (
        <div
          key={key}
          className="dot"
          style={{ left: `${item.left}px`, top: `${item.top}px` }}
        ></div>
      ))}
    </div>
  );
}

export default App;
