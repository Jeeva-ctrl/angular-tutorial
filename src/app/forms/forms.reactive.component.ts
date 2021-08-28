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
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl" />
    <div>{{ favoriteColorControl.value }}</div>
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label for="first-name">First Name: </label>
      <input id="first-name" type="text" formControlName="firstName" />

      <label for="last-name">Last Name: </label>
      <input id="last-name" type="text" formControlName="lastName" />

      <div formGroupName="address">
        <h2>Address</h2>

        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street" />

        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city" />

        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state" />

        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip" />
      </div>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      <button type="button" (click)="updateProfile()">Update Profile</button>
      <p>Form Status: {{ profileForm.status }}</p>

      <div formArrayName="aliases">
  <h2>Aliases</h2>
  <button (click)="addAlias()">+ Add another alias</button>

  <div *ngFor="let alias of aliases.controls; let i=index">
    <!-- The repeated alias template -->
    <label for="alias-{{ i }}">Alias:</label>
    <input id="alias-{{ i }}" type="text" [formControlName]="i">
  </div>
</div>
    </form>
  `
})
export class FavoriteColorComponent {
  constructor(private fb: FormBuilder) {}

  favoriteColorControl = new FormControl('');
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit = () => {
    console.log('this', this.profileForm.value);
  };
  updateProfile = () => {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  };
}
