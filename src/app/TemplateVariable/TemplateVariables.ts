/*

Template variables help you use data from one part of a template in another part of the template. Use template variables to perform tasks such as respond to user input or finely tune your application's forms.

A template variable can refer to the following:

a DOM element within a template
a directive
an element
TemplateRef
a web component



<input #phone placeholder="phone number" />

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>

How Angular assigns values to template variables

Angular assigns a template variable a value based on where you declare the variable:

If you declare the variable on a component, the variable refers to the component instance.

If you declare the variable on a standard HTML tag, the variable refers to the element.

If you declare the variable on an <ng-template> element, the variable refers to a TemplateRef instance, which represents the template. For more information on <ng-template>, see How Angular uses the asterisk, *, syntax in Structural directives.

If the variable specifies a name on the right-hand side, such as #var="ngModel", the variable refers to the directive or component on the element with a matching exportAs name.

Using NgForm with template variables

<form #itemForm="ngForm" (ngSubmit)="onSubmit(itemForm)">
  <label for="name">Name <input class="form-control" name="name" ngModel required />
  </label>
  <button type="submit">Submit</button>
</form>

<div [hidden]="!itemForm.form.valid">
  <p>{{ submitMessage }}</p>
</div>

Without the ngForm attribute value, the reference value of itemForm would be the HTMLFormElement, <form>


Template variable scope

Refer to a template variable anywhere within its surrounding template. Structural directives, such as *ngIf and *ngFor, or <ng-template> act as a template boundary. 

You cannot access template variables outside of these boundaries.



*/
