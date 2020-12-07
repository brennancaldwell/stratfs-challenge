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

  return (
    <div className="App">
      <Table transactions={allData}/>
    </div>
  );
}

export default App;
