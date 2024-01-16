import { Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ElementoModeloPaginaVenda, ElementoModeloPaginaVendaApi } from "../shared/sdk";

export class ElementoModeloPaginaVendaEditBaseComponent implements OnInit{

	itemPre: any;
	item: ElementoModeloPaginaVenda;
	origem: any;

    constructor(protected dialogRef: MatDialogRef<any>
        , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ElementoModeloPaginaVendaApi,
      ) {
    }


	ngOnInit() {
		console.log("Data(BaseEdit):", this.data);
 		if (this.data.origem) {
 			this.origem = this.data.origem;
 		}
  		if (!this.data.item) {
  			console.log("fluxo nova");
  			this.item = this.criaItem();
  		} else {
  			console.log('fluxo altera');
  			this.item = this.data.item;
  			console.log('Item(BaseEdit):', this.item);
  		}
  		this.montaCombos();
   		this.posItem();
 	}

 	onSubmit() {
		this.preSubmit();
	    console.log('Submit(BaseEdit):' , this.item);
	    this.servico.upsert(this.item, (err, obj) => {
	    	if (err) {
	    		console.log("ErroUpsert:" + JSON.stringify(err));
		 	} else {
     		}
    		this.posSubmit();
    	}).subscribe((e: any) => {
    		console.log(JSON.stringify(e));
   			this.closeDialog();
  		});
  	}

	preSubmit() {
	}
	closeDialog() {
		this.dialogRef.close('Pizza!');
	}
	criaItem() {
   		return new ElementoModeloPaginaVenda();
	}
	montaCombos() {
	}
	posItem() {
	}
	posSubmit() {
	}
}
