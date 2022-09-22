import { ExpenseType } from '../enums/expense-types.enum';

export class ExpenseItem {
    id: number;
    name: string;
    description: string;
    expenseType: string;
    expenseDate: Date;
    value: number;
  }
  