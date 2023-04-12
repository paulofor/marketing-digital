import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BaseListComponent } from '../base-component/base-list-component';
import { TokenAcessoApi, TokenAcesso } from '../shared/sdk';
import { TokenAcessoEditComponent } from '../token-acesso-edit/token-acesso-edit.component';

@Component({
  selector: 'app-token-acesso-list',
  templateUrl: './token-acesso-list.component.html',
  styleUrls: ['./token-acesso-list.component.css']
})
export class TokenAcessoListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:TokenAcessoApi) { 
    super(dialog,srv)
  }

  getFiltro() {
    return {
      };
  }

  criaItem() {
    let novo = new TokenAcesso();
    return novo;
  }

  getComponente() {
    return TokenAcessoEditComponent;
  }


  


}
