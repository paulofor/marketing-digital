import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoPadraoMensagemEditComponent } from './whatsapp-grupo-padrao-mensagem-edit.component';

describe('WhatsappGrupoPadraoMensagemEditComponent', () => {
	let component: WhatsappGrupoPadraoMensagemEditComponent;
	let fixture: ComponentFixture<WhatsappGrupoPadraoMensagemEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoPadraoMensagemEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoPadraoMensagemEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
