import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemConjuntoProdutoProprioListComponent } from './imagem-conjunto-produto-proprio-list.component';

describe('ImagemConjuntoProdutoProprioListComponent', () => {
	let component: ImagemConjuntoProdutoProprioListComponent;
	let fixture: ComponentFixture<ImagemConjuntoProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImagemConjuntoProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImagemConjuntoProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
