import { ChangeDetectionStrategy, Component, HostBinding, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService, NbWindowService } from '@nebular/theme';
import { PredictService} from '../../../services/predict.service'
@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutsComponent implements OnInit {
  genderValue = '';
  drivingLicenseValue= '';
  vehiculeDamageValue='';
  ageValue = new FormControl();
  predict: any;
  previousInsuredValue='';
  vehiculeAge = new FormControl();
  positions = NbGlobalPhysicalPosition;

  @HostBinding('class')
  classes = 'example-items-rows';
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  constructor(
    private  predictService: PredictService,
    private toastrService: NbToastrService,
    private windowService: NbWindowService
  ){}
  ngOnInit(): void {
  }

  addPredict(){
    var formData: any = new FormData();
    formData.append('Gender', parseInt(this.genderValue));
    formData.append('Age', this.ageValue.value);
    formData.append('Driving_License', parseInt(this.drivingLicenseValue));
    formData.append('Previously_Insured', parseInt(this.previousInsuredValue));
    formData.append('Vehicle_Age', parseInt(this.vehiculeAge.value));
    formData.append('Vehicle_Damage', parseInt(this.vehiculeDamageValue));

    this.predict = {
      Gender:this.genderValue,
      Age:this.ageValue.value,
      Driving_License:this.drivingLicenseValue,
      Previously_Insured:this.previousInsuredValue,
      Vehicle_Age:this.vehiculeAge.value,
      Vehicle_Damage:this.vehiculeDamageValue
    }
    if(!this.checkForm(this.predict)){
    this.predictService.addPredict(formData).subscribe(data=>{
      this.openWindow(data)
      this.showToast('bottom-right', 'success','', `Prediction of an insurance Contract added successfully`)
    },
    err=>this.showToast('bottom-right', 'danger','','error from backend server')
    )}
    else 
    this.showToast('bottom-right', 'danger','','you hava to complete form')

  }
  showToast(position, status , message , title) {
    this.toastrService.show(message, `${title}`, { position, status });
  }
  openWindow(data) {
    this.windowService.open(
      this.contentTemplate,
      { context: { text: `${data}`} },
    );
  }
  checkForm(predict){
    if((predict.Gender === '' || predict.Gender === undefined)   ||
       (predict.Age === '' || predict.Age === undefined || predict.Age === null)  ||
       (predict.Driving_License === '' || predict.Driving_License === undefined)  ||
       (predict.Previously_Insured === '' || predict.Previously_Insured === undefined) ||
       (predict.Vehicle_Age === '' || predict.Vehicle_Age === undefined) ||
       (predict.Vehicle_Damage === '' || predict.Vehicle_Damage === undefined) 
      )
        return true
      else return false
  }
}
