import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { VersaoPaginaVenda, DalleSolicitacaoImagem, VersaoPaginaVendaApi, DalleSolicitacaoImagemApi, BaseLoopBackApi } from "../shared/sdk";
import { VersaoImagemPaginaVenda, VersaoImagemPaginaVendaApi } from "../shared/sdk";
export class VersaoImagemPaginaVendaEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:VersaoPaginaVendaApi, protected srv2:DalleSolicitacaoImagemApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : VersaoImagemPaginaVendaApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof VersaoPaginaVenda) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'dalleSolicitacaoImagem';
				this.propriedadeOrigem = 'versaoPaginaVenda';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'versaoPaginaVenda';
				this.propriedadeOrigem = 'dalleSolicitacaoImagem';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				console.log('VersaoImagemPaginaVendaEditRelComponent:', result);
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'versaoImagemPaginaVendas',
    		'scope' : {
      			'where' : {'versaoPaginaVendaId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['versaoImagemPaginaVendas'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new VersaoImagemPaginaVenda();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['versaoImagemPaginaVendas'].push(relNovo);
		} else {
			item['versaoImagemPaginaVendas'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['versaoImagemPaginaVendas'].length>0) {
				listaEnvio.push(this.listaBase[i]['versaoImagemPaginaVendas'][0]);
			}
		}
		if (!this.srvRel['AtualizaRelacionamento']) {
			console.log('Não existe AtualizaRelacionamento em ' , this.srvRel);
		}
		this.srvRel['AtualizaRelacionamento'](this.principal.id, listaEnvio)
			.subscribe((resultado) => {
				this.dialogRef.close('Pizza!');
			})
	}


}
