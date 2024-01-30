import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaPropriaEditComponent } from './pagina-venda-propria-edit.component';

describe('PaginaVendaPropriaEditComponent', () => {
	let component: PaginaVendaPropriaEditComponent;
	let fixture: ComponentFixture<PaginaVendaPropriaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaPropriaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaPropriaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
