import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaPaginaVendaAbertaListComponent } from './estrutura-pagina-venda-aberta-list.component';

describe('EstruturaPaginaVendaAbertaListComponent', () => {
	let component: EstruturaPaginaVendaAbertaListComponent;
	let fixture: ComponentFixture<EstruturaPaginaVendaAbertaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EstruturaPaginaVendaAbertaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EstruturaPaginaVendaAbertaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
