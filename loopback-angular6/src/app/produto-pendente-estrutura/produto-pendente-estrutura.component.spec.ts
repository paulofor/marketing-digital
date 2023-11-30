import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPendenteEstruturaComponent } from './produto-pendente-estrutura.component';

describe('ProdutoPendenteEstruturaComponent', () => {
	let component: ProdutoPendenteEstruturaComponent;
	let fixture: ComponentFixture<ProdutoPendenteEstruturaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoPendenteEstruturaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoPendenteEstruturaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
