import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ContaGoogleApi, ContaGoogleMetricaMesApi, ProdutoAfiliadoHotmartApi } from '../shared/sdk';
import { ProdutoObtemProximoTrabalhoBaseComponent } from './produto-obtem-proximo-trabalho-base.component';
import { ProdutoAfiliadoHotmartEditComponent } from '../produto-afiliado-hotmart-edit/produto-afiliado-hotmart-edit.component';

@Component({
	selector: 'app-produto-obtem-proximo-trabalho',
  	templateUrl: './produto-obtem-proximo-trabalho.component.html',
  	styleUrls: ['./produto-obtem-proximo-trabalho.component.css']
})
export class ProdutoObtemProximoTrabalhoComponent extends ProdutoObtemProximoTrabalhoBaseComponent {

	resumoMes: any;

	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog,
			private srvConta:ContaGoogleMetricaMesApi) { 
		super(srv,router,dialog);
	}
	tipoCard(item) {
		if (item.status=='ENABLED') {
			return 'texto-forte'
		} else {
			return 'texto-fraco'
		}
	}

	posCarregaTela() {
		this.srvConta.CustoTotalMes()
			.subscribe((result:any) => {
				this.resumoMes = result;
				console.log('result:' , result)
			})
	}


	edita(edicao?) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(ProdutoAfiliadoHotmartEditComponent, {
            width: '800px',
            data: {
                item: edicao
            }
        });
    }
}
