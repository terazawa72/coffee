import { Component, OnInit } from '@angular/core';
import { coffeeData } from '../../assets/coffee-data';

@Component({
  selector: 'app-coffee-view',
  templateUrl: './coffee-view.component.html',
  styleUrls: ['./coffee-view.component.scss']
})
export class CoffeeViewComponent implements OnInit {

  data: any[];
  displayedColumns: string[] = ['date', 'name', 'valueout', 'valuein', 'balance'];
  currentYear = -1;
  currentDate: Date = new Date();
  
  yearData = [
    {year: 2019, balance: 0, valuein: 0, valueout: 0, icon: 'circle'},
    {year: 2020, balance: 0, valuein: 0, valueout: 0, icon: 'circle'},
    {year: 2021, balance: 0, valuein: 0, valueout: 0, icon: 'circle'},
  ];

  constructor() { }

  ngOnInit() {
    this.calcValues();
    this.loadData(2020);
  }

  getYearIndex(value) {
    let index = value - 2019;
    if (index < 0) 
      index = -1;
    return index; 
  }

  calcValues() {
    let index = -1;
    for (let i=0; i<coffeeData.length; i++) {
      index = -1; 
      if (coffeeData[i].date.indexOf('2019') >= 0)
        index = 0
      else if (coffeeData[i].date.indexOf('2020') >= 0) 
        index = 1
      else if (coffeeData[i].date.indexOf('2021') >= 0)
        index = 2;
      if (index >=0 && index <= 2) {
        this.yearData[index].valuein += coffeeData[i].valuein;  
        this.yearData[index].valueout += coffeeData[i].valueout;
      }
    }
    this.yearData[0].balance = (this.yearData[0].valuein - this.yearData[0].valueout);
    this.yearData[1].balance = (this.yearData[1].valuein - this.yearData[1].valueout) + this.yearData[0].balance;
    this.yearData[2].balance = (this.yearData[2].valuein - this.yearData[2].valueout) + this.yearData[1].balance;
  }

  loadData(value) {
    this.updateIcon(value);
    if (value != this.currentYear) {
      this.data = coffeeData.filter(
        function(item) {
          return item.date.indexOf(value) >= 0;
        }
      );
      this.currentYear = value;
    }
  }

  doClick(value) {
    this.loadData(value);
  }

  updateIcon(value)
  {
    for (let i=0; i<3; i++) {
      if (value == 2019 + i) {
        this.yearData[i].icon = 'dot-circle';
      }
      else 
      {
        this.yearData[i].icon = 'circle';
      }
    }
  }

}
