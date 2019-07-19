import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {ExpenseService} from './services/expense.service';
import {Store, select} from '@ngrx/store';
import {AppState} from '../reducer';
import {
  AllExpensesRequesed,
  ExpenseActionTypes,
  AllExpensesLoaded,
} from './expense.action';
import {mergeMap, map, withLatestFrom, filter} from 'rxjs/operators';
//import { allExpensesLoaded } from './expense.selectors';


@Injectable()
export class ExpenseEffects {

  @Effect()
  loadAllExpenses$ = this.actions$.pipe(
    ofType<AllExpensesRequesed>(ExpenseActionTypes.AllExpensesRequesed),
    mergeMap(() => this.expenseService.getExpenses()),
    map(expenses => new AllExpensesLoaded({expenses}))
  );

  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService,
    private store: Store<AppState>
  ) {}
}
