import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaGoogleDetalheComponent } from './conta-google-detalhe.component';

describe('ContaGoogleDetalheComponent', () => {
	let component: ContaGoogleDetalheComponent;
	let fixture: ComponentFixture<ContaGoogleDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaGoogleDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaGoogleDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
