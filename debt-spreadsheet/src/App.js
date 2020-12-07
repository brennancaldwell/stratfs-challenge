import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
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
      <Table />
    </div>
  );
}

export default App;
