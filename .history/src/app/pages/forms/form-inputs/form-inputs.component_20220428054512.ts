import { Component , OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent implements OnInit {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  private httpClient: HttpClient
  ngOnInit(){
    this.httpClient.get('D:\Users\WIKI\PycharmProjects\API-Project\Data.xlsx', { responseType: 'blob' })
    .subscribe((data: any) => {
    const reader: FileReader = new FileReader();

    let dataJson1;
   

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname1: string = wb.SheetNames[1];
      const ws1: XLSX.WorkSheet = wb.Sheets[wsname1];

      /* save data */
      dataJson1 = XLSX.utils.sheet_to_json(ws1);
      console.log(dataJson1);

    };
    reader.readAsBinaryString(data);
    console.log(data);
  });
}
  
  
}
