import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappModeloMensagemEditComponent } from './whatsapp-modelo-mensagem-edit.component';

describe('WhatsappModeloMensagemEditComponent', () => {
	let component: WhatsappModeloMensagemEditComponent;
	let fixture: ComponentFixture<WhatsappModeloMensagemEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappModeloMensagemEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappModeloMensagemEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
