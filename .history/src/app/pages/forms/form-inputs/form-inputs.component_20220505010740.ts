import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent implements OnInit {
  ngOnInit(): void {
    const put = this.http.get("http://127.0.0.1:5000/user").subscribe(res => { 
      console.log(res);
      this.data= res;
      this.cin= this.data['id'];

      console.log(this.data['address']);
    });
    
  }
  constructor(private http: HttpClient) {}
  data: any;
  id: any;
  cin:any;
  energie1: any;
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

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  getData(event) {
        
}
  
}
