import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NbDialogService } from '@nebular/theme';
import { FormService } from '../../../../services/form.service';


@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {
  names: string[] = [];
  file: any;
  // tslint:disable-next-line: max-line-length
  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>, private dialogService: NbDialogService, private formService : FormService) {}

  cancel() {
    this.ref.close();
  }
  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }
  sendFileCin(file){
    this.formService.addDocuments(file)
  }
  getFile(event) {
    this.file = event[0];
    this.sendFileCin(this.file);
  }
  open() {
    this.dialogService.open(DialogNamePromptComponent, {
      
    });
  }

  submit(name) {
    this.ref.close(name);
  }
}
