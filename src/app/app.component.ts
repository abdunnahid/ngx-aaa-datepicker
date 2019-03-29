import { Component } from '@angular/core';
import { AAAPickerModes } from 'ngx-aaa-datepicker/lib/aaa-picker-modes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aaa-datepicker-library';

  pickerModes: AAAPickerModes = {
    single: true,
    multi: true,
    range: true
  }

  getDate(event) {
    console.log("TCL: AppComponent -> getDate -> event", event);
  }
}
