import React from 'react';
import './App.css';
import LineUp from 'lineupjsx'
import 'lineupjsx/build/LineUpJSx.css'

const App = () => {
  const arr = [];
  const cats = ['c1', 'c2', 'c3'];
  for (let i = 0; i < 100; ++i) {
    arr.push({
      a: Math.random() * 10,
      d: 'Row ' + i,
      cat: cats[Math.floor(Math.random() * 3)],
      cat2: cats[Math.floor(Math.random() * 3)]
    })
  }
  return (
    <LineUp data={arr}/>
  );
}

export default App;
