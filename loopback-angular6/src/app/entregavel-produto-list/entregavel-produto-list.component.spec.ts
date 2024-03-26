import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregavelProdutoListComponent } from './entregavel-produto-list.component';

describe('EntregavelProdutoListComponent', () => {
	let component: EntregavelProdutoListComponent;
	let fixture: ComponentFixture<EntregavelProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EntregavelProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntregavelProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
