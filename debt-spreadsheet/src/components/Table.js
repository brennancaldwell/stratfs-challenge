import React from 'react';
import { padNumber } from './helpers';

export default function Table({ transactions, selected, selectOne, selectAll }) {
  return (
    <table>
      <tr>
        <th>
          <input type="checkbox" onClick={selectAll}/>
        </th>
        <th>Creditor</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Min Pay %</th>
        <th>Balance</th>
      </tr>
      {transactions.map(transaction => {
        let check = (<input
          type="checkbox"
          id={transaction.id}
          onClick={selectOne}
        />);

        let selectedStyle = { background: '#ffffff' };
        if (selected.includes(transaction.id)) {
          selectedStyle = { background: '#f58887' }
          check = <input
          type="checkbox"
          id={transaction.id}
          onClick={selectOne}
          checked/>
        }

        console.log(typeof transaction.id)
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
    </table>
  );
}