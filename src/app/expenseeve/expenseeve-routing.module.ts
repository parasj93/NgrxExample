import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings/settings.component';
import {ProfileComponent} from './profile/profile.component';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'add',
    component: AddExpenseComponent,
  },
  {
    path: 'edit',
    component: EditExpenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseeveRoutingModule {}
