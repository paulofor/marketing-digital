import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { DalleSolicitacaoImagem , DalleSolicitacaoImagemApi } from "../shared/sdk";
import { DalleSolicitacaoImagemEditComponent } from "../dalle-solicitacao-imagem-edit/dalle-solicitacao-imagem-edit.component";

export class DalleSolicitacaoImagemProdutoProprioListBaseComponent implements OnInit {
	principal: DalleSolicitacaoImagem;
	listaBase:DalleSolicitacaoImagem[]
	idPrincipal: number;
	constructor(protected srv: DalleSolicitacaoImagemApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	ngOnInit() {
    	this.preCarregaTela();
       	this.carregaTela();
   	}

    preCarregaTela() {}
	posCarregaLista() {}

    carregaTela() {
        this.srv.find(this.getFiltro())
	     .subscribe((result:DalleSolicitacaoImagem[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
        })
    }

	edita(edicao?) {
		this.dialog.afterAllClosed.subscribe(result => {
			this.carregaTela();
		});
		this.dialog.open(this.getComponente(), {
			width: '800px',
			data: {
				item: edicao
			}
		});
	}
	getComponente() : any {
		return DalleSolicitacaoImagemEditComponent
	}


	dialogo1(dados) {
        console.log('dialogo1.dados:' , dados);
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
	}
	getDialogo1() : any {
	}


    dialogo2(dados) {
    	console.log('dialogo2.dados:' , dados);
    	this.dialog.afterAllClosed.subscribe(result => {
 			this.carregaTela();
   		});
   		this.dialog.open(this.getDialogo2(), {
			width: '800px',
   			data: dados
  		});
  	}
 	getDialogo2() : any {
    }


	getFiltro() {
		return {}
	}
}
