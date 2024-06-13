import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaVendaEditComponent } from './plataforma-venda-edit.component';

describe('PlataformaVendaEditComponent', () => {
	let component: PlataformaVendaEditComponent;
	let fixture: ComponentFixture<PlataformaVendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlataformaVendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlataformaVendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
