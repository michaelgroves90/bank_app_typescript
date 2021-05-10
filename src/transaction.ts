export class Transaction {
  date: Date;
  credit: number;
  debit: number;
  balance: number;

  constructor(credit, debit, balance) {
    this.date = new Date();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

};

