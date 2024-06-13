import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlayerApi } from '../shared/sdk';
import { PlayerEditBaseComponent } from './player-edit-base.component';

@Component({
	selector: 'app-player-edit',
  	templateUrl: './player-edit.component.html',
  	styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent extends PlayerEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PlayerApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
