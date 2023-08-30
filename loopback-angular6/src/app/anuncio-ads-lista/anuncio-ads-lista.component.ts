import { Component, OnInit } from '@angular/core';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { AnuncioAdsApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { AnuncioAdsEditaComponent } from '../anuncio-ads-edita/anuncio-ads-edita.component';

@Component({
  selector: 'app-anuncio-ads-lista',
  templateUrl: './anuncio-ads-lista.component.html',
  styleUrls: ['./anuncio-ads-lista.component.css']
})
export class AnuncioAdsListaComponent extends BaseItemIdComponent{

  constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }

  
  getFiltro() {
    return {
      'include' : 'anuncioAds'
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
    return AnuncioAdsEditaComponent;
  }

}
