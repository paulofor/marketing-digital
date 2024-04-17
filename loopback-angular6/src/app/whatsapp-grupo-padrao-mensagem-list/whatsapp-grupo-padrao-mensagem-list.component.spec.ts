import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoPadraoMensagemListComponent } from './whatsapp-grupo-padrao-mensagem-list.component';

describe('WhatsappGrupoPadraoMensagemListComponent', () => {
	let component: WhatsappGrupoPadraoMensagemListComponent;
	let fixture: ComponentFixture<WhatsappGrupoPadraoMensagemListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoPadraoMensagemListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoPadraoMensagemListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
