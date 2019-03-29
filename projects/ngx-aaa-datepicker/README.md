# ngx-aaa-datepicker
> A datepicker that picks single, multiple and range type dates.

# How to
## module.ts
```typescript
    import { NgxAaaDatepickerModule } from 'ngx-aaa-datepicker';
    @NgModule({
      declarations: [],
      imports: [
        NgxAaaDatepickerModule,
        ...
      ],
      providers: [],
    });
```
## component.ts
```typescript
    export class ExampleComponent {
      pickerModes: AAAPickerModes = {
        single: true, // disable/enable single date picker mode
        multi: true, // disable/enable multiple date picker mode
        range: true // disable/enable range date picker mode
      }
      getDate(event) {
        console.log(event); // logs the picked date data
      }
    }
```
## component.html
```html
    <ngx-aaa-datepicker [pickerModes]='pickerModes' (getDate)='getDate($event)'></ngx-aaa-datepicker>
```
