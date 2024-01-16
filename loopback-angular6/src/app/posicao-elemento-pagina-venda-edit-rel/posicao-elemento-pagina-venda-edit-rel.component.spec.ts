import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoElementoPaginaVendaEditRelComponent } from './posicao-elemento-pagina-venda-edit-rel.component';

describe('PosicaoElementoPaginaVendaEditRelComponent', () => {
	let component: PosicaoElementoPaginaVendaEditRelComponent;
	let fixture: ComponentFixture<PosicaoElementoPaginaVendaEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PosicaoElementoPaginaVendaEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PosicaoElementoPaginaVendaEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
