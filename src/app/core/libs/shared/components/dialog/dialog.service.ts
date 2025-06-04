import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from '../../../../enum/dialog-utils.enum';
import { DialogComponent } from './dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialogService: MatDialog) {}

    private open(data: DialogModel, dialogType: DialogType): MatDialogRef<DialogComponent> {
        const defaultDialogConfig = this.getDefaultDialogConfig();
        defaultDialogConfig.data = { ...data };
        defaultDialogConfig.data.dialogType = dialogType;
        return this.dialogService.open(DialogComponent, defaultDialogConfig);
    }

    private getDefaultDialogConfig(): MatDialogConfig {
        return {
            autoFocus: true,
            maxWidth: '80vw',
            maxHeight: '80vh',
            enterAnimationDuration: '250ms',
            exitAnimationDuration: '250ms',
            disableClose: true,
        };
    }
}

export interface DialogModel {
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
}
