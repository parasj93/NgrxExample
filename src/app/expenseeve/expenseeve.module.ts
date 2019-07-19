import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule, MatPaginatorModule} from '@angular/material/';
import {HttpClientModule} from '@angular/common/http';

import {ExpenseeveRoutingModule} from './expenseeve-routing.module';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';
import {DeleteExpenseComponent} from './delete-expense/delete-expense.component';
import {StoreModule} from '@ngrx/store';
import {expensesReducer} from './expense.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ExpenseEffects} from './expense.effects';

@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    DeleteExpenseComponent,
  ],
  imports: [
    CommonModule,
    ExpenseeveRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('expenses', expensesReducer),
    EffectsModule.forFeature([ExpenseEffects]),
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class ExpenseeveModule {}
