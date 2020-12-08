import React from 'react';
import { padNumber } from './helpers';

export default function Table({ transactions, selected, selectOne, selectAll }) {

  let checkAll =(<input type="checkbox" onClick={selectAll}/>);
  if (selected.length === 0) {
    checkAll =(<input type="checkbox" onClick={selectAll}/>);
  } else if (selected.length === transactions.length) {
    checkAll =(<input type="checkbox" onClick={selectAll} checked/>)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>
            {checkAll}
          </th>
          <th>Creditor</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Min Pay %</th>
          <th>Balance</th>
        </tr>
       </thead>
      <tbody>
      {transactions.map(transaction => {
        let check = (<input
          type="checkbox"
          id={transaction.id}
          onClick={selectOne}
        />);

        let selectedStyle = { background: '#ffffff' };
        if (selected.length > 0) {
          if (selected.includes(transaction.id)) {
            check = <input
          type="checkbox"
          id={transaction.id}
          onClick={selectOne}
          checked/>
          } else {
            selectedStyle = { background: '#f58887' }
          }
        }

        return (
          <tr style={selectedStyle}>
            <td>
              {check}
            </td>
            <td>{transaction.creditorName}</td>
            <td>{transaction.firstName}</td>
            <td>{transaction.lastName}</td>
            <td>{padNumber(transaction.minPaymentPercentage)}%</td>
            <td>{padNumber(transaction.balance)}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}