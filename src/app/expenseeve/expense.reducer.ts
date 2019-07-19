import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Expense} from './expense.model';
import {ExpenseActions, ExpenseActionTypes} from './expense.action';

export interface ExpenseState extends EntityState<Expense> {
  
}

export const adapter: EntityAdapter<Expense> = createEntityAdapter<Expense>();

export const initialExpenseState: ExpenseState = adapter.getInitialState();

export function expensesReducer(
  state = initialExpenseState,
  action: ExpenseActions
): ExpenseState {
  switch (action.type) {
    case ExpenseActionTypes.AllExpensesLoaded:
      return adapter.addAll(action.payload.expenses, state);
    default: {
      state;
    }
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();
