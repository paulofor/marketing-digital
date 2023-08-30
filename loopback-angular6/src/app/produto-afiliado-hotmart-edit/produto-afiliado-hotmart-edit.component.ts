import { Component, Inject, OnInit } from '@angular/core';
import { ContaGoogle, ContaGoogleApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';

@Component({
  selector: 'app-produto-afiliado-hotmart-edit',
  templateUrl: './produto-afiliado-hotmart-edit.component.html',
  styleUrls: ['./produto-afiliado-hotmart-edit.component.css']
})
export class ProdutoAfiliadoHotmartEditComponent extends BaseEditComponent {

  listaConta: ContaGoogle[];

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoAfiliadoHotmartApi, private srvConta:ContaGoogleApi
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new ProdutoAfiliadoHotmart();
    return novo;
  }

  montaCombos(): void {
    this.srvConta.find()
      .subscribe((result:ContaGoogle[]) => {
        this.listaConta = result;
      })
}

}