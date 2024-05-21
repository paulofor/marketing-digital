import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AnuncioCampanhaAdsRedeDisplay, AnuncioConceitoAdsRedeDisplayApi, CampanhaAdsRedeDisplay, CampanhaAdsRedeDisplayApi, ContaGoogle, ContaGoogleApi, ImagemConjunto, ImagemConjuntoApi, PaginaVenda, PaginaVendaPropriaApi, PaginaVendaVsl, PaginaVendaVslApi, PublicoAlvoAdsPalavra, PublicoAlvoAdsPalavraApi, WhatsappGrupo, WhatsappGrupoApi } from '../shared/sdk';
import { CampanhaAdsRedeDisplayProdutoProprioEditBaseComponent } from './campanha-ads-rede-display-produto-proprio-edit-base.component';

@Component({
	selector: 'app-campanha-ads-rede-display-produto-proprio-edit',
  	templateUrl: './campanha-ads-rede-display-produto-proprio-edit.component.html',
  	styleUrls: ['./campanha-ads-rede-display-produto-proprio-edit.component.css']
})
export class CampanhaAdsRedeDisplayProdutoProprioEditComponent extends CampanhaAdsRedeDisplayProdutoProprioEditBaseComponent {

	listaImagemConjunto: ImagemConjunto[];
	listaPaginaVenda:PaginaVendaVsl[];
	listaAnuncioRedeAds:AnuncioCampanhaAdsRedeDisplay[];
	listaSegmento:PublicoAlvoAdsPalavra[];
	listaConta:ContaGoogle[];
	listaGrupoZap:WhatsappGrupo[];

	constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: CampanhaAdsRedeDisplayApi,
		private srvImagemConjunto:ImagemConjuntoApi, private srvPaginaVenda:PaginaVendaVslApi, 
			private srvListaAnuncio:AnuncioConceitoAdsRedeDisplayApi,
			private	srvPublicoAlvo:PublicoAlvoAdsPalavraApi,
			private srvConta:ContaGoogleApi,
			private srvGrupoZap: WhatsappGrupoApi
		  ) {
	   super(dialogRef,data,servico);
	}

	montaCombos(): void {
		let filtro1 = {'where' : {'produtoProprioId' : this.origem.id }};
		this.srvImagemConjunto.find(filtro1)
			.subscribe((result:ImagemConjunto[]) => {
				console.log('listaImagemConjunto:' , result);
				this.listaImagemConjunto = result;
			})
		
		let filtro2 = {
			'where' : {'produtoProprioId' : this.origem.id }
		};
		this.srvPaginaVenda.find(filtro2)
			.subscribe((result:PaginaVendaVsl[]) => {
				console.log('listaPaginaVenda:' , result);
				this.listaPaginaVenda = result;
			})
		
		let filtro3 = {'where' : {'produtoProprioId' : this.origem.id }};
		this.srvListaAnuncio.find(filtro3)
			.subscribe((result:AnuncioCampanhaAdsRedeDisplay[]) => {
				console.log('listaAnuncioRedeAds:' , result);
				this.listaAnuncioRedeAds = result;
			})
		
		//let filtro4 = {
		//	'where' : {'produtoProprioId' : this.origem.id }
		//};
		this.srvPublicoAlvo.find()
			.subscribe((result:PublicoAlvoAdsPalavra[]) => {
				console.log('listaSegmento:' , result);
				this.listaSegmento = result;
			})
		this.srvConta.ListaAtivaCampanha()
			.subscribe((result:ContaGoogle[]) => {
				this.listaConta = result;
			})
		const filtro5 = {'where'  : {'produtoProprioId' : this.origem.id}}
		console.log('filtro zap: ', filtro5);
		this.srvGrupoZap.find(filtro5)
			.subscribe((result:WhatsappGrupo[]) => {
				this.listaGrupoZap = result;
			})
	}

	criaItem() {
		let saida = new CampanhaAdsRedeDisplay();
		saida.produtoProprioId = this.origem.id;
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

	preSubmit(): void {
		delete this.item['contaGoogle'];
		delete this.item['paginaVendaVsl'];
		delete this.item['anuncioConceitoAdsRedeDisplay'];
		delete this.item['publicoAlvoAdsPalavra'];
		delete this.item['imagemConjunto'];
	}
}
