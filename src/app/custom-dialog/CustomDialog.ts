import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
@Injectable()
export class CustomDialog {
    static  dialog: MatDialog
    constructor(public dialog: MatDialog){}
    static OpenDialog(message:any) {
        this.dialog.open(CustomDialogComponent, {
            data: {
              dataKey: message
            },
            panelClass: "md-dialog-container",});
    }
    public OpenDialogs(message:any) {
        this.dialog.open(CustomDialogComponent, {
             data: {
               dataKey: message
             },
             panelClass: "md-dialog-container",});
     }
    static getName() : string {
        return "mazhar";
    }
}