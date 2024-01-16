import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { VersaoPaginaVenda , VersaoPaginaVendaApi } from "../shared/sdk";

export class VersaoPaginaVendaDetalheBaseComponent implements OnInit {
	principal: VersaoPaginaVenda;
	idPrincipal: number;
	constructor(protected srv: VersaoPaginaVendaApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: VersaoPaginaVenda) => {
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
