import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-expense',
  templateUrl: './record-expense.component.html',
  styleUrls: ['./record-expense.component.scss']
})
export class RecordExpenseComponent implements OnInit {

  selectedItem;
  submitted = false;

  expense_type  = [
    {name:'Accomodation'},
    {name:'Food'},
    {name:'Milage'},
    {name:'PublicTransport'},

  ]
  constructor() { }

  ngOnInit(): void {
  }



}
