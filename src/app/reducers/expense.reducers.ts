import {ActionReducer, createReducer, INIT, on, UPDATE} from '@ngrx/store'
import {ExpenseItem} from '../models/expense-item'
import {addExpense, getExpense, totalExpense} from '../store/actions/reimbursement.action'

export interface ExpenseState{
    expense:ReadonlyArray<ExpenseItem>
}

const initialState : ExpenseItem[] = [];

export const ExpenseReducer = createReducer(
    initialState, 
    on(addExpense, (entries, expense)=>{
        const entriesClone:ExpenseItem[] = JSON.parse(JSON.stringify(expense));
        localStorage.setItem("state", JSON.stringify(expense))
        

        return entriesClone;
    }),
    on(getExpense, (entries, expense)=>{
        const getEntries:ExpenseItem[] =  JSON.parse(JSON.stringify(entries));
        console.log('This is get call', getEntries);
        return getEntries;
    })
    );

// export const metaReducerLocalStorage = (reducer:ActionReducer<any>):ActionReducer<any>=>{
//     return (state, action)=>{

//         if(action.type === INIT || action.type === UPDATE){
//             const storagevalues = localStorage.getItem("state");
//             if(storagevalues){
//                 try{
//                     return JSON.parse(storagevalues);
//                 } catch {
//                     localStorage.removeItem("state");
//                 }
//             }
        
//         }

//         const nextState =reducer(state, action);
//         // localStorage.setItem("state", JSON.stringify(nextState))
//         return nextState;
//     }
// }