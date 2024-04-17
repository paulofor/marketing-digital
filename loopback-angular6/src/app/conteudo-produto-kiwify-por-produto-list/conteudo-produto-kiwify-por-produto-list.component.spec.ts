import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoProdutoKiwifyPorProdutoListComponent } from './conteudo-produto-kiwify-por-produto-list.component';

describe('ConteudoProdutoKiwifyPorProdutoListComponent', () => {
	let component: ConteudoProdutoKiwifyPorProdutoListComponent;
	let fixture: ComponentFixture<ConteudoProdutoKiwifyPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConteudoProdutoKiwifyPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConteudoProdutoKiwifyPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
