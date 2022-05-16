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
  
  filesReading(event:any){
    var url = " var url = "http://ururl.com/excelfile.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
  
    oReq.onload = function(e) {
    var arraybuffer = oReq.response;
  
    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");
  
    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});
  
    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    let x = XLSX.utils.sheet_to_json(worksheet,{raw:true});
    console.log(x);";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
  
    oReq.onload = function(e) {
    var arraybuffer = oReq.response;
  
    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");
  
    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});
  
    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    let x = XLSX.utils.sheet_to_json(worksheet,{raw:true});
    console.log(x);
    }
  }
  
  
}
