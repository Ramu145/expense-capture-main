import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbMenuModule, NbCardModule, NbSelectModule, NbInputModule, NbDatepickerModule, NbButtonModule } from '@nebular/theme';
import { RecordExpenseComponent } from './pages/record-expense/record-expense.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseFormComponent } from './pages/expense-form/expense-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {ExpenseReducer} from './reducers/expense.reducers'
import {ExpenseService} from './services/expense.service'
@NgModule({
  declarations: [
    AppComponent,
    RecordExpenseComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbCardModule,
    NbEvaIconsModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    StoreModule.forRoot({expense: ExpenseReducer})
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
