import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemEditComponent } from './whatsapp-mensagem-edit.component';

describe('WhatsappMensagemEditComponent', () => {
	let component: WhatsappMensagemEditComponent;
	let fixture: ComponentFixture<WhatsappMensagemEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
