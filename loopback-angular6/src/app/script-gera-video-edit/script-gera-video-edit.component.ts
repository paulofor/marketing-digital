import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ScriptGeraVideoApi } from '../shared/sdk';
import { ScriptGeraVideoEditBaseComponent } from './script-gera-video-edit-base.component';

@Component({
	selector: 'app-script-gera-video-edit',
  	templateUrl: './script-gera-video-edit.component.html',
  	styleUrls: ['./script-gera-video-edit.component.css']
})
export class ScriptGeraVideoEditComponent extends ScriptGeraVideoEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ScriptGeraVideoApi
		  ) {
	   super(dialogRef,data,servico);
	}

}
