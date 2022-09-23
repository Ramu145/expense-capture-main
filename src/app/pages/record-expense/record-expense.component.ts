import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import {BehaviorSubject} from 'rxjs'
@Component({
  selector: 'app-record-expense',
  templateUrl: './record-expense.component.html',
  styleUrls: ['./record-expense.component.scss']
})
export class RecordExpenseComponent implements OnInit {
totalExpenses;
  selectedItem;
  submitted = false;
allExpense;

  expense_type  = [
    {name:'Accomodation'},
    {name:'Food'},
    {name:'Milage'},
    {name:'PublicTransport'},

  ]
  constructor(private service:ExpenseService) { 

  }
 

  ngOnInit(): void {
    this.getAllexpenses();

  }

getAllexpenses(){
  this.service.getAllRecords.subscribe((data)=>{
    let getVal = data;
    // this.allExpense = data;
    getVal = Object.values(getVal)
    console.log(getVal.pop())
    this.totalExpenses = getVal.length;
    console.log(getVal)
    this.allExpense = getVal;
  });
}

}
