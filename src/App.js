import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  return (
    <>
    <button onClick={
      () => {
        setValue(value+1);
        alert(`The value is ${value}`);
      }
    }>HIT ME</button>
    </>
  );
}

export default App;
