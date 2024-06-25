import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLowTickerComponent } from './lista-low-ticker.component';

describe('ListaLowTickerComponent', () => {
	let component: ListaLowTickerComponent;
	let fixture: ComponentFixture<ListaLowTickerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListaLowTickerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaLowTickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
