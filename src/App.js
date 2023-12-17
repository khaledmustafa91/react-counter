import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleMinus = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div className="counter">
        <h3>First React App</h3>
        <p className="counter_text">{counter}</p>
        <button
          className="button-style button-style--large"
          onClick={handlePlus}
        >
          +
        </button>
        <button
          className="button-style button-style--large"
          onClick={handleMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
