import { Component, Inject, OnInit } from '@angular/core';
import { ContaGoogle, ContaGoogleApi, PixelGoogle, PixelGoogleApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';

@Component({
  selector: 'app-pixel-google-edit',
  templateUrl: './pixel-google-edit.component.html',
  styleUrls: ['./pixel-google-edit.component.css']
})
export class PixelGoogleEditComponent extends BaseEditComponent {

  listaConta:ContaGoogle[];

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PixelGoogleApi, private srvConta: ContaGoogleApi
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new PixelGoogle();
    if (this.origem) {
      novo.produtoProprioId = this.origem.id;
    }
    return novo;
  }

  filtro() {
    return {
      'order' : 'id desc'
    }
  }
 
  preSubmit(): void {
		delete this.item['contaGoogle'];
	}

  montaCombos(): void {
      this.srvConta.ListaAtivaCampanha() 
        .subscribe((result:ContaGoogle[]) => {
          this.listaConta = result;
        })
  }
}