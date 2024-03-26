import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSolicitacaoComImagemPorProprioListComponent } from './dalle-solicitacao-com-imagem-por-proprio-list.component';

describe('DalleSolicitacaoComImagemPorProprioListComponent', () => {
	let component: DalleSolicitacaoComImagemPorProprioListComponent;
	let fixture: ComponentFixture<DalleSolicitacaoComImagemPorProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DalleSolicitacaoComImagemPorProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DalleSolicitacaoComImagemPorProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
