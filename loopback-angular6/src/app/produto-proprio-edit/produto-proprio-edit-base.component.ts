import { Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoProprio, ProdutoProprioApi } from "../shared/sdk";

export class ProdutoProprioEditBaseComponent implements OnInit{

	itemPre: any;
	item: ProdutoProprio;
	origem: any;

    constructor(protected dialogRef: MatDialogRef<any>
        , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ProdutoProprioApi,
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
   		return new ProdutoProprio();
	}
	montaCombos() {
	}
	posItem() {
	}
	posSubmit() {
	}
}
