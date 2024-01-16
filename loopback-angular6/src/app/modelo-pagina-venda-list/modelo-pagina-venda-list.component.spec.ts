import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPaginaVendaListComponent } from './modelo-pagina-venda-list.component';

describe('ModeloPaginaVendaListComponent', () => {
	let component: ModeloPaginaVendaListComponent;
	let fixture: ComponentFixture<ModeloPaginaVendaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ModeloPaginaVendaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModeloPaginaVendaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
