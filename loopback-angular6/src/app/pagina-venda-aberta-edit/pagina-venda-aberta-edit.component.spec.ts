import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaAbertaEditComponent } from './pagina-venda-aberta-edit.component';

describe('PaginaVendaAbertaEditComponent', () => {
	let component: PaginaVendaAbertaEditComponent;
	let fixture: ComponentFixture<PaginaVendaAbertaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaAbertaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaAbertaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
