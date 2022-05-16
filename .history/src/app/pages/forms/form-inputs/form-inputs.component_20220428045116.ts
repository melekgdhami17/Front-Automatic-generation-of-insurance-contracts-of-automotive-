import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  const file = new FileReader();
  files(event:any){
    file.readAsBinaryString("D:\Users\WIKI\PycharmProjects\API-Project\Data.xlsx");
  file.onload=(event:any)=>{
    console.log(event);
    let binaryData = event.target.result;
    let workbook = XLSX.read(binaryData , {type :'binary'});
    workbook.SheetNames.forEach(sheet => {
       const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
       console.log(Object);
    })
    console.log(workbook);
  }
  }
  
  
}
