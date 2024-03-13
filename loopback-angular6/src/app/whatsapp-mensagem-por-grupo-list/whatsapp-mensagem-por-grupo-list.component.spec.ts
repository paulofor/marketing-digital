import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMensagemPorGrupoListComponent } from './whatsapp-mensagem-por-grupo-list.component';

describe('WhatsappMensagemPorGrupoListComponent', () => {
	let component: WhatsappMensagemPorGrupoListComponent;
	let fixture: ComponentFixture<WhatsappMensagemPorGrupoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappMensagemPorGrupoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappMensagemPorGrupoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
