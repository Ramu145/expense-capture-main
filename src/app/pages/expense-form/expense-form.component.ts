import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ExpenseItem } from 'src/app/models/expense-item';
import {addExpense, getExpense} from '../../store/actions/reimbursement.action';
import {createExpense} from '../../selectors/expense.selector'

 export const Expense :ExpenseItem[] = [
  {
    id:1,
    name:'Meeting with The Client',
    description:'A Meeting With The Client In Lunch Time',
    expenseType:'Food',
    expenseDate: new Date('22-09-2022'),
    value:1500
  },{
    id: 2,
    name: 'Meeting with The Client',
    description: 'A Meeting With The Client In Lunch Time',
    expenseType: 'Food',
    expenseDate: new Date('21-09-2022'),
    value: 200
  }
];

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  expenseEntries;
  expenseForm: FormGroup;
  expense_Sub_type = [
    {name:'Client Visit'},
    {name:'Employee Benfit'},
]
selectedSubItem = '';
  constructor(private fb: FormBuilder, private store:Store) {
    this.expenseEntries = this.store.select(createExpense);
    console.log(this.expenseEntries);
   }

  ngOnInit(): void {

    this.store.dispatch(addExpense(JSON.parse(JSON.stringify(Expense))));

    this.expenseForm = this.fb.group({
      'empId':  [null,Validators.required],
      'empName': [null, Validators.required],
      'empDescription': [null, Validators.required],
      'expenseSubType':  [null,Validators.required],
      'expenseDate':  [null,Validators.required]
    })
 
  }

  AddExpense(formValue){
    debugger
    let expense = Expense.push();
    this.store.dispatch(addExpense(JSON.parse(JSON.stringify(formValue.value))));
    // this.store.dispatch(addExpense(this.expenseEntries))
    // console.log(formValue.value);
  }
  // getAllExpense(): void{
  //   this.store.dispatch(getExpense());
  //   console.log(this.store.select(getExpense))
  // }
}
