import { NbMenuService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
