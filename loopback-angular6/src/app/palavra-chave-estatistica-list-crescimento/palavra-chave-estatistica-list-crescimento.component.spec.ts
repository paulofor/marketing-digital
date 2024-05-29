import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveEstatisticaListCrescimentoComponent } from './palavra-chave-estatistica-list-crescimento.component';

describe('PalavraChaveEstatisticaListCrescimentoComponent', () => {
	let component: PalavraChaveEstatisticaListCrescimentoComponent;
	let fixture: ComponentFixture<PalavraChaveEstatisticaListCrescimentoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveEstatisticaListCrescimentoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveEstatisticaListCrescimentoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
