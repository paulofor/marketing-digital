import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoParaProdutoEditComponent } from './artigo-para-produto-edit.component';

describe('ArtigoParaProdutoEditComponent', () => {
	let component: ArtigoParaProdutoEditComponent;
	let fixture: ComponentFixture<ArtigoParaProdutoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ArtigoParaProdutoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArtigoParaProdutoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
