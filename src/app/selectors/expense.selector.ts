import {ExpenseItem} from '../models/expense-item';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const createExpense = createSelector(
    createFeatureSelector('expenceEntries'),
    (state:ExpenseItem[])=>{
        return state;
    }
)
export const getExpense = createSelector(
    createFeatureSelector('gettingAllExpense'),
    (state:ExpenseItem[])=>{
        return state;

    }
);