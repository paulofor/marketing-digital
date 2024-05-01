import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaAdsAnuncioApi, MetaAdsConjuntoAnuncio, MetaAdsConjuntoAnuncioApi } from '../shared/sdk';
import { MetaAdsConjuntoAnuncioDetalheBaseComponent } from './meta-ads-conjunto-anuncio-detalhe-base.component';
import { MetaAdsAnuncioEditComponent } from '../meta-ads-anuncio-edit/meta-ads-anuncio-edit.component';
import { ConfirmaExclusaoComponent } from '../confirma-exclusao/confirma-exclusao.component';

@Component({
	selector: 'app-meta-ads-conjunto-anuncio-detalhe',
  	templateUrl: './meta-ads-conjunto-anuncio-detalhe.component.html',
  	styleUrls: ['./meta-ads-conjunto-anuncio-detalhe.component.css']
})
export class MetaAdsConjuntoAnuncioDetalheComponent extends MetaAdsConjuntoAnuncioDetalheBaseComponent {

	constructor(protected srv: MetaAdsConjuntoAnuncioApi, private srvAnuncio: MetaAdsAnuncioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

	getFiltro()  {
		const filtro =  
			{'include' : 
				[
					{'relation' : 'metaAdsAnuncios' , 'scope' : {
					'include' : ['paginaVendaAberta' , 'criativoAnuncio', 'paginaWhatsappGrupo' ]
					}},
					'metaAdsCampanha'
				]
			};
		return filtro;
	}

	editaAnuncio(conjunto: MetaAdsConjuntoAnuncio, item) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(MetaAdsAnuncioEditComponent, {
			width: '800px',
			data: {
				item: item,
				origem: this.principal
			}
		});
	}

	excluiAnuncio(item: any) {
		const dialogRef = this.dialog.open(ConfirmaExclusaoComponent);
		dialogRef.afterClosed().subscribe(result => {
		  if (result) {
			console.log('Excluir:', item);
			this.srvAnuncio.deleteById(item.id)
				.subscribe((result) => {
					this.carregaTela();
				})
		  }
		});
	}

}
