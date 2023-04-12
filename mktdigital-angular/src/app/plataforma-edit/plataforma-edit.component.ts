import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { TokenAcessoApi, TokenAcesso, PlataformaVenda, PlataformaVendaApi } from '../shared/sdk';

@Component({
  selector: 'app-plataforma-edit',
  templateUrl: './plataforma-edit.component.html',
  styleUrls: ['./plataforma-edit.component.css']
})
export class PlataformaEditComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PlataformaVendaApi,
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new PlataformaVenda();
    return novo;
  }

 

}