import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaPalavraChaveListSimplesMelhoresCpcComponent } from './ideia-palavra-chave-list-simples-melhores-cpc.component';

describe('IdeiaPalavraChaveListSimplesMelhoresCpcComponent', () => {
	let component: IdeiaPalavraChaveListSimplesMelhoresCpcComponent;
	let fixture: ComponentFixture<IdeiaPalavraChaveListSimplesMelhoresCpcComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IdeiaPalavraChaveListSimplesMelhoresCpcComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IdeiaPalavraChaveListSimplesMelhoresCpcComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
