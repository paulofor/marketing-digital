import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroWhatsappGrupoListComponent } from './membro-whatsapp-grupo-list.component';

describe('MembroWhatsappGrupoListComponent', () => {
	let component: MembroWhatsappGrupoListComponent;
	let fixture: ComponentFixture<MembroWhatsappGrupoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ MembroWhatsappGrupoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MembroWhatsappGrupoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
