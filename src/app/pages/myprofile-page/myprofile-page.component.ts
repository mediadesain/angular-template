import { Component } from '@angular/core';
import { JsonPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  template: `<p>Profile</p>
  <form #isiForm="ngForm" (ngSubmit)="kirim(isiForm.value)">
    <div>
      <input type="name" placeholder="name *" name="username" [(ngModel)]="data.username" #username="ngModel" required>
      <small *ngIf="username.touched && username.errors?.['required']"> This input is required</small>
    </div>
    <div>
      <input type="number" placeholder="age *" name="age" [(ngModel)]="data.age" #age="ngModel" required>
      <small *ngIf="age.touched && age.errors?.['required']"> This input is required</small>
    </div>
    <div>
      <select name="gender" [(ngModel)]="data.gender">
        <option value="pria">Pria</option>
        <option value="wanita">Wanita</option>
        <option value="lainnya">Lainnya</option>
      </select>
    </div>
    <div>
      <ng-container ngModelGroup="address">
        <input type="text" placeholder="address detail" name="detail" [(ngModel)]="data.address.detail"/>
        <input type="text" placeholder="zip number" name="zip" [(ngModel)]="data.address.zip"><br>
      </ng-container>
    </div>
    <div>
      <!-- <input type="text" name="hobbies" [(ngModel)]="data.hobbies"><br> -->
      <div *ngFor="let item of data.hobbies | keyvalue" ngModelGroup="hobbies">
        <!-- {{item.key}} - {{item.value|json}} -->
          <div [ngModelGroup]="item.value.id">
            <input type="text" name="name" [(ngModel)]="item.value.name">
            <select name="label" [(ngModel)]="item.value.label">
              <option>basic</option>
              <option>advance</option>
              <option>intermediete</option>
            </select>
            <a href="javascript:void(0)" (click)="removeItem(item.value.id)">✕</a>
          </div>
      </div>
      <div>
          <input type="text" placeholder="skill" name="name" #name="ngModel" ngModel>
          <select name="label" name="label" #label="ngModel" ngModel="basic">
            <option>basic</option>
            <option>advance</option>
            <option>intermediete</option>
          </select>
        <input type="button" value="add" (click)="addItem(name.value, label.value)"/>
      </div>
    </div>
    <input type="submit" value="submit" [disabled]="!isiForm.valid">
  </form>
  <p>Explore</p>`,
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf, NgFor, KeyValuePipe],
  styles:['input.ng-touched.ng-invalid {border: 1px solid red;}',
'small {color: red}']
})


export class MyProfileComponent {
  data: ProfileModel = {
    username: "John Doe",
    age: 17,
    gender: "pria",
    address: {
      detail: "Jl Perjuangan, Jakarta Pusat",
      zip: 46111
    },
    hobbies: {
      '1677065027990' : { id: '1677065027990', name: 'coding', label: "basic" },
      '1677065058928' : { id: '1677065058928', name: 'design', label: "advance" }
    }
  };

  removeItem(id: string){
    delete this.data.hobbies[id]
  }
  addItem(name: string, label: string){
    const generateId = JSON.stringify(new Date().getTime());
    Object.assign(this.data.hobbies, 
      {  [generateId] : { id: generateId, name: name, label: label } }
    );
  }

  kirim(isi: ProfileModel){
    alert(JSON.stringify(isi))
    console.log(isi)
  }

}


interface ProfileModel {
  username: string;
  age: number;
  gender: string
  address: {
    detail: string;
    zip: number
  },
  hobbies: {
    [key: string]: {
      id: string;
      name: string;
      label: string;
    }
  }
}