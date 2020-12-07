import React from 'react';

export default function Table() {
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
    </table>
  );
}