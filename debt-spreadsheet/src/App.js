import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Modal from 'react-modal';
import AddDebt from './components/AddDebt';
import './App.css';

function App() {
  const [ allData, setAllData ] = useState([]);
  const [ selected, setSelected ] = useState([]);
  const [ modalOpen, setModalOpen ] = useState(false);

  function selectOne(e) {
    let newSelected = selected.slice();
    if (newSelected.includes(Number(e.target.id))) {
      newSelected = newSelected.filter(el => el !== Number(e.target.id));
    } else {
      newSelected.push(Number(e.target.id));
    }
    setSelected(newSelected);
  }

  function selectAll() {
    let newSelected = [];
    if (selected.length < allData.length) {
      allData.forEach(transaction => newSelected.push(transaction.id));
    }
    setSelected(newSelected);
  }

  function removeDebt() {
    let newAllData = allData.filter(transaction => !selected.includes(transaction.id));
    setAllData(newAllData);
    setSelected([]);
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
          .then((data) => setAllData(data.data));
  }, []);

  console.log(selected);

  if (allData.length === 0) return (<h1>Loading...</h1>)

  return (
    <div className="App">
      <Table
        transactions={allData}
        selected={selected}
        selectOne={selectOne}
        selectAll={selectAll}
      />
      <button className="add" onClick={toggleModal}>
        Add Debt
      </button>
      <button onClick={removeDebt}>
        Remove Debt
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        style={{content: { 'max-width': '500px'}}}
      >
        <AddDebt />
      </Modal>

    </div>
  );
}

export default App;
