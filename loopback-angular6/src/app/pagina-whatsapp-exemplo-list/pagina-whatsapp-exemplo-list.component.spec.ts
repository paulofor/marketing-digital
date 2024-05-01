import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWhatsappExemploListComponent } from './pagina-whatsapp-exemplo-list.component';

describe('PaginaWhatsappExemploListComponent', () => {
	let component: PaginaWhatsappExemploListComponent;
	let fixture: ComponentFixture<PaginaWhatsappExemploListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaWhatsappExemploListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaWhatsappExemploListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
