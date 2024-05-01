import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWhatsappExemploEditComponent } from './pagina-whatsapp-exemplo-edit.component';

describe('PaginaWhatsappExemploEditComponent', () => {
	let component: PaginaWhatsappExemploEditComponent;
	let fixture: ComponentFixture<PaginaWhatsappExemploEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaWhatsappExemploEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaWhatsappExemploEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
