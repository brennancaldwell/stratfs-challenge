import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import './App.css';

function App() {
  const [ allData, setAllData ] = useState([]);
  const [ selected, setSelected ] = useState([]);

  function selectOne(e) {
    let newSelected = selected.slice();
    if (newSelected.includes(Number(e.target.id))) {
      newSelected = newSelected.filter(el => el !== Number(e.target.id));
    } else {
      newSelected.push(Number(e.target.id));
    }
    setSelected(newSelected);
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
          .then((data) => setAllData(data.data));
  }, []);

  console.log(selected);

  return (
    <div className="App">
      <Table
        transactions={allData}
        selected={selected}
        selectOne={selectOne}
      />
    </div>
  );
}

export default App;
