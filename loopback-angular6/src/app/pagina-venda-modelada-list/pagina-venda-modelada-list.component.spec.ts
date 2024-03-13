import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaModeladaListComponent } from './pagina-venda-modelada-list.component';

describe('PaginaVendaModeladaListComponent', () => {
	let component: PaginaVendaModeladaListComponent;
	let fixture: ComponentFixture<PaginaVendaModeladaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaModeladaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaModeladaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
