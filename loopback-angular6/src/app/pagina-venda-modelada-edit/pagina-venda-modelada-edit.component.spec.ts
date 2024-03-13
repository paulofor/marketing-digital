import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaModeladaEditComponent } from './pagina-venda-modelada-edit.component';

describe('PaginaVendaModeladaEditComponent', () => {
	let component: PaginaVendaModeladaEditComponent;
	let fixture: ComponentFixture<PaginaVendaModeladaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaModeladaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaModeladaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
