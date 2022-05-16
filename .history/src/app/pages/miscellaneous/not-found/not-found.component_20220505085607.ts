import { NbMenuService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    const put = this.http.get("http://127.0.0.1:5000/user").subscribe(res => { 
      console.log(res);
      this.data= res;
      this.cin= this.data['id'];
      this.address1 =this.data['address'];
      this.affect1 =this.data['affect'];
      this.birthDate1 =this.data['birthDate'];
      this.birthPlace1 =this.data['birthPlace'];
      this.constructor1 =this.data['constructor'];
      this.energie1 =this.data['energie'];
      this.typeComm1 =this.data['typeComm'];
      this.type1 =this.data['type'];
      this.serie1 =this.data['serie'];
      this.puissance1 =this.data['puissance'];
      this.date1 =this.data['date'];
      this.firstName1 =this.data['firstName'];
      this.lastName1 = this.data['lastName'];
      this.imm1 = this.data['imm'];
      this.poids1 =this.data['poids'];
      this.otherName1 =this.data['otherName'];
      this.first_last_name1 =this.data['first_last_name'];
      this.gender1 = this.data['gender'];
      this.portes1 = this.data['portes'];
      this.place1 = this.data['place'];
      

      console.log(this.data['address']);
    });  
  }

  public convertToPDF()
{
html2canvas(document.getElementById('page1-div')).then(canvas => {
// Few necessary setting options
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
pdf.save('contrat.pdf'); // Generated PDF
});
}
}
