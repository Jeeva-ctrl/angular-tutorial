/* 
  -> Reactive forms provide direct, explicit access to the underlying forms object model. 
   -> Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable.
  
  -> If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms. 
  
  

  Common form foundation classes :


Both reactive and template-driven forms are built on the following base classes.

   FormControl tracks the value and validation status of an individual form control.

   FormGroup tracks the same values and status for a collection of form controls.

   FormArray tracks the same values and status for an array of form controls.

  ControlValueAccessor creates a bridge between Angular FormControl instances and native DOM elements.

  */
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';
  
  @Component({
    selector: 'app-reactive-favorite-color',
    template: `
      Favorite Color: <input type="text" [formControl]="favoriteColorControl">
    `
  })
  export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
  }

