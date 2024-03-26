import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ConteudoProdutoKiwify , ConteudoProdutoKiwifyApi } from "../shared/sdk";

export class ConteudoProdutoKiwifyDetalheBaseComponent implements OnInit {
	principal: ConteudoProdutoKiwify;
	idPrincipal: number;
	constructor(protected srv: ConteudoProdutoKiwifyApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	posCarregaTela() {}

	ngOnInit() {
		this.carregaTela()
	}
	carregaTela() {
		this.router.params.subscribe((params) => {
		this.idPrincipal = params['id'];
		this.srv.findById(this.idPrincipal, this.getFiltro())
	 		.subscribe((result: ConteudoProdutoKiwify) => {
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
