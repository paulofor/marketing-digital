import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaProdutoHotmartResumoComponent } from './visita-produto-hotmart-resumo.component';

describe('VisitaProdutoHotmartResumoComponent', () => {
	let component: VisitaProdutoHotmartResumoComponent;
	let fixture: ComponentFixture<VisitaProdutoHotmartResumoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VisitaProdutoHotmartResumoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisitaProdutoHotmartResumoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
