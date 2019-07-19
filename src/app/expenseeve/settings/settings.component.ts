import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    // this.expenseService.getExpenses().subscribe(expenses => {
    //   this.dataSource = expenses;
    //   console.log('this is the expenses', expenses);
    // });
  }
}
