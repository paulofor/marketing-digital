import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaPalavraChaveListSimplesTopPesquisaComponent } from './ideia-palavra-chave-list-simples-top-pesquisa.component';

describe('IdeiaPalavraChaveListSimplesTopPesquisaComponent', () => {
	let component: IdeiaPalavraChaveListSimplesTopPesquisaComponent;
	let fixture: ComponentFixture<IdeiaPalavraChaveListSimplesTopPesquisaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IdeiaPalavraChaveListSimplesTopPesquisaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IdeiaPalavraChaveListSimplesTopPesquisaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
