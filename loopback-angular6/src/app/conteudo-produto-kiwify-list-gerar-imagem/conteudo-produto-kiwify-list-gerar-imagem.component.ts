import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ConteudoProdutoKiwify, ConteudoProdutoKiwifyApi } from '../shared/sdk';
import { ConteudoProdutoKiwifyListGerarImagemBaseComponent } from './conteudo-produto-kiwify-list-gerar-imagem-base.component';

@Component({
	selector: 'app-conteudo-produto-kiwify-list-gerar-imagem',
  	templateUrl: './conteudo-produto-kiwify-list-gerar-imagem.component.html',
  	styleUrls: ['./conteudo-produto-kiwify-list-gerar-imagem.component.css']
})
export class ConteudoProdutoKiwifyListGerarImagemComponent extends ConteudoProdutoKiwifyListGerarImagemBaseComponent {

	constructor(protected srv: ConteudoProdutoKiwifyApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ListaParaGeracaoImagem()
	     .subscribe((result:ConteudoProdutoKiwify[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

}
