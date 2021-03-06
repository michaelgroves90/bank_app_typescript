import { BankAccount } from "../src/bankAccount";
import { expect } from 'chai';

describe('Bank Account', () => {
  let bankAccount;

  beforeEach(function() {
     bankAccount = new BankAccount();
  });

  it('Initialises with a starting balance', () => {
    expect(bankAccount.balance).to.equal(0);
  });

  it('Deposits are added to the account balance', () => {
    bankAccount.deposit(10);
    expect(bankAccount.balance).to.equal(10);
  });

  it('Withdrawals are added to the account balance', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.balance).to.equal(5);
  });

  it('Withdrawals cannot be made past 0', () => {
    bankAccount.deposit(10);
    expect(function() {
      bankAccount.withdraw(11)
    }).to.throw(`Cannot Withdraw, Balance is ${bankAccount.balance}`);
  });  

  it('Stores transaction data in transaction history', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.transaction_history.length).to.equal(2);
    expect(bankAccount.transaction_history[0].credit).to.equal(10);
    expect(bankAccount.transaction_history[1].debit).to.equal(5);
  });

  it('Prints an account statement', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.printStatement()).to.eql([
      {
      "balance": 10,
      "credit": 10,
      "date": bankAccount.transaction_history[0].date,
      "debit": 0
      },
      {
      "balance": 5,
      "credit": 0,
      "date": bankAccount.transaction_history[1].date,
      "debit": 5
      }]);
  });

});