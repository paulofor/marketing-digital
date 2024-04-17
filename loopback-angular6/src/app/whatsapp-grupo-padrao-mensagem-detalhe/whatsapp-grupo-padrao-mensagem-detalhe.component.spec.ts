import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoPadraoMensagemDetalheComponent } from './whatsapp-grupo-padrao-mensagem-detalhe.component';

describe('WhatsappGrupoPadraoMensagemDetalheComponent', () => {
	let component: WhatsappGrupoPadraoMensagemDetalheComponent;
	let fixture: ComponentFixture<WhatsappGrupoPadraoMensagemDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoPadraoMensagemDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoPadraoMensagemDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
