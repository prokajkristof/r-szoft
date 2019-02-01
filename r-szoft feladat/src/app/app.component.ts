import { Component, enableProdMode, OnInit } from '@angular/core';
import { Car } from './car';
import { DatePipe } from '@angular/common'
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  manufacturer;
  type;
  color;
  date;
  list: Car[] = [];
  errorMessage = '';

  constructor(public datePipe: DatePipe) {}

  ngOnInit(): void {
  }

  save() {
    this.errorMessage = '';
    if(this.checkInputs()) {
      let car = new Car();
      car.manufacturer = this.manufacturer;
      car.type = this.type;
      car.color = this.color;
      let latest_date = this.datePipe.transform(this.date,"yyyy.MM.dd");
      car.date = latest_date;
      this.list.push(car);
      console.log(this.list);
    } else {
      this.errorMessage = 'A Gyártó - Típus - Gyártási Dátum mezők kitöltése kötelező!'
    }
  }

  checkInputs() {
    if(this.manufacturer == null || this.type == null || this.date == null || this.manufacturer == '' || this.type == '' || this.date == '') {
      return false;
    } else {
      return true;
    }
  }
}


