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
      this.address1 =this.data['address'];
      this.affect1 =this.data['affect'];
      this.birthDate1 =this.data['birthDate'];
      this.birthPlace1 =this.data['birthPlace'];
      this.contructor1 =this.data['constructor'];
      this.energie1 =this.data['energie'];
      this.typeComm1 =this.data['typeComm'];
      this.type1 =this.data['type'];
      this.serie1 =this.data['serie'];
      this.puissance1 =this.data['puissance'];
      this.date1 =this.data['date'];
      this.firstName1 =this.data['firstName'];
      this.poids1 =this.data['poids'];
      this.otherName1 =this.data['other'];
      this.first_last_name1 =this.data['first_last_name'];
      this.gender1 = this.data['gender'];
      this.poids1 =this.data['poids'];
      

      console.log(this.data['address']);
    });  
  }
  constructor(private http: HttpClient) {}
  data: any;
  id: any;
  cin:any;
  energie1: any;
  energie: any;
  puissance1: any;
  portes1: any;
  place1: any;
  poids1: any;
  firstName1: any;
  lastName1: any;
  otherName1: any;
  birthDate1: any;
  birthPlace1: any;
  imm1: any;
  first_last_name1: any;
  address1: any;
  affect1: any;
  gender1: any;
  type1: any;
  typeComm1: any;
  date1: any;
  serie1: any;
  contructor1: any;
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
