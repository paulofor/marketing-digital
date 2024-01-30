import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContaGoogleApi, ProdutoAfiliadoHotmart, ProdutoAfiliadoHotmartApi, ProdutoHotmartConta, ProdutoHotmartContaApi } from '../shared/sdk';
import { ProdutoHotmartContaEditRelBaseComponent } from './produto-hotmart-conta-edit-rel-base.component';

@Component({
	selector: 'app-produto-hotmart-conta-edit-rel',
  	templateUrl: './produto-hotmart-conta-edit-rel.component.html',
  	styleUrls: ['./produto-hotmart-conta-edit-rel.component.css']
})

export class ProdutoHotmartContaEditRelComponent extends ProdutoHotmartContaEditRelBaseComponent {
	constructor(protected dialogRef: MatDialogRef<any>, protected srv1:ProdutoAfiliadoHotmartApi, protected srv2:ContaGoogleApi, 
		@Inject(MAT_DIALOG_DATA) protected data: any, protected srvRel : ProdutoHotmartContaApi) { 
			super(dialogRef,srv1,srv2,data,srvRel)
	 }

	 ngOnInit() {
		if (this.data.origem) {
			this.principal = this.data.origem;
			if (this.principal instanceof ProdutoAfiliadoHotmart) {
				this.srvOrigem = this.srv1
				this.srvDestino = this.srv2
				this.propriedadeDestino = 'contaGoogle';
				this.propriedadeOrigem = 'hotmart';
			} else {
				this.srvOrigem = this.srv2
				this.srvDestino = this.srv1
				this.propriedadeDestino = 'hotmart';
				this.propriedadeOrigem = 'contaGoogle';
			}
			this.carregaTela();
		}
		//this.preCarregaTela();
	}
	onChange(event, index, item : any) {
		if (event.checked) {
			let relNovo = new ProdutoHotmartConta();
			relNovo[this.propriedadeOrigem  + 'Id'] = this.principal.hotmartId;
			relNovo[this.propriedadeDestino + 'Id'] = item.id;
			console.log('novo item rel:' , relNovo);
			item['produtoHotmartContas'].push(relNovo);
		} else {
			item['produtoHotmartContas'] = [];
		}
	}
	getFiltro() : any{
		return {
			'include' : {
		  'relation' : 'produtoHotmartContas',
		  'scope' : {
				'where' : {'hotmartId' : this.principal.hotmartId }
		  } 
		  } 
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
		this.srvRel['AtualizaRelacionamento'](this.principal.hotmartId, listaEnvio)
			.subscribe((resultado) => {
				this.dialogRef.close('Pizza!');
			})
	}

}
