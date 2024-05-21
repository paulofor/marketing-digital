import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoListProcessoJavaComponent } from './imagem-conjunto-list-processo-java.component';

describe('ImagemConjuntoListProcessoJavaComponent', () => {
	let component: ImagemConjuntoListProcessoJavaComponent;
	let fixture: ComponentFixture<ImagemConjuntoListProcessoJavaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoListProcessoJavaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoListProcessoJavaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
