import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';
import { FormService } from '../../../services/form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent {

  names: string[] = [];

  constructor(private dialogService: NbDialogService, private formService : FormService,private http: HttpClient) {}
  cin: boolean;
  gray: boolean;
  grayBack: boolean;
  file: File = null;
  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }
  sendFileCin(){
    const body = this.file;
    this.http.post("http://127.0.0.1:5000/extractCin", body)
    .subscribe(res => {
      console.log(res);
    });
  }
  getFile(event) {
    

      const file: File = event.target.files[0];

      if (file) {

          const formData = new FormData();

          formData.append("file", file);

          const upload$ = this.http.post("http://127.0.0.1:5000/extractCin", body).subscribe();

    
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }

  

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnBackdropClick: false,
      });
  }

  openWithoutEscClose(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false,
      });
  }
}
