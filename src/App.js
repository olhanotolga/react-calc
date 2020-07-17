import React from 'react';
import './App.css';
import ClassCalculator from './components/ClassCalculator.js'
import FuncCalculator from './components/FuncCalculator.js'

function App() {
  return (
    <div className="App">
      <ClassCalculator />
      {/* <FuncCalculator result={100} output="Hello"/>
      <FuncCalculator result={300}/> */}
    </div>
  );
}

export default App;
