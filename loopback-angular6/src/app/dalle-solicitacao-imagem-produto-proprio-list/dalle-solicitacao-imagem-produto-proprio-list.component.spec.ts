import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSolicitacaoImagemProdutoProprioListComponent } from './dalle-solicitacao-imagem-produto-proprio-list.component';

describe('DalleSolicitacaoImagemProdutoProprioListComponent', () => {
	let component: DalleSolicitacaoImagemProdutoProprioListComponent;
	let fixture: ComponentFixture<DalleSolicitacaoImagemProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DalleSolicitacaoImagemProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DalleSolicitacaoImagemProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
