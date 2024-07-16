import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseItemIdComponent } from '../base-component/base-item-id-component';
import { FrameworkPublicoInteresseEditComponent } from '../framework-publico-interesse-edit/framework-publico-interesse-edit.component';
import { ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { MetaAdsCampanhaEditComponent } from '../meta-ads-campanha-edit/meta-ads-campanha-edit.component';

@Component({
  selector: 'app-meta-ads-campanha-afiliado-generico',
  templateUrl: './meta-ads-campanha-afiliado-generico.component.html',
  styleUrls: ['./meta-ads-campanha-afiliado-generico.component.css']
})
export class MetaAdsCampanhaAfiliadoGenericoComponent extends BaseItemIdComponent {

  constructor(protected dialog: MatDialog, protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute) {
    super(dialog, srv, router);
  }


  getFiltro() {
    return {
      'include': 'metaAdsCampanhaAfiliadoGenericos'
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
