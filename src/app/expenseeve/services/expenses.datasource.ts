import {DataSource} from '@angular/cdk/table';
import {Expense} from '../expense.model';
import {CollectionViewer} from '@angular/cdk/collections';
import {Observable, BehaviorSubject} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/reducer';
import {PageQuery, ExpensePageRequested} from '../expense.action';
import {selectExpensePage} from '../expense.selectors';

export class ExpensesDataSource implements DataSource<Expense> {
  private expensesSubject = new BehaviorSubject<Expense[]>([]);

  constructor(private store: Store<AppState>) {}

  loadExpenses(page: PageQuery) {
    console.log('expenses');
    this.store.pipe(
      select(selectExpensePage(page)),
      tap(expenses => {
        if (expenses.length > 0) {
          this.expensesSubject.next(expenses);
        } else {
            console.log('else')
          this.store.dispatch(new ExpensePageRequested({page}));
        }
      })
    ).subscribe();
  }

  connect(collectionViewer: CollectionViewer): Observable<Expense[]> {
    console.log('Connecting data source');
    return this.expensesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.expensesSubject.complete();
  }
}
