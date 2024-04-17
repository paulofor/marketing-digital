import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaWhatsappEditComponent } from './conta-whatsapp-edit.component';

describe('ContaWhatsappEditComponent', () => {
	let component: ContaWhatsappEditComponent;
	let fixture: ComponentFixture<ContaWhatsappEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaWhatsappEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaWhatsappEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
