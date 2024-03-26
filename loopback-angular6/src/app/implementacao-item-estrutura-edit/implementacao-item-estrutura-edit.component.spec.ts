import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementacaoItemEstruturaEditComponent } from './implementacao-item-estrutura-edit.component';

describe('ImplementacaoItemEstruturaEditComponent', () => {
	let component: ImplementacaoItemEstruturaEditComponent;
	let fixture: ComponentFixture<ImplementacaoItemEstruturaEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ImplementacaoItemEstruturaEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImplementacaoItemEstruturaEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
