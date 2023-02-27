import { Component } from '@angular/core';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `<p>Contact</p>
  <form #isiForm="ngForm" (ngSubmit)="kirim(isiForm)">
    <div>
      <input type="name" placeholder="name *" name="name" #name="ngModel" ngModel="" required>
      <small *ngIf="name.touched && name.errors?.['required']"> This input is required</small>
    </div>

    <input type="email" placeholder="email" name="email" ngModel="">
    
    <div>
      <input type="text" placeholder="message *" name="massage" #massage="ngModel" ngModel="" minlength="10" required>
      <small *ngIf="massage.touched && massage.errors?.['required']"> This input is required</small>
      <small *ngIf="massage.errors?.['minlength']"> Minimal {{massage.errors?.['minlength']?.requiredLength}} character, actual is {{massage.errors?.['minlength']?.actualLength}}</small>
    </div>

    <input type="submit" value="submit" [disabled]="!isiForm.valid">
  </form>
  <p>Explore</p>`,
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  styles:['input.ng-touched.ng-invalid {border: 1px solid red;}',
'small {color: red}']
})
export class ContactComponent {
  
  kirim(isi: any){
    alert(JSON.stringify(isi.value))
    console.log(isi)
  }
}
