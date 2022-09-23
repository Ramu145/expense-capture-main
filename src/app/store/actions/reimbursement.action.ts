import {createAction, props} from '@ngrx/store';
import {ExpenseItem} from '../../models/expense-item'

export const getExpense = createAction('Get Expense');
export const addExpense = createAction('Add Expense',  props<ExpenseItem>());
export const totalExpense = createAction('Total Expense');
// export const addExpenseSuccess = createAction('Add Expenseuccess', props<ExpenseItem>());