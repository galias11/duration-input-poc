// @Vendors
import React, { useState } from "react";

import './app.css';

import Solution from "containers/Solution";

interface IProps {
  children?: React.ReactNode;
}

const App: React.SFC<IProps> = () => {
  const [ currentValue, setCurrentValue ] = useState(5999999);

  return (
    <div className="main-container">
      <Solution
        onChange={(value : number) => { console.log(value); setCurrentValue(value) }}
        value={currentValue}/>
    </div>
  )
};

export default App;
