import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>,private router: Router) {}

  dismiss() {
    this.ref.close();
  }
  btnClick = function () {
    this.router.navigateByUrl('/pages/forms/inputs');
  };
}
