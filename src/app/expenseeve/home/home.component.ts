import {Component, OnInit, ViewChild} from '@angular/core';
import {ExpenseService} from '../services/expense.service';
import {ExpensesDataSource} from '../services/expenses.datasource';
import {MatPaginator} from '@angular/material';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/reducer';
import {PageQuery, AllExpensesRequesed} from '../expense.action';
import {tap, map, take} from 'rxjs/operators';
import { selectAllExpenses, getkeyOfExpense } from '../expense.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource: ExpensesDataSource;
  // dataSource;
  displayedColumns: string[] = ['CategoryName', 'itemName', 'Amount', 'Date'];

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private store: Store<AppState>) {
    console.log('homecomponent');
  }

  ngOnInit() {
    this.store.dispatch(new AllExpensesRequesed());

    let store = this.store.pipe(select(selectAllExpenses));

    store.pipe(select(getkeyOfExpense)).subscribe(data =>{
      console.log('data',data);
    })

    this.dataSource = new ExpensesDataSource(this.store);

    const initialPage: PageQuery = {
      pageIndex: 0,
      pageSize: 3,
    };

    this.dataSource.loadExpenses(initialPage);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadLessonsPage())).subscribe();
  }

  loadLessonsPage() {
    const newPage: PageQuery = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
    };

    this.dataSource.loadExpenses(newPage);
  }
}
