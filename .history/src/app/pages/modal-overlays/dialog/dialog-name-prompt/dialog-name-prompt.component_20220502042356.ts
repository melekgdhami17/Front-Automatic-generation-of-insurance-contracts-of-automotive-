import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-name-prompt',
  templateUrl: 'dialog-name-prompt.component.html',
  styleUrls: ['dialog-name-prompt.component.scss'],
})
export class DialogNamePromptComponent {
  names: string[] = [];
  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>, private dialogService: NbDialogService) {}

  cancel() {
    this.ref.close();
  }
  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }

  submit(name) {
    this.ref.close(name);
  }
}
