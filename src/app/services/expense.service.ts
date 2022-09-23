import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // expenses =JSON.parse(localStorage.getItem('state'))
getAllRecords = new BehaviorSubject([])
  constructor() { }
}
