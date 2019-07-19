import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Expense} from '../expense.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {
    console.log('this is ExpenseService constructor');
  }

  getExpenses(): Observable<Expense[]> {
    console.log('this is ExpenseService getExpenses');
    return this.http.get('/api/expenses').pipe(map(res => res['payload']));
  }
}
