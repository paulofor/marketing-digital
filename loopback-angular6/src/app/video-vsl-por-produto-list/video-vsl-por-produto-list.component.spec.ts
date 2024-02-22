import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoVslPorProdutoListComponent } from './video-vsl-por-produto-list.component';

describe('VideoVslPorProdutoListComponent', () => {
	let component: VideoVslPorProdutoListComponent;
	let fixture: ComponentFixture<VideoVslPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VideoVslPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VideoVslPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
