import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaPalavraChaveEditComponent } from './ideia-palavra-chave-edit.component';

describe('IdeiaPalavraChaveEditComponent', () => {
	let component: IdeiaPalavraChaveEditComponent;
	let fixture: ComponentFixture<IdeiaPalavraChaveEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IdeiaPalavraChaveEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IdeiaPalavraChaveEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
