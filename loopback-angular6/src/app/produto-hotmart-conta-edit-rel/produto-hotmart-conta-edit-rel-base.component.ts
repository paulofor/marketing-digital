import { Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProdutoAfiliadoHotmart, ContaGoogle, ProdutoAfiliadoHotmartApi, ContaGoogleApi, BaseLoopBackApi } from "../shared/sdk";
import { ProdutoHotmartConta, ProdutoHotmartContaApi } from "../shared/sdk";
export class ProdutoHotmartContaEditRelBaseComponent implements OnInit {

	principal: any
	srvOrigem : BaseLoopBackApi
	srvDestino : BaseLoopBackApi
	listaBase : any[]
	propriedadeDestino : string
	propriedadeOrigem : string

	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ProdutoAfiliadoHotmartApi, protected srv2:ContaGoogleApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : ProdutoHotmartContaApi) { }

	ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof ProdutoAfiliadoHotmart) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'contaGoogle';
				this.propriedadeOrigem = 'produtoAfiliadoHotmart';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'produtoAfiliadoHotmart';
				this.propriedadeOrigem = 'contaGoogle';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}

	carregaTela() {
		this.srvDestino.find(this.getFiltro())
			.subscribe((result:any[]) => {
				console.log('ProdutoHotmartContaEditRelComponent:', result);
				this.listaBase = result;
			})
	}

	posCarregaLista() {}


	getFiltro() {
		return {
  			'include' : {
    		'relation' : 'produtoHotmartContas',
    		'scope' : {
      			'where' : {'produtoAfiliadoHotmartId' : this.principal.id }
    		} 
    		} 
    	} 
  	}

	getCheck(item:any) : boolean {
    	return (item['produtoHotmartContas'].length>0);
  	}


	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new ProdutoHotmartConta();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.id;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			item['produtoHotmartContas'].push(relNovo);
		} else {
			item['produtoHotmartContas'] = [];
		}
	}
	
	onSubmit() {
		let listaEnvio:any[] = [];
		for(let i=0;i<this.listaBase.length;i++) {
			if (this.listaBase[i]['produtoHotmartContas'].length>0) {
				listaEnvio.push(this.listaBase[i]['produtoHotmartContas'][0]);
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
