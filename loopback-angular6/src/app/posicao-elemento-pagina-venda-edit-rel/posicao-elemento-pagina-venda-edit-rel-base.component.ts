import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ModeloPaginaVenda, ElementoModeloPaginaVenda, ModeloPaginaVendaApi, ElementoModeloPaginaVendaApi, BaseLoopBackApi } from "../shared/sdk";
import { PosicaoElementoPaginaVenda, PosicaoElementoPaginaVendaApi } from "../shared/sdk";
export class PosicaoElementoPaginaVendaEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ModeloPaginaVendaApi, protected srv2:ElementoModeloPaginaVendaApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : PosicaoElementoPaginaVendaApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof ModeloPaginaVenda) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'elementoModeloPaginaVenda';
				this.propriedadeOrigem = 'modeloPaginaVenda';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'modeloPaginaVenda';
				this.propriedadeOrigem = 'elementoModeloPaginaVenda';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'posicaoElementoPaginaVendas',
    		'scope' : {
      			'where' : {'modeloPaginaVendaId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['posicaoElementoPaginaVendas'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new PosicaoElementoPaginaVenda();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['posicaoElementoPaginaVendas'].push(relNovo);
		} else {
			item['posicaoElementoPaginaVendas'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['posicaoElementoPaginaVendas'].length>0) {
				listaEnvio.push(this.listaBase[i]['posicaoElementoPaginaVendas'][0]);
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
