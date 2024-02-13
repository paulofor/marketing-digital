import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ProdutoProprioVersao , ProdutoProprioVersaoApi } from "../shared/sdk";

export class ProdutoProprioVersaoDetalheBaseComponent implements OnInit {
	principal: ProdutoProprioVersao;
	idPrincipal: number;
	constructor(protected srv: ProdutoProprioVersaoApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ProdutoProprioVersao) => {
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
