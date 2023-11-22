import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosBoaOpcaoIntermediariaComponent } from './produtos-boa-opcao-intermediaria.component';

describe('ProdutosBoaOpcaoIntermediariaComponent', () => {
	let component: ProdutosBoaOpcaoIntermediariaComponent;
	let fixture: ComponentFixture<ProdutosBoaOpcaoIntermediariaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutosBoaOpcaoIntermediariaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutosBoaOpcaoIntermediariaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
