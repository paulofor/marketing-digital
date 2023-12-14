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
  listaContaRemarketing: ContaGoogle[];

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoAfiliadoHotmartApi, private srvConta:ContaGoogleApi
  ) {
    super(dialogRef,data,servico);
  }

  criaItem() {
    let novo = new ProdutoAfiliadoHotmart();
    return novo;
  }

  preSubmit() {
    delete this.item['contaGoogle'];
    delete this.item['pixelGoogle'];
    delete this.item['produtoAfiliadoPaginaVenda'];
    delete this.item['campanhaAdsTestes'];
    delete this.item['anuncioAds'];
    delete this.item['visitaProdutoHotmarts'];
    delete this.item['ideiaPalavraChaves'];
    delete this.item['loadPaginaVendas'];
    delete this.item['solicitacaoCheckouts'];
    delete this.item['planoProdutos'];
    delete this.item['linkCheckouts'];
    delete this.item['campanhaAdsMetricas'];
    delete this.item['precoProdutoAfiliados'];
  }

  montaCombos(): void {
    this.srvConta.ListaAtivaCampanha()
      .subscribe((result:ContaGoogle[]) => {
        this.listaConta = result;
      })
    this.srvConta.ListaAtivaRemarketing()
      .subscribe((result:ContaGoogle[]) => {
        this.listaContaRemarketing = result;
      })
}

}