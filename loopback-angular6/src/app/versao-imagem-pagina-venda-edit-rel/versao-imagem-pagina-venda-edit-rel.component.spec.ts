import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoImagemPaginaVendaEditRelComponent } from './versao-imagem-pagina-venda-edit-rel.component';

describe('VersaoImagemPaginaVendaEditRelComponent', () => {
	let component: VersaoImagemPaginaVendaEditRelComponent;
	let fixture: ComponentFixture<VersaoImagemPaginaVendaEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VersaoImagemPaginaVendaEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VersaoImagemPaginaVendaEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
