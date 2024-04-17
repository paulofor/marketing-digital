import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoDetalheComponent } from './whatsapp-grupo-detalhe.component';

describe('WhatsappGrupoDetalheComponent', () => {
	let component: WhatsappGrupoDetalheComponent;
	let fixture: ComponentFixture<WhatsappGrupoDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
