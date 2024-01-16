import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoPaginaVendaEditComponent } from './versao-pagina-venda-edit.component';

describe('VersaoPaginaVendaEditComponent', () => {
	let component: VersaoPaginaVendaEditComponent;
	let fixture: ComponentFixture<VersaoPaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VersaoPaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VersaoPaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
