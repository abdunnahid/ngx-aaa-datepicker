# ngx-aaa-datepicker
> A datepicker that picks single, multiple and range type dates.

# Preview
![](https://s2.gifyu.com/images/aaae9a6f5a3eb023001.gif)

# Using With Material Demo
>[Github](https://github.com/Nahid-Rezvee/ngx-aaa-datepicker-demo-material)

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
# Licence
MIT