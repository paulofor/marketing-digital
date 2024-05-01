import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWhatsappGrupoListComponent } from './pagina-whatsapp-grupo-list.component';

describe('PaginaWhatsappGrupoListComponent', () => {
	let component: PaginaWhatsappGrupoListComponent;
	let fixture: ComponentFixture<PaginaWhatsappGrupoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PaginaWhatsappGrupoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaWhatsappGrupoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
