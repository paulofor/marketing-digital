import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoAlvoAdsPalavraDetalheComponent } from './publico-alvo-ads-palavra-detalhe.component';

describe('PublicoAlvoAdsPalavraDetalheComponent', () => {
	let component: PublicoAlvoAdsPalavraDetalheComponent;
	let fixture: ComponentFixture<PublicoAlvoAdsPalavraDetalheComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PublicoAlvoAdsPalavraDetalheComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PublicoAlvoAdsPalavraDetalheComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
