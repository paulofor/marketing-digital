import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoEditQtdeComponent } from './whatsapp-grupo-edit-qtde.component';

describe('WhatsappGrupoEditQtdeComponent', () => {
	let component: WhatsappGrupoEditQtdeComponent;
	let fixture: ComponentFixture<WhatsappGrupoEditQtdeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoEditQtdeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoEditQtdeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
