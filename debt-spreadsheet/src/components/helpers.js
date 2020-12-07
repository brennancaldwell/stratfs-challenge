function padNumber(num) {
  let stringNum = num.toString();
  if (!stringNum.includes('.')) return `${stringNum}.00`
  if (stringNum.split('.')[1].length === 1) return `${stringNum}0`;
  return stringNum;
}

function calculateTotal(allData, selected) {
  let batch = allData;
  if (selected.length > 0 && selected.length < allData.length) {
    batch = batch.filter(transaction => selected.includes(transaction.id));
  }

  let total = 0;
  batch.forEach(transaction => total += transaction.balance);

  return padNumber(total);
}

export {
  padNumber,
  calculateTotal
}