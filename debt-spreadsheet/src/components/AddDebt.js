import React from 'react';

export default class AddDebt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditorName: '',
      firstName: '',
      lastName: '',
      minPaymentPercentage: '',
      balance: ''
    }

    this.onChange = this.onChange.bind(this);
    this.submitDebt = this.submitDebt.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitDebt() {
    const { creditorName, firstName, lastName, minPaymentPercentage, balance } = this.state;

    const { addDebt, toggleModal, allData } = this.props;

    let id = allData.reduce((a, b) => {
      if (a < b.id) {
        return b.id
      } else {
        return a;
      }
    }, 0) + 1;

    if (isNaN(Number(minPaymentPercentage)) && isNaN(Number(balance))) {
      throw new Error('Please enter a number for Min Pay % and Balance!')
    } else if (isNaN(Number(minPaymentPercentage))) {
      throw new Error ('Please enter a number for Min Pay %!')
    } else if (isNaN(Number(balance))) {
      throw new Error ('Please enter a number for Balance!')
    }

    addDebt({ id,
              creditorName,
              firstName,
              lastName,
              minPaymentPercentage: Number(minPaymentPercentage),
              balance: Number(balance)});

    toggleModal();
  }



  render() {
    const { creditorName, firstName, lastName, minPaymentPercentage, balance } = this.state;

    return (
      <div className="modal">
        <h2>Add Debt</h2>
        <label name="creditor">Creditor: </label>
          <input
          type="text"
          name="creditorName"
          onChange={this.onChange}
          value={creditorName}
          /> <br />
        <label name="firstName">First Name: </label>
          <input
          type="text"
          name="firstName"
          onChange={this.onChange}
          value={firstName}
          /> <br />
        <label name="lastName">Last Name: </label>
          <input
          type="text"
          name="lastName"
          onChange={this.onChange}
          value={lastName}
          /> <br />
        <label name="percentage">Min Pay %: </label>
          <input
          type="text"
          name="minPaymentPercentage"
          onChange={this.onChange}
          value={minPaymentPercentage}
          /> <br />
        <label name="balance">Balance: </label>
          <input
          type="text"
          name="balance"
          onChange={this.onChange}
          value={balance}
          /> <br />
          <button
            className="addModal"
            onClick={this.submitDebt}
          >
            Submit Debt
          </button>
      </div>
    );
  }
}