import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoModeloPaginaVendaEditComponent } from './elemento-modelo-pagina-venda-edit.component';

describe('ElementoModeloPaginaVendaEditComponent', () => {
	let component: ElementoModeloPaginaVendaEditComponent;
	let fixture: ComponentFixture<ElementoModeloPaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ElementoModeloPaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ElementoModeloPaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
