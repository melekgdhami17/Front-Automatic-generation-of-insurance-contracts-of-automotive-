import { Component , OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';

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
    fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx") // fetch the remote url
    .then((response) => {
      response.blob().then((fileBlob) => { // convert the excel file to blob
      let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
      
      })
    })
  }
  
  
}
