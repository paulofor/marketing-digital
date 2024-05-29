import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalavraChaveRaizListComponent } from './palavra-chave-raiz-list.component';

describe('PalavraChaveRaizListComponent', () => {
	let component: PalavraChaveRaizListComponent;
	let fixture: ComponentFixture<PalavraChaveRaizListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PalavraChaveRaizListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PalavraChaveRaizListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
