import { Component , OnIn} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent  {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  private http: HttpClient
  
  
  
}
