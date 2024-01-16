import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSolicitacaoImagemPorProdutoListComponent } from './dalle-solicitacao-imagem-por-produto-list.component';

describe('DalleSolicitacaoImagemPorProdutoListComponent', () => {
	let component: DalleSolicitacaoImagemPorProdutoListComponent;
	let fixture: ComponentFixture<DalleSolicitacaoImagemPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DalleSolicitacaoImagemPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DalleSolicitacaoImagemPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
