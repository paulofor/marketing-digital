import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleSolicitacaoImagemEditComponent } from './dalle-solicitacao-imagem-edit.component';

describe('DalleSolicitacaoImagemEditComponent', () => {
	let component: DalleSolicitacaoImagemEditComponent;
	let fixture: ComponentFixture<DalleSolicitacaoImagemEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DalleSolicitacaoImagemEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DalleSolicitacaoImagemEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
