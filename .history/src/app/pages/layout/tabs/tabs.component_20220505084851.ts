import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
})

export class FormInputsComponent implements OnInit {
  ngOnInit(): void {
    const put = this.http.get("http://127.0.0.1:5000/user").subscribe(res => { 
      console.log(res);
  });
}
constructor(private http: HttpClient,private router: Router) {}
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
