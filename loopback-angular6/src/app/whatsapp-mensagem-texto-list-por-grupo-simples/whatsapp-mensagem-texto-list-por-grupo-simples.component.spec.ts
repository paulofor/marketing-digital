import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemTextoListPorGrupoSimplesComponent } from './whatsapp-mensagem-texto-list-por-grupo-simples.component';

describe('WhatsappMensagemTextoListPorGrupoSimplesComponent', () => {
	let component: WhatsappMensagemTextoListPorGrupoSimplesComponent;
	let fixture: ComponentFixture<WhatsappMensagemTextoListPorGrupoSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemTextoListPorGrupoSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemTextoListPorGrupoSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
