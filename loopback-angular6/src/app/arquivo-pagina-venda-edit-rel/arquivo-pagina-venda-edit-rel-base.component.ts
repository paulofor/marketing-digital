import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ImagemPaginaVenda, VersaoPaginaVenda, ImagemPaginaVendaApi, VersaoPaginaVendaApi, BaseLoopBackApi } from "../shared/sdk";
import { ArquivoPaginaVenda, ArquivoPaginaVendaApi } from "../shared/sdk";
export class ArquivoPaginaVendaEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ImagemPaginaVendaApi, protected srv2:VersaoPaginaVendaApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : ArquivoPaginaVendaApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof ImagemPaginaVenda) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'versaoPaginaVenda';
				this.propriedadeOrigem = 'imagemPaginaVenda';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'imagemPaginaVenda';
				this.propriedadeOrigem = 'versaoPaginaVenda';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				console.log('ArquivoPaginaVendaEditRelComponent:', result);
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'arquivoPaginaVendas',
    		'scope' : {
      			'where' : {'imagemPaginaVendaId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['arquivoPaginaVendas'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new ArquivoPaginaVenda();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['arquivoPaginaVendas'].push(relNovo);
		} else {
			item['arquivoPaginaVendas'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['arquivoPaginaVendas'].length>0) {
				listaEnvio.push(this.listaBase[i]['arquivoPaginaVendas'][0]);
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
