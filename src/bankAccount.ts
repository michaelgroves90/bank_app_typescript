import { Transaction } from "./transaction";

export class BankAccount {
  balance: number;
  transaction_history: object[];

  constructor() {
    this.balance = 0;
    this.transaction_history = [];
  }

  deposit(n: number): void {
    this.balance += n;
    let transaction = new Transaction(n, '', this.balance)
    this.transaction_history.push(transaction);
  }

  withdraw(n: number): void {
    this.balance -= n;
    let transaction = new Transaction('', n, this.balance)
    this.transaction_history.push(transaction);
  }

}