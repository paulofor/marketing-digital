import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizEditComponent } from './palavra-chave-raiz-edit.component';

describe('PalavraChaveRaizEditComponent', () => {
	let component: PalavraChaveRaizEditComponent;
	let fixture: ComponentFixture<PalavraChaveRaizEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveRaizEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveRaizEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
