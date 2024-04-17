import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGrupoDiaAgendaEditComponent } from './whatsapp-grupo-dia-agenda-edit.component';

describe('WhatsappGrupoDiaAgendaEditComponent', () => {
	let component: WhatsappGrupoDiaAgendaEditComponent;
	let fixture: ComponentFixture<WhatsappGrupoDiaAgendaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ WhatsappGrupoDiaAgendaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WhatsappGrupoDiaAgendaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
