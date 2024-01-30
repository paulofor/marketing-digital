import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoParaProdutoListComponent } from './artigo-para-produto-list.component';

describe('ArtigoParaProdutoListComponent', () => {
	let component: ArtigoParaProdutoListComponent;
	let fixture: ComponentFixture<ArtigoParaProdutoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ArtigoParaProdutoListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ArtigoParaProdutoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
