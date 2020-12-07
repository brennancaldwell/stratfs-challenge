import React from 'react';
import { padNumber } from './helpers';

export default function Table({ transactions, selected, selectOne }) {
  return (
    <table>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>Creditor</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Min Pay %</th>
        <th>Balance</th>
      </tr>
      {transactions.map(transaction => {
        let selectedStyle = { background: '#ffffff' };
        if (selected.includes(transaction.id)) {
          selectedStyle = { background: '#f58887' }
        }

        console.log(typeof transaction.id)
        return (
          <tr style={selectedStyle}>
            <td>
              <input
                type="checkbox"
                id={transaction.id}
                onClick={selectOne}
              />
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