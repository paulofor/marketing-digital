import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaEditComponent } from './modelo-pagina-venda-edit.component';

describe('ModeloPaginaVendaEditComponent', () => {
	let component: ModeloPaginaVendaEditComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
