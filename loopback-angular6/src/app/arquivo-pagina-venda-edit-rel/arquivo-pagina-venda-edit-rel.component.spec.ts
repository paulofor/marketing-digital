import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoPaginaVendaEditRelComponent } from './arquivo-pagina-venda-edit-rel.component';

describe('ArquivoPaginaVendaEditRelComponent', () => {
	let component: ArquivoPaginaVendaEditRelComponent;
	let fixture: ComponentFixture<ArquivoPaginaVendaEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ArquivoPaginaVendaEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArquivoPaginaVendaEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
