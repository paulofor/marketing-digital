import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptImagemConteudoEditComponent } from './prompt-imagem-conteudo-edit.component';

describe('PromptImagemConteudoEditComponent', () => {
	let component: PromptImagemConteudoEditComponent;
	let fixture: ComponentFixture<PromptImagemConteudoEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PromptImagemConteudoEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PromptImagemConteudoEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
