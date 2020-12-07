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

    const { addDebt, toggleModal } = this.props;

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          <button id="addModal">Submit Debt</button>
      </div>
    );
  }
}