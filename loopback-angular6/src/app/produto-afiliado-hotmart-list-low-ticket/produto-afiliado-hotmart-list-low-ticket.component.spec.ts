import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAfiliadoHotmartListLowTicketComponent } from './produto-afiliado-hotmart-list-low-ticket.component';

describe('ProdutoAfiliadoHotmartListLowTicketComponent', () => {
	let component: ProdutoAfiliadoHotmartListLowTicketComponent;
	let fixture: ComponentFixture<ProdutoAfiliadoHotmartListLowTicketComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoAfiliadoHotmartListLowTicketComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoAfiliadoHotmartListLowTicketComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
