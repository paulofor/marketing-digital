import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicaoElementoPaginaVendaEditComponent } from './posicao-elemento-pagina-venda-edit.component';

describe('PosicaoElementoPaginaVendaEditComponent', () => {
	let component: PosicaoElementoPaginaVendaEditComponent;
	let fixture: ComponentFixture<PosicaoElementoPaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PosicaoElementoPaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PosicaoElementoPaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
