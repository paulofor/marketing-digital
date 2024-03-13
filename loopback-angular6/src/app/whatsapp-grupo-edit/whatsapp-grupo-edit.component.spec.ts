import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoEditComponent } from './whatsapp-grupo-edit.component';

describe('WhatsappGrupoEditComponent', () => {
	let component: WhatsappGrupoEditComponent;
	let fixture: ComponentFixture<WhatsappGrupoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
