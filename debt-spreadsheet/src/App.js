import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ allData, setAllData ] = useState([]);
  const [ selected, setSelected ] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
          .then((data) => setAllData(data.data));
  }, []);

  console.log(allData);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
