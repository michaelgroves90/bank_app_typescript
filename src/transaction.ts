export class Transaction {
  date: Date;
  credit: number;
  debit: number;
  balance: number;

  constructor(credit: number, debit: number, balance: number) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

};

