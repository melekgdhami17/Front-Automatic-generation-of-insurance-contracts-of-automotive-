import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { PredictService } from '../../../services/predict.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit{

  settings = {
    actions:{
      add:false,
      delete:false,
      edit:false
    },
    columns: {
      age :{
        title:'age',
        type: 'number'
      },
      gender: {
        title: 'gender',
        type: 'string',
      },
      licence: {
        title: 'licence',
        type: 'string',
      },
      prev_insured: {
        title: 'previously insured',
        type: 'string',
      },
      vehicle_Damage: {
        title: 'vehicule dammage',
        type: 'string',
      },
      vehiicle_age: {
        title: 'vehicule age',
        type: 'string',
      },
      prediction: {
        title: 'prediction',
        type: 'string',
        class: ''
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private service: SmartTableData,private  predictService: PredictService,private theme: NbThemeService
    ) {
     
  }
  ngOnInit(): void {
    this.predictService.getlabels().subscribe((result:any[])=>{
          this.source.load(result);
    })

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['decline contract', 'accept contract'],
        datasets: [{
          data: [],
          backgroundColor: [colors.primaryLight,  colors.successLight],
        }],
      };
      let decline,accept
      this.predictService.getData().subscribe((result:any[])=>{
         decline = result.filter(data => data.prediction ==='decline this contract').length
         accept = result.filter(data=>data.prediction ==='accept this contract').length
         console.log('decline',decline)
         console.log('accept',accept)
         this.data.datasets[0].data = [decline,accept]
      })
      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }













  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
