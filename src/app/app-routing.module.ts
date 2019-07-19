import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExpenseeveModule} from './expenseeve/expenseeve.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './expenseeve/expenseeve.module#ExpenseeveModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ExpenseeveModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
