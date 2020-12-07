import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Modal from 'react-modal';
import AddDebt from './components/AddDebt';
import { calculateTotal } from './components/helpers';
import './App.css';

Modal.setAppElement('#root');

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

  function addDebt(newTransaction) {
    let newAllData = allData.slice();
    newAllData.push(newTransaction);
    setAllData(newAllData);
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
          .then((data) => setAllData(data.data));
  }, []);

  let remove = (<div></div>);
  if (selected.length > 0) {
    remove = (
      <button className="remove" onClick={removeDebt}>
        Remove Debt
      </button>
    );
  }

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
      {remove}
      <br />
      <div className="totalsContainer">
        <div className="totals">
          <h2>Total: ${calculateTotal(allData, selected)}</h2>
          <div>Total Row Count: {allData.length}</div>
          <div>Check Row Count: {selected.length}</div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleModal}
        style={{content: { 'max-width': '500px', 'max-height': '300px'}}}
      >
        <AddDebt
          addDebt={addDebt}
          toggleModal={toggleModal}
          allData={allData}
        />
      </Modal>

    </div>
  );
}

export default App;
