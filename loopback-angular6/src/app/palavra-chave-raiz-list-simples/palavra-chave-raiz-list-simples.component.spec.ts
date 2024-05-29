import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizListSimplesComponent } from './palavra-chave-raiz-list-simples.component';

describe('PalavraChaveRaizListSimplesComponent', () => {
	let component: PalavraChaveRaizListSimplesComponent;
	let fixture: ComponentFixture<PalavraChaveRaizListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveRaizListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveRaizListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
