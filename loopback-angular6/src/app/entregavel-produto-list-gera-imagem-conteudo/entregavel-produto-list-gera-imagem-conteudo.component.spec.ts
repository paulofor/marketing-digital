import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoListGeraImagemConteudoComponent } from './entregavel-produto-list-gera-imagem-conteudo.component';

describe('EntregavelProdutoListGeraImagemConteudoComponent', () => {
	let component: EntregavelProdutoListGeraImagemConteudoComponent;
	let fixture: ComponentFixture<EntregavelProdutoListGeraImagemConteudoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoListGeraImagemConteudoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoListGeraImagemConteudoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
