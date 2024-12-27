import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ContaGoogle, PublicoAlvoAdsPalavra, ContaGoogleApi, PublicoAlvoAdsPalavraApi, BaseLoopBackApi } from "../shared/sdk";
import { ContaPublicoAlvoAdsPalavra, ContaPublicoAlvoAdsPalavraApi } from "../shared/sdk";
export class ContaPublicoAlvoAdsPalavraEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ContaGoogleApi, protected srv2:PublicoAlvoAdsPalavraApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : ContaPublicoAlvoAdsPalavraApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof ContaGoogle) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'publicoAlvoAdsPalavra';
				this.propriedadeOrigem = 'contaGoogle';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'contaGoogle';
				this.propriedadeOrigem = 'publicoAlvoAdsPalavra';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				console.log('ContaPublicoAlvoAdsPalavraEditRelComponent:', result);
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'contaPublicoAlvoAdsPalavras',
    		'scope' : {
      			'where' : {'contaGoogleId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['contaPublicoAlvoAdsPalavras'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new ContaPublicoAlvoAdsPalavra();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['contaPublicoAlvoAdsPalavras'].push(relNovo);
		} else {
			item['contaPublicoAlvoAdsPalavras'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['contaPublicoAlvoAdsPalavras'].length>0) {
				listaEnvio.push(this.listaBase[i]['contaPublicoAlvoAdsPalavras'][0]);
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
