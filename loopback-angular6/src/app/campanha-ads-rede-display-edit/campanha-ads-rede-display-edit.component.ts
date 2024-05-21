import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AnuncioCampanhaAdsRedeDisplay, AnuncioCampanhaAdsRedeDisplayApi, AnuncioConceitoAdsRedeDisplayApi, CampanhaAdsRedeDisplay, CampanhaAdsRedeDisplayApi, ImagemConjunto, ImagemConjuntoApi, PaginaVenda, PaginaVendaApi, PaginaVendaPropriaApi, ProdutoPublicoAdsPalavraApi, PublicoAlvoAdsPalavra, PublicoAlvoAdsPalavraApi, VersaoImagemPaginaVendaApi, VersaoPaginaVendaApi, WhatsappGrupo, WhatsappGrupoApi } from '../shared/sdk';
import { CampanhaAdsRedeDisplayEditBaseComponent } from './campanha-ads-rede-display-edit-base.component';

@Component({
	selector: 'app-campanha-ads-rede-display-edit',
  	templateUrl: './campanha-ads-rede-display-edit.component.html',
  	styleUrls: ['./campanha-ads-rede-display-edit.component.css']
})
export class CampanhaAdsRedeDisplayEditComponent extends CampanhaAdsRedeDisplayEditBaseComponent {


	listaImagemConjunto: ImagemConjunto[];
	listaPaginaVenda:PaginaVenda[];
	listaAnuncioRedeAds:AnuncioCampanhaAdsRedeDisplay[];
	listaSegmento:PublicoAlvoAdsPalavra[];
	listaGrupoZap:WhatsappGrupo[];
	hotmartId: number;

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CampanhaAdsRedeDisplayApi,
		private srvImagemConjunto:ImagemConjuntoApi, private srvPaginaVenda:PaginaVendaPropriaApi, 
		private srvListaAnuncio:AnuncioConceitoAdsRedeDisplayApi, private srvGrupoZap: WhatsappGrupoApi,
		private	srvPublicoAlvo:PublicoAlvoAdsPalavraApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		let filtro1 = {'where' : {'hotmartId' : this.origem.hotmartId }};
		this.srvImagemConjunto.find(filtro1)
			.subscribe((result:ImagemConjunto[]) => {
				console.log('listaImagemConjunto:' , result);
				this.listaImagemConjunto = result;
			})
		
		let filtro2 = {
			'include' : 'versaoPaginaVenda',
			'where' : {'hotmartId' : this.origem.hotmartId }
		};
		this.srvPaginaVenda.find(filtro2)
			.subscribe((result:PaginaVenda[]) => {
				console.log('listaPaginaVenda:' , result);
				this.listaPaginaVenda = result;
			})
		
		let filtro3 = {'where' : {'hotmartId' : this.origem.hotmartId }};
		this.srvListaAnuncio.find(filtro3)
			.subscribe((result:AnuncioCampanhaAdsRedeDisplay[]) => {
				console.log('listaAnuncioRedeAds:' , result);
				this.listaAnuncioRedeAds = result;
			})
		
		let filtro4 = {
			'where' : {'hotmartId' : this.origem.hotmartId }
		};
		this.srvPublicoAlvo.find(filtro4)
			.subscribe((result:PublicoAlvoAdsPalavra[]) => {
				console.log('listaSegmento:' , result);
				this.listaSegmento = result;
			})
		const filtro5 = {'where'  : {'produtoProprioId' : this.origem.produtoProprioId}}
		console.log('filtro zap: ', filtro5);
		this.srvGrupoZap.find(filtro5)
			.subscribe((result:WhatsappGrupo[]) => {
				this.listaGrupoZap = result;
			})
	}

	criaItem() {
		let saida = new CampanhaAdsRedeDisplay();
		saida.hotmartId = this.origem.hotmartId;
		saida.contaGoogleId  = this.origem.contaGoogleId;
		saida.codigoHexa = this.gerarCodigoHexadecimal();
		return saida;
	}


	gerarCodigoHexadecimal(): string {
		const comprimento = 30;
		let codigoHexadecimal = '';
	  
		while (codigoHexadecimal.length < comprimento) {
		  const pedacoHexadecimal = Math.random().toString(16).substring(2);
		  codigoHexadecimal += pedacoHexadecimal;
		}
	  
		// Certifica-se de que o código tenha o comprimento desejado
		codigoHexadecimal = codigoHexadecimal.substring(0, comprimento);
	  
		return codigoHexadecimal;
	  }
}
