import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoPadraoMensagemTextoDetalheComponent } from './whatsapp-grupo-padrao-mensagem-texto-detalhe.component';

describe('WhatsappGrupoPadraoMensagemTextoDetalheComponent', () => {
	let component: WhatsappGrupoPadraoMensagemTextoDetalheComponent;
	let fixture: ComponentFixture<WhatsappGrupoPadraoMensagemTextoDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoPadraoMensagemTextoDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoPadraoMensagemTextoDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
