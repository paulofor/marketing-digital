import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemEnviadaGrupoEditComponent } from './whatsapp-mensagem-enviada-grupo-edit.component';

describe('WhatsappMensagemEnviadaGrupoEditComponent', () => {
	let component: WhatsappMensagemEnviadaGrupoEditComponent;
	let fixture: ComponentFixture<WhatsappMensagemEnviadaGrupoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemEnviadaGrupoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemEnviadaGrupoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
