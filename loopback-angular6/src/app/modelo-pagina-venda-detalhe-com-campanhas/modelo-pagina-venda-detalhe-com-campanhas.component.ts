import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ModeloPaginaVendaApi } from '../shared/sdk';
import { ModeloPaginaVendaDetalheComCampanhasBaseComponent } from './modelo-pagina-venda-detalhe-com-campanhas-base.component';

@Component({
	selector: 'app-modelo-pagina-venda-detalhe-com-campanhas',
  	templateUrl: './modelo-pagina-venda-detalhe-com-campanhas.component.html',
  	styleUrls: ['./modelo-pagina-venda-detalhe-com-campanhas.component.css']
})
export class ModeloPaginaVendaDetalheComCampanhasComponent extends ModeloPaginaVendaDetalheComCampanhasBaseComponent {

	constructor(protected srv: ModeloPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { 
		super(srv,router,dialog);
	}

}
