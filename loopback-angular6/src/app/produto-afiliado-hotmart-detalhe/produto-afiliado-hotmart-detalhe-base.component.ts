import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ProdutoAfiliadoHotmart , ProdutoAfiliadoHotmartApi } from "../shared/sdk";

export class ProdutoAfiliadoHotmartDetalheBaseComponent implements OnInit {
	principal: ProdutoAfiliadoHotmart;
	idPrincipal: number;
	constructor(protected srv: ProdutoAfiliadoHotmartApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ProdutoAfiliadoHotmart) => {
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
