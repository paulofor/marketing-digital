import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaVslEditComponent } from './pagina-venda-vsl-edit.component';

describe('PaginaVendaVslEditComponent', () => {
	let component: PaginaVendaVslEditComponent;
	let fixture: ComponentFixture<PaginaVendaVslEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaVslEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaVslEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
