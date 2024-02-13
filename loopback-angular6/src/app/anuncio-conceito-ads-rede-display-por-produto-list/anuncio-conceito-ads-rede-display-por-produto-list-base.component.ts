import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { AnuncioConceitoAdsRedeDisplay , AnuncioConceitoAdsRedeDisplayApi } from "../shared/sdk";
import { AnuncioConceitoAdsRedeDisplayEditComponent } from "../anuncio-conceito-ads-rede-display-edit/anuncio-conceito-ads-rede-display-edit.component";

export class AnuncioConceitoAdsRedeDisplayPorProdutoListBaseComponent implements OnInit {
	principal: AnuncioConceitoAdsRedeDisplay;
	listaBase:AnuncioConceitoAdsRedeDisplay[]
	idPrincipal: number;
	constructor(protected srv: AnuncioConceitoAdsRedeDisplayApi, protected router: ActivatedRoute, protected dialog: MatDialog) { }

	ngOnInit() {
    	this.preCarregaTela();
       	this.carregaTela();
   	}

    preCarregaTela() {}
	posCarregaLista() {}

    carregaTela() {
        this.srv.find(this.getFiltro())
	     .subscribe((result:AnuncioConceitoAdsRedeDisplay[]) => {
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
		return AnuncioConceitoAdsRedeDisplayEditComponent
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
