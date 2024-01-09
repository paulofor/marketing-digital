import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaEditComponent } from './pagina-venda-edit.component';

describe('PaginaVendaEditComponent', () => {
	let component: PaginaVendaEditComponent;
	let fixture: ComponentFixture<PaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
