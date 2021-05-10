import { BankAccount } from "../src/bankAccount";
import { expect } from 'chai';

describe('Bank Account', () => {
  var bankAccount = new BankAccount();

  it('Initialises with a starting balance', () => {
    expect(bankAccount.balance).to.equal(0);
  });

  it('Deposits are added to the account balance', () => {
    bankAccount.deposit(10);
    expect(bankAccount.balance).to.equal(10);

  })


});