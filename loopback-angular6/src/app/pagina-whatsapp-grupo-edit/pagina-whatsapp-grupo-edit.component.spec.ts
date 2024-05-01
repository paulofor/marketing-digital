import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWhatsappGrupoEditComponent } from './pagina-whatsapp-grupo-edit.component';

describe('PaginaWhatsappGrupoEditComponent', () => {
	let component: PaginaWhatsappGrupoEditComponent;
	let fixture: ComponentFixture<PaginaWhatsappGrupoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaWhatsappGrupoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaWhatsappGrupoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
