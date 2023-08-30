import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { TokenAcessoApi, TokenAcesso } from '../shared/sdk';

@Component({
  selector: 'app-token-acesso-edit',
  templateUrl: './token-acesso-edit.component.html',
  styleUrls: ['./token-acesso-edit.component.css']
})
export class TokenAcessoEditComponent  extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: TokenAcessoApi,
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new TokenAcesso();
    return novo;
  }

 

}