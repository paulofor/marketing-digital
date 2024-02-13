import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ModeloPaginaVenda , ModeloPaginaVendaApi } from "../shared/sdk";

export class ModeloPaginaVendaDetalheComCampanhasBaseComponent implements OnInit {
	principal: ModeloPaginaVenda;
	idPrincipal: number;
	constructor(protected srv: ModeloPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ModeloPaginaVenda) => {
				this.principal = result;
				console.log('principal:', this.principal);
            	this.posCarregaTela();
			})
		})
	}
	getFiltro() {
		return {}
	}
}
