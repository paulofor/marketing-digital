import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConteudoProdutoEditComponent } from './item-conteudo-produto-edit.component';

describe('ItemConteudoProdutoEditComponent', () => {
	let component: ItemConteudoProdutoEditComponent;
	let fixture: ComponentFixture<ItemConteudoProdutoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ItemConteudoProdutoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemConteudoProdutoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
