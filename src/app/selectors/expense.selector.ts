import {ExpenseItem} from '../models/expense-item';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const createExpense = createSelector(
    createFeatureSelector('expenceEntries'),
    (state:ExpenseItem[])=>{
        return state;
    }
)
export const getExpenseValues = createSelector(
    createFeatureSelector('get Expense Values'),
    (state:ExpenseItem[])=>{
        return state;

    }
);
