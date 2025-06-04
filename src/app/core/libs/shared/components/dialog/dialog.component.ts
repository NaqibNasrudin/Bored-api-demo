import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel } from './dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent {
    data: DialogModel = {} as DialogModel;

    constructor(
        @Inject(MAT_DIALOG_DATA) private dialogModel: DialogModel,
        public dialogRef: MatDialogRef<DialogComponent>,
    ) {
        this.data.description = this.dialogModel.description;
        this.data.confirmText = this.dialogModel.confirmText;
    }
}
