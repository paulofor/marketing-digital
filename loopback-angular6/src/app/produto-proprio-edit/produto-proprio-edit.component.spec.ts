import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoProprioEditComponent } from './produto-proprio-edit.component';

describe('ProdutoProprioEditComponent', () => {
	let component: ProdutoProprioEditComponent;
	let fixture: ComponentFixture<ProdutoProprioEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoProprioEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoProprioEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
