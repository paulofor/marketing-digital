import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVslDetalheComponent } from './video-vsl-detalhe.component';

describe('VideoVslDetalheComponent', () => {
	let component: VideoVslDetalheComponent;
	let fixture: ComponentFixture<VideoVslDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VideoVslDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VideoVslDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
