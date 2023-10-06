import React, { useState } from "react";
import { StyledColorBlock } from './index.style'

function App() {
     const colors: string[] = ['red', 'brown', 'lightgreen', 'yellow', 'green', 'orange', 'purple', 'blue'  ]
  const [areaColor, setAreaColor] = useState('white')
  const changeToRandomColor = () => {
    setAreaColor(colors[Math.floor(Math.random() * colors.length)])
  }
  return (
    <>
      <StyledColorBlock style={{background: areaColor }}>{areaColor}</StyledColorBlock>
      <button onClick={changeToRandomColor}>change color</button>
    </>
  );
}

export default App;
