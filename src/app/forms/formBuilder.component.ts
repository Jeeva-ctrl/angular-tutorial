import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  /*
  Creates an AbstractControl from a user-specified configuration.

  The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray.

  It reduces the amount of boilerplate needed to build complex forms. 
  
  */

  constructor(private fb: FormBuilder) {}
}
