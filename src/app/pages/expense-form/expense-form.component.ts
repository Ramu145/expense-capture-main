import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ExpenseItem } from 'src/app/models/expense-item';
import {addExpense, getExpense} from '../../store/actions/reimbursement.action';
import {createExpense, getExpenseValues} from '../../selectors/expense.selector'
import { ExpenseService } from 'src/app/services/expense.service';

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
    expenseType: 'Accommodation',
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
  allExprenseValues;
  expenseForm: FormGroup;
  submitted = false;
  successMsg = false;
  expense_Sub_type = [
    {name:'Accommodation'},
    {name:'Food'},
    {name:'Milage'},
    {name:'PublicTransport'},
]
selectedSubItem = '';
  constructor(private fb: FormBuilder, private store:Store, private service:ExpenseService) {
    this.expenseEntries = this.store.select(createExpense);
    console.log(this.expenseEntries);
   }

  ngOnInit(): void {
if(localStorage.getItem('state') == null){
  this.store.dispatch(addExpense(JSON.parse(JSON.stringify(Expense))));
  
}
    this.getExpense();
    this.expenseForm = this.fb.group({
      'id':  ['',Validators.required],
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'expenseType':  ['',Validators.required],
      'expenseDate':  ['',Validators.required],
      'value':  ['',Validators.required, Validators.pattern('[0-9]*')],
    })
    this.service.getAllRecords.next(JSON.parse(localStorage.getItem('state')))
 
  }

  AddExpense(formValue){

 if(this.expenseForm.invalid){
  this.submitted = true;
  return
 }else{
  this.submitted = false;
  this.successMsg = true;
  let expense = Expense.push(formValue.value);
    //console.log(Expense);
    this.store.dispatch(addExpense(JSON.parse(JSON.stringify(Expense))));
    this.service.getAllRecords.next(JSON.parse(localStorage.getItem('state')))
    // this.getExpense();
  this.expenseForm.reset();
 }
    

  }

  getExpense(){
  this.allExprenseValues = this.store.select(getExpenseValues); 
    console.log('this is get values', this.allExprenseValues);

  }
  onReset(): void {
    this.submitted = false;
    this.expenseForm.reset();
  }
  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
