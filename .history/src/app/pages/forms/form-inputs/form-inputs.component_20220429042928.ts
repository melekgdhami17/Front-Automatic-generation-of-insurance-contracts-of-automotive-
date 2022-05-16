import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
