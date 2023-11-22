import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaProdutoHotmartListSimplesComponent } from './visita-produto-hotmart-list-simples.component';

describe('VisitaProdutoHotmartListSimplesComponent', () => {
	let component: VisitaProdutoHotmartListSimplesComponent;
	let fixture: ComponentFixture<VisitaProdutoHotmartListSimplesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ VisitaProdutoHotmartListSimplesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisitaProdutoHotmartListSimplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
