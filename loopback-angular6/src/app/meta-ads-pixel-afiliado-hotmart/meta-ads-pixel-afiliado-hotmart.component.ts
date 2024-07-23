import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { MetaAdsCampanhaEditComponent } from '../meta-ads-campanha-edit/meta-ads-campanha-edit.component';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';

@Component({
  selector: 'app-meta-ads-pixel-afiliado-hotmart',
  templateUrl: './meta-ads-pixel-afiliado-hotmart.component.html',
  styleUrls: ['./meta-ads-pixel-afiliado-hotmart.component.css']
})
export class MetaAdsPixelAfiliadoHotmartComponent extends BaseItemIdComponent {

  constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }


  getFiltro() {
    return {
      'include': 'metaAdsCampanhas'
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
    return MetaAdsCampanhaEditComponent;
  }



}
