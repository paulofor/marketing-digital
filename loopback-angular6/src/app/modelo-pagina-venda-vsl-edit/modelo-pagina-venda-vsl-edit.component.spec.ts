import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaVslEditComponent } from './modelo-pagina-venda-vsl-edit.component';

describe('ModeloPaginaVendaVslEditComponent', () => {
	let component: ModeloPaginaVendaVslEditComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaVslEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaVslEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaVslEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
