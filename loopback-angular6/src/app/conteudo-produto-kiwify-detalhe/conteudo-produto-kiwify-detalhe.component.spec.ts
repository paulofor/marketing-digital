import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoProdutoKiwifyDetalheComponent } from './conteudo-produto-kiwify-detalhe.component';

describe('ConteudoProdutoKiwifyDetalheComponent', () => {
	let component: ConteudoProdutoKiwifyDetalheComponent;
	let fixture: ComponentFixture<ConteudoProdutoKiwifyDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConteudoProdutoKiwifyDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConteudoProdutoKiwifyDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
