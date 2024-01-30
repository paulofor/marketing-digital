import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPublicoAlvoAdsPalavraEditRelComponent } from './conta-publico-alvo-ads-palavra-edit-rel.component';

describe('ContaPublicoAlvoAdsPalavraEditRelComponent', () => {
	let component: ContaPublicoAlvoAdsPalavraEditRelComponent;
	let fixture: ComponentFixture<ContaPublicoAlvoAdsPalavraEditRelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ContaPublicoAlvoAdsPalavraEditRelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContaPublicoAlvoAdsPalavraEditRelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
