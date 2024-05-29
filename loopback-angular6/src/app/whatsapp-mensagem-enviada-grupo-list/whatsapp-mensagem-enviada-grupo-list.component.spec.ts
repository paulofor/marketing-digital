import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemEnviadaGrupoListComponent } from './whatsapp-mensagem-enviada-grupo-list.component';

describe('WhatsappMensagemEnviadaGrupoListComponent', () => {
	let component: WhatsappMensagemEnviadaGrupoListComponent;
	let fixture: ComponentFixture<WhatsappMensagemEnviadaGrupoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemEnviadaGrupoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemEnviadaGrupoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
