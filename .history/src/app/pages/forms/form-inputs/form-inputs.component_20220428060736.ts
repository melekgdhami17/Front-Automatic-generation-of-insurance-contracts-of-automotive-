import { Component , OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  private http: HttpClient
  ngOnInit(){
    let workBook = null;
    const reader = new FileReader();
    const file = "D:/Users/WIKI/PycharmProjects/API-Project/Data.xlsx";
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      const sheet_name_list = workBook.SheetNames;

      this.xlData = XLSX.utils.sheet_to_json(workBook.Sheets[sheet_name_list[0]]);
      log("xlData >>> ",JSON.stringify(this.xlData));

      this.arraySaparater = (XLSX.utils.sheet_to_json(workBook.Sheets[sheet_name_list[0]], { header: 1 }));
      this.arraySaparater = this.arraySaparater.filter((row)=>{
        if(Array.isArray(row) && row.length){
          return row;
        }
        else{
          return false;
        }
      });
      log('ArraySaparater >>>',JSON.stringify(this.arraySaparater));

    }
    reader.readAsBinaryString(file);
  }
  

  
  
}
