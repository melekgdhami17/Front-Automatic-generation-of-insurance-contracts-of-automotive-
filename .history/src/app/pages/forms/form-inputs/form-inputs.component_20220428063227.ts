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
    let workbook;
    let url = "D:/Users/WIKI/PycharmProjects/API-Project/Data.xlsx";
    let req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload =  (e) => {
        let data = new Uint8Array(req.response);
        workbook = XLSX.read(data, {type: "array"});
        const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
        console.log(data)
    req.send();
    console.log("workbook");
    }
    console.log(workbook)
  }
  
  
}
