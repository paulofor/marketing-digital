import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoProdutoKiwifyEditComponent } from './conteudo-produto-kiwify-edit.component';

describe('ConteudoProdutoKiwifyEditComponent', () => {
	let component: ConteudoProdutoKiwifyEditComponent;
	let fixture: ComponentFixture<ConteudoProdutoKiwifyEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ConteudoProdutoKiwifyEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ConteudoProdutoKiwifyEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
