import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCampanhaListComponent } from './agenda-campanha-list.component';

describe('AgendaCampanhaListComponent', () => {
	let component: AgendaCampanhaListComponent;
	let fixture: ComponentFixture<AgendaCampanhaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ AgendaCampanhaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AgendaCampanhaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
