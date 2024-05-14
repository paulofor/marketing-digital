import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoProdutoKiwifyListGerarImagemComponent } from './conteudo-produto-kiwify-list-gerar-imagem.component';

describe('ConteudoProdutoKiwifyListGerarImagemComponent', () => {
	let component: ConteudoProdutoKiwifyListGerarImagemComponent;
	let fixture: ComponentFixture<ConteudoProdutoKiwifyListGerarImagemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConteudoProdutoKiwifyListGerarImagemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConteudoProdutoKiwifyListGerarImagemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
