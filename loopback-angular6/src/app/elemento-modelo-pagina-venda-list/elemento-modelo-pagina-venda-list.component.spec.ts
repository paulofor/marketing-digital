import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoModeloPaginaVendaListComponent } from './elemento-modelo-pagina-venda-list.component';

describe('ElementoModeloPaginaVendaListComponent', () => {
	let component: ElementoModeloPaginaVendaListComponent;
	let fixture: ComponentFixture<ElementoModeloPaginaVendaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ElementoModeloPaginaVendaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ElementoModeloPaginaVendaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
