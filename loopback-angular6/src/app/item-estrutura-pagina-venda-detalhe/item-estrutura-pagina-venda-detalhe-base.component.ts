import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ItemEstruturaPaginaVenda , ItemEstruturaPaginaVendaApi } from "../shared/sdk";

export class ItemEstruturaPaginaVendaDetalheBaseComponent implements OnInit {
	principal: ItemEstruturaPaginaVenda;
	idPrincipal: number;
	constructor(protected srv: ItemEstruturaPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ItemEstruturaPaginaVenda) => {
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
