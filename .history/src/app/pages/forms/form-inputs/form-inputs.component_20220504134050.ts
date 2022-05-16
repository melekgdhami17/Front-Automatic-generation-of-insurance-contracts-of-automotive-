import { Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent  {
  data: any;
  id: any;
  energie: any;
  puissance: any;
  portes: any;
  place: any;
  poids: any;
  firstName: any;
  lastName: any;
  otherName: any;
  birthDate: any;
  birthPlace: any;
  imm: any;
  first_last_name: any;
  address: any;
  affect: any;
  gender: any;
  type: any;
  typeComm: any;
  date: any;
  serie: any;
  contructor: any;

  data: any;
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  const data = this.http.get("http://127.0.0.1:5000/user").subscribe(res => {
          console.log(res);
        });
}
