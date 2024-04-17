import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaWhatsappListComponent } from './conta-whatsapp-list.component';

describe('ContaWhatsappListComponent', () => {
	let component: ContaWhatsappListComponent;
	let fixture: ComponentFixture<ContaWhatsappListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaWhatsappListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaWhatsappListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
