import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaAbertaListComponent } from './pagina-venda-aberta-list.component';

describe('PaginaVendaAbertaListComponent', () => {
	let component: PaginaVendaAbertaListComponent;
	let fixture: ComponentFixture<PaginaVendaAbertaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaVendaAbertaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaVendaAbertaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
