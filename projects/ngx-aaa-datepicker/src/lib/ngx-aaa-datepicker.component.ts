import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AAAPickerModes } from './aaa-picker-modes.interface';
import { AnimatepickerComponent, Options } from 'ngx-animating-datepicker';

@Component({
  selector: 'ngx-aaa-datepicker',
  templateUrl: './ngx-aaa.datepicker.component.html',
  styleUrls: ['./ngx-aaa.datepicker.component.scss']
})
export class NgxAaaDatepickerComponent implements OnInit {



  @Input() pickerModes: AAAPickerModes;
  @Output() getDate = new EventEmitter<object>();

  @ViewChild('ngxAAAdatepicker') demoDatepicker: AnimatepickerComponent;

  dates: Date[];
  pickerMode: string = 'single';
  today: Date = new Date();

  datepickerOptions: Options = {
    selectMultiple: false, // Select multiple dates
    range: false, // Use range functionality
    closeOnSelect: false, // Close datepicker when date(s) selected
    animationSpeed: 200, // Animation speed in ms
    easing: 'ease-in-out', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: true, // Hide the navigation
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 5000, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday' // Set the week start day
  };

  constructor() {
  }
  ngOnInit(): void {
  }

  changeDate() {
    let data;
    if (this.pickerMode === 'range') {
      data = {
        dates: {
          from: this.dates[0],
          to: this.dates[this.dates.length - 1],
          days: this.getDatesBetweenTwoDates(this.dates[0], this.dates[this.dates.length - 1])
        },
        type: this.pickerMode,
        hasDatePicked: this.dates.length > 0
      }
    }
    else {
      data = {
        dates: this.dates,
        type: this.pickerMode,
        hasDatePicked: this.dates.length > 0
      }
    }
    this.getDate.emit(data);
  }

  next() {
    this.demoDatepicker.goToNextMonth();
  }

  previous() {
    this.demoDatepicker.goToPreviousMonth();
  }

  changeDatepickerMode(e) {

    this.dates = [];

    switch (this.pickerMode) {
      case 'single':
        this.datepickerOptions = {
          selectMultiple: false, // Select multiple dates
          range: false, // Use range functionality
          closeOnSelect: false, // Close datepicker when date(s) selected
          animationSpeed: 200, // Animation speed in ms
          easing: 'ease-in-out', // Easing type string
          hideRestDays: false, // Hide the rest days
          disableRestDays: true, // Disable the click on rest days
          hideNavigation: true, // Hide the navigation
          currentDate: new Date(), // Tne current displayed date (month, year)
          timeoutBeforeClosing: 5000, // The timeout / delay before closing
          weekdayFormat: 'short', // "narrow", "short", "long"
          weekStart: 'monday' // Set the week start day
        };
        break;
      case 'multi':
        this.datepickerOptions = {
          selectMultiple: true, // Select multiple dates
          range: false, // Use range functionality
          closeOnSelect: false, // Close datepicker when date(s) selected
          animationSpeed: 200, // Animation speed in ms
          easing: 'ease-in-out', // Easing type string
          hideRestDays: false, // Hide the rest days
          disableRestDays: true, // Disable the click on rest days
          hideNavigation: true, // Hide the navigation
          currentDate: new Date(), // Tne current displayed date (month, year)
          timeoutBeforeClosing: 5000, // The timeout / delay before closing
          weekdayFormat: 'short', // "narrow", "short", "long"
          weekStart: 'monday' // Set the week start day
        };
        break;
      case 'range':
        this.datepickerOptions = {
          selectMultiple: false, // Select multiple dates
          range: true, // Use range functionality
          closeOnSelect: false, // Close datepicker when date(s) selected
          animationSpeed: 200, // Animation speed in ms
          easing: 'ease-in-out', // Easing type string
          hideRestDays: false, // Hide the rest days
          disableRestDays: true, // Disable the click on rest days
          hideNavigation: true, // Hide the navigation
          currentDate: new Date(), // Tne current displayed date (month, year)
          timeoutBeforeClosing: 5000, // The timeout / delay before closing
          weekdayFormat: 'short', // "narrow", "short", "long"
          weekStart: 'monday' // Set the week start day
        };
        break;
    }
  }

  private getDatesBetweenTwoDates(startDate: Date, endDate: Date): Date[] {

    let currentDate = startDate;
    let dates: Date[] = [];

    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = this.addDays(currentDate);
    }
    return dates;
  }
  private addDays(currentDate): Date {
    let date: Date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    return date;
  }


}
