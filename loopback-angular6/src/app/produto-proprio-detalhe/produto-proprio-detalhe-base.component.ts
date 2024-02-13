import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ProdutoProprio , ProdutoProprioApi } from "../shared/sdk";

export class ProdutoProprioDetalheBaseComponent implements OnInit {
	principal: ProdutoProprio;
	idPrincipal: number;
	constructor(protected srv: ProdutoProprioApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ProdutoProprio) => {
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
