import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaPalavraChaveListSimplesTopComponent } from './ideia-palavra-chave-list-simples-top.component';

describe('IdeiaPalavraChaveListSimplesTopComponent', () => {
	let component: IdeiaPalavraChaveListSimplesTopComponent;
	let fixture: ComponentFixture<IdeiaPalavraChaveListSimplesTopComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IdeiaPalavraChaveListSimplesTopComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IdeiaPalavraChaveListSimplesTopComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
