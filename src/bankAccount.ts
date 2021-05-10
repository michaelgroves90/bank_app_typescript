export class BankAccount {
  balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(n: number): void {
    this.balance += n;
  }

  withdraw(n: number): void {
    this.balance -= n;
  }

}