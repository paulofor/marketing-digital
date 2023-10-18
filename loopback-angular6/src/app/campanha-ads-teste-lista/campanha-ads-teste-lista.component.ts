import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AnuncioAdsEditaComponent } from '../anuncio-ads-edita/anuncio-ads-edita.component';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { CampanhaAdsTesteEditComponent } from '../campanha-ads-teste-edit/campanha-ads-teste-edit.component';

@Component({
  selector: 'app-campanha-ads-teste-lista',
  templateUrl: './campanha-ads-teste-lista.component.html',
  styleUrls: ['./campanha-ads-teste-lista.component.css']
})
export class CampanhaAdsTesteListaComponent extends BaseItemIdComponent{

  constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }

  
  getFiltro() {
    return {
      'include' : [{ 'relation' : 'campanhaAdsTestes' , 'scope' : {
        'include' :[ 'modeloCampanhaAdsTeste' , 'contaGoogle']}
      }]
    }
  }

  edita(edicao?) {
    this.dialog.afterAllClosed.subscribe(result => {
        this.carregaTela();
    });
    this.dialog.open(this.getComponente(), {
        width: '800px',
        data: {
            item: edicao,
            origem: this.principal
        }
    });
  }

  getComponente() {
    return CampanhaAdsTesteEditComponent;
  }

}
