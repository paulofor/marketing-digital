import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSolicitacaoComImagemPorProdutoListComponent } from './dalle-solicitacao-com-imagem-por-produto-list.component';

describe('DalleSolicitacaoComImagemPorProdutoListComponent', () => {
	let component: DalleSolicitacaoComImagemPorProdutoListComponent;
	let fixture: ComponentFixture<DalleSolicitacaoComImagemPorProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DalleSolicitacaoComImagemPorProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DalleSolicitacaoComImagemPorProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
