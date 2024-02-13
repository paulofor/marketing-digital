import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoPorProdutoListComponent } from './imagem-conjunto-por-produto-list.component';

describe('ImagemConjuntoPorProdutoListComponent', () => {
	let component: ImagemConjuntoPorProdutoListComponent;
	let fixture: ComponentFixture<ImagemConjuntoPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
