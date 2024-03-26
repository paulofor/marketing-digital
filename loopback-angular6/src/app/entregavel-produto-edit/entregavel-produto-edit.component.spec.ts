import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoEditComponent } from './entregavel-produto-edit.component';

describe('EntregavelProdutoEditComponent', () => {
	let component: EntregavelProdutoEditComponent;
	let fixture: ComponentFixture<EntregavelProdutoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
