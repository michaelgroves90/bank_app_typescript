import { BankAccount } from "../src/bankAccount";
import { expect } from 'chai';

describe('Bank Account', () => {

  it('Initialises with a starting balance', () => {
    let bankAccount = new BankAccount()
    expect(bankAccount.balance).to.equal(0);
  });




});