import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroWhatsappGrupoEditComponent } from './membro-whatsapp-grupo-edit.component';

describe('MembroWhatsappGrupoEditComponent', () => {
	let component: MembroWhatsappGrupoEditComponent;
	let fixture: ComponentFixture<MembroWhatsappGrupoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MembroWhatsappGrupoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MembroWhatsappGrupoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
