import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaPaginaVendaAbertaEditComponent } from './estrutura-pagina-venda-aberta-edit.component';

describe('EstruturaPaginaVendaAbertaEditComponent', () => {
	let component: EstruturaPaginaVendaAbertaEditComponent;
	let fixture: ComponentFixture<EstruturaPaginaVendaAbertaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EstruturaPaginaVendaAbertaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EstruturaPaginaVendaAbertaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
