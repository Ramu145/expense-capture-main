import {createReducer, on} from '@ngrx/store'
import {ExpenseItem} from '../models/expense-item'
import {addExpense, getExpense} from '../store/actions/reimbursement.action'

export interface ExpenseState{
    expense:ReadonlyArray<ExpenseItem>
}

const initialState : ExpenseItem[] = [];

export const ExpenseReducer = createReducer(
    initialState, 
    on(addExpense, (entries, expense)=>{
        debugger
        const entriesClone:ExpenseItem[] = JSON.parse(JSON.stringify(entries));
        entriesClone.push(expense)
        return entriesClone;
    }),
    on(getExpense, ()=>{
        return initialState;
    })
    );