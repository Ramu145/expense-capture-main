import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordExpenseComponent } from './record-expense.component';

describe('RecordExpenseComponent', () => {
  let component: RecordExpenseComponent;
  let fixture: ComponentFixture<RecordExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
