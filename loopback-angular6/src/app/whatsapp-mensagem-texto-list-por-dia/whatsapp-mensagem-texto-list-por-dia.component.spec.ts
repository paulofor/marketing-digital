import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemTextoListPorDiaComponent } from './whatsapp-mensagem-texto-list-por-dia.component';

describe('WhatsappMensagemTextoListPorDiaComponent', () => {
	let component: WhatsappMensagemTextoListPorDiaComponent;
	let fixture: ComponentFixture<WhatsappMensagemTextoListPorDiaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemTextoListPorDiaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemTextoListPorDiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
