import React from 'react';

export default function Table({ transactions }) {
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
        return (
          <tr>
            <td>
              <input type="checkbox" id={transaction.id} />
            </td>
            <td>{transaction.creditorName}</td>
            <td>{transaction.firstName}</td>
            <td>{transaction.lastName}</td>
            <td>{transaction.minPaymentPercentage}</td>
            <td>{transaction.balance}</td>
          </tr>
        )
      })}
    </table>
  );
}