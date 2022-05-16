import { Component } from '@angular/core';
import * as XLSX form 'xlsx';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
data: [][]
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  const file = new FileReader();
  file.readAsBinaryString('D:\Users\WIKI\PycharmProjects\API-Project\Data.xlsx')
  fileReader.onload=(event)=>{
    console.log(event)
  }
  this.data = (XLSX.utils.sheet_to_json(,{header : 1}))
}
