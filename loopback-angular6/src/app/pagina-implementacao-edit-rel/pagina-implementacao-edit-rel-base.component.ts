import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PaginaVendaAberta, ImplementacaoItemEstrutura, PaginaVendaAbertaApi, ImplementacaoItemEstruturaApi, BaseLoopBackApi } from "../shared/sdk";
import { PaginaImplementacao, PaginaImplementacaoApi } from "../shared/sdk";
export class PaginaImplementacaoEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:PaginaVendaAbertaApi, protected srv2:ImplementacaoItemEstruturaApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : PaginaImplementacaoApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof PaginaVendaAberta) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'implementacaoItemEstrutura';
				this.propriedadeOrigem = 'paginaVendaAberta';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'paginaVendaAberta';
				this.propriedadeOrigem = 'implementacaoItemEstrutura';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				console.log('PaginaImplementacaoEditRelComponent:', result);
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'paginaImplementacaos',
    		'scope' : {
      			'where' : {'paginaVendaAbertaId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['paginaImplementacaos'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new PaginaImplementacao();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['paginaImplementacaos'].push(relNovo);
		} else {
			item['paginaImplementacaos'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['paginaImplementacaos'].length>0) {
				listaEnvio.push(this.listaBase[i]['paginaImplementacaos'][0]);
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
