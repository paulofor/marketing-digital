import { Component, Inject, OnInit } from '@angular/core';
import { PixelGoogle, PixelGoogleApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';

@Component({
  selector: 'app-pixel-google-edit',
  templateUrl: './pixel-google-edit.component.html',
  styleUrls: ['./pixel-google-edit.component.css']
})
export class PixelGoogleEditComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PixelGoogleApi,
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new PixelGoogle();
    return novo;
  }

 

}