import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoListQtdeComponent } from './whatsapp-grupo-list-qtde.component';

describe('WhatsappGrupoListQtdeComponent', () => {
	let component: WhatsappGrupoListQtdeComponent;
	let fixture: ComponentFixture<WhatsappGrupoListQtdeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoListQtdeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoListQtdeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
