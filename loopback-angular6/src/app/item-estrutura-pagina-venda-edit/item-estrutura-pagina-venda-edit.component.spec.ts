import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEstruturaPaginaVendaEditComponent } from './item-estrutura-pagina-venda-edit.component';

describe('ItemEstruturaPaginaVendaEditComponent', () => {
	let component: ItemEstruturaPaginaVendaEditComponent;
	let fixture: ComponentFixture<ItemEstruturaPaginaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ItemEstruturaPaginaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemEstruturaPaginaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
