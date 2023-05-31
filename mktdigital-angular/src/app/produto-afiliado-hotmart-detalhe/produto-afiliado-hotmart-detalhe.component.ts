import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';

@Component({
  selector: 'app-produto-afiliado-hotmart-detalhe',
  templateUrl: './produto-afiliado-hotmart-detalhe.component.html',
  styleUrls: ['./produto-afiliado-hotmart-detalhe.component.css']
})
export class ProdutoAfiliadoHotmartDetalheComponent extends BaseItemIdComponent {

  constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }

  
  getFiltro() {
    return {
      'include' : [
        { 'relation' : 'visitaProdutoHotmarts' , 'scope' : {
          'order' : 'dataInsercao desc'
        }}
      ]
    }
  }



 
}
