import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPaginaVendaListSimplesComponent } from './load-pagina-venda-list-simples.component';

describe('LoadPaginaVendaListSimplesComponent', () => {
	let component: LoadPaginaVendaListSimplesComponent;
	let fixture: ComponentFixture<LoadPaginaVendaListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LoadPaginaVendaListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadPaginaVendaListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
