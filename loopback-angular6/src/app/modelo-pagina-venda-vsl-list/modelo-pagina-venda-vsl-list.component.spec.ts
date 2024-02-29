import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaVslListComponent } from './modelo-pagina-venda-vsl-list.component';

describe('ModeloPaginaVendaVslListComponent', () => {
	let component: ModeloPaginaVendaVslListComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaVslListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaVslListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaVslListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
