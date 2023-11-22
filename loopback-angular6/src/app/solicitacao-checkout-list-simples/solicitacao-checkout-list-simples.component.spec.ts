import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoCheckoutListSimplesComponent } from './solicitacao-checkout-list-simples.component';

describe('SolicitacaoCheckoutListSimplesComponent', () => {
	let component: SolicitacaoCheckoutListSimplesComponent;
	let fixture: ComponentFixture<SolicitacaoCheckoutListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SolicitacaoCheckoutListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SolicitacaoCheckoutListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
