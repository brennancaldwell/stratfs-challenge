function padNumber(num) {
  let stringNum = num.toString();
  if (!stringNum.includes('.')) return `${stringNum}.00`
  if (stringNum.split('.')[1].length === 1) return `${stringNum}0`;
  return stringNum;
}

export {
  padNumber
}