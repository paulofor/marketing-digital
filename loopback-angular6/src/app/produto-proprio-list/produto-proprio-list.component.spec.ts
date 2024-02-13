import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoProprioListComponent } from './produto-proprio-list.component';

describe('ProdutoProprioListComponent', () => {
	let component: ProdutoProprioListComponent;
	let fixture: ComponentFixture<ProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
