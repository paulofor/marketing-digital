import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { IdeiaPalavraChaveApi } from '../shared/sdk';

@Component({
  selector: 'app-ideia-palavra-chave-list',
  templateUrl: './ideia-palavra-chave-list.component.html',
  styleUrls: ['./ideia-palavra-chave-list.component.css']
})
export class IdeiaPalavraChaveListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:IdeiaPalavraChaveApi) { 
    super(dialog,srv)
  }



  carregaTela() {
    this.srv.MelhoresUltimaData(3000)
    .subscribe((result:any[]) => {
        console.log('result: ' , result);
        this.listaBase = result;
        this.posCarregaLista();
    })
}

  


}