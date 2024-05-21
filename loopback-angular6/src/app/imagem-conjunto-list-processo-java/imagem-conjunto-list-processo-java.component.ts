import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ImagemConjunto, ImagemConjuntoApi } from '../shared/sdk';
import { ImagemConjuntoListProcessoJavaBaseComponent } from './imagem-conjunto-list-processo-java-base.component';
import { ImagemConjuntoEditDeImagemComponent } from '../imagem-conjunto-edit-de-imagem/imagem-conjunto-edit-de-imagem.component';

@Component({
	selector: 'app-imagem-conjunto-list-processo-java',
  	templateUrl: './imagem-conjunto-list-processo-java.component.html',
  	styleUrls: ['./imagem-conjunto-list-processo-java.component.css']
})
export class ImagemConjuntoListProcessoJavaComponent extends ImagemConjuntoListProcessoJavaBaseComponent {

	constructor(protected srv: ImagemConjuntoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	carregaTela() {
        this.srv.ObtemListaParaGerarDeImagemVenda()
	     .subscribe((result:ImagemConjunto[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(ImagemConjuntoEditDeImagemComponent, {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}
}
