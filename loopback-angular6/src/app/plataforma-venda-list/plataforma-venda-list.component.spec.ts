import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaVendaListComponent } from './plataforma-venda-list.component';

describe('PlataformaVendaListComponent', () => {
	let component: PlataformaVendaListComponent;
	let fixture: ComponentFixture<PlataformaVendaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlataformaVendaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlataformaVendaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
