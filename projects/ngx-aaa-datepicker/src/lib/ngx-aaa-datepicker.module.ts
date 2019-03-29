import { NgModule } from '@angular/core';
import { NgxAaaDatepickerComponent } from './ngx-aaa-datepicker.component';
import { AaDatepickerModule } from 'ngx-animating-datepicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxAaaDatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    AaDatepickerModule
  ],
  exports: [NgxAaaDatepickerComponent]
})
export class NgxAaaDatepickerModule { }
