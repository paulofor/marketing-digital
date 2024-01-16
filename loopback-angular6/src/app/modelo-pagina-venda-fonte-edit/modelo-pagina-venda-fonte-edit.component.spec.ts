import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaFonteEditComponent } from './modelo-pagina-venda-fonte-edit.component';

describe('ModeloPaginaVendaFonteEditComponent', () => {
	let component: ModeloPaginaVendaFonteEditComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaFonteEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaFonteEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaFonteEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
