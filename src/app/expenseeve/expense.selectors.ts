import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ExpenseState} from './expense.reducer';
import * as fromExpenses from './expense.reducer';
import {PageQuery} from './expense.action';
export const selectExpenseState = createFeatureSelector<ExpenseState>(
  'expenses'
);

export const selectAllExpenses = createSelector(
  selectExpenseState,
  fromExpenses.selectAll
);

// export const allExpensesLoaded = createSelector(
//   selectExpenseState,
//   expense => expense.loaded
// );

export const getkeyOfExpense = createSelector(
  selectAllExpenses,
  expenses =>expenses['entities']
)


export const selectExpensePage = (page: PageQuery) =>
  createSelector(
    selectAllExpenses,
    allExpenses => {
      console.log('1');
      JSON.stringify(allExpenses)
      console.log('selectExpensePage');
      const start = page.pageIndex * page.pageSize,
          end = start + page.pageSize;

    return allExpenses;
    }
  );
