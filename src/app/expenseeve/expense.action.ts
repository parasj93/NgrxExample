import {Action} from '@ngrx/store';
import {Expense} from './expense.model';
import {Update} from '@ngrx/entity';

export enum ExpenseActionTypes {
  ExpenseRequested = '[View Home Page] Expense Requested',
  ExpenseLoaded = '[Expenses API] Expenses Loaded',
  AllExpensesRequesed = '[Expenses Home Page] All Expenses Requested',
  AllExpensesLoaded = '[Expenses API]  All Expenses Loaded',
  ExpensePageRequested = '[Home Page] Expense Page Requested',
  ExpensePageCancelled = '[Expense API] Home Page Cancelled',
  ExpenseSaved = '[Edit Expense] Expense Saved',
}

export interface PageQuery {
  pageIndex: number;
  pageSize: number;
}

export class ExpensePageRequested implements Action {
  readonly type = ExpenseActionTypes.ExpensePageRequested;
  constructor(public payload: {page: PageQuery}) {}
}

export class ExpenseLoaded implements Action {
  readonly type = ExpenseActionTypes.ExpenseLoaded;
  constructor(public payload: {expense: Expense}) {}
}

export class ExpensePageCancelled implements Action {
  readonly type = ExpenseActionTypes.ExpensePageCancelled;
}

export class AllExpensesRequesed implements Action {
  readonly type = ExpenseActionTypes.AllExpensesRequesed;
}

export class AllExpensesLoaded implements Action {
  readonly type = ExpenseActionTypes.AllExpensesLoaded;

  constructor(public payload: {expenses: Expense[]}) {}
}

export class ExpenseSaved implements Action {
  readonly type = ExpenseActionTypes.ExpenseSaved;

  constructor(public payload: {expense: Update<Expense>}) {}
}

export type ExpenseActions =
  | ExpensePageRequested
  | ExpenseLoaded
  | ExpensePageCancelled
  | AllExpensesRequesed
  | AllExpensesLoaded
  | ExpenseSaved;
