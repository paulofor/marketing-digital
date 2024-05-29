import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveEstatisticaListMelhoresComponent } from './palavra-chave-estatistica-list-melhores.component';

describe('PalavraChaveEstatisticaListMelhoresComponent', () => {
	let component: PalavraChaveEstatisticaListMelhoresComponent;
	let fixture: ComponentFixture<PalavraChaveEstatisticaListMelhoresComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveEstatisticaListMelhoresComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveEstatisticaListMelhoresComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
