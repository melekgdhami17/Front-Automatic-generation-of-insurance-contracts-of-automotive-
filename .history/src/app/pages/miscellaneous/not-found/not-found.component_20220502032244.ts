import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  ajouter: boolean;
  file: any;
  test: any;
  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
  getFile(event) {
    this.file = event[0];
  }
  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
