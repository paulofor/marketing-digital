import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoEditDeImagemComponent } from './imagem-conjunto-edit-de-imagem.component';

describe('ImagemConjuntoEditDeImagemComponent', () => {
	let component: ImagemConjuntoEditDeImagemComponent;
	let fixture: ComponentFixture<ImagemConjuntoEditDeImagemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoEditDeImagemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoEditDeImagemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
