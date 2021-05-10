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

  it('Deposits are added to the account balance', () => {
    bankAccount.deposit(10);
    bankAccount.withdraw(5);
    expect(bankAccount.balance).to.equal(5);
  });

});