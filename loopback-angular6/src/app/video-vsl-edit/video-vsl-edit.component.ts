import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { VideoVsl, VideoVslApi } from '../shared/sdk';
import { VideoVslEditBaseComponent } from './video-vsl-edit-base.component';

@Component({
	selector: 'app-video-vsl-edit',
  	templateUrl: './video-vsl-edit.component.html',
  	styleUrls: ['./video-vsl-edit.component.css']
})
export class VideoVslEditComponent extends VideoVslEditBaseComponent {

	 constructor(protected dialogRef: MatDialogRef<any>
	    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: VideoVslApi
		  ) {
	   super(dialogRef,data,servico);
	}


	criaItem(): VideoVsl{
		let video = new VideoVsl();
		video.produtoProprioId = this.origem.id;
		return video;
	}
}
