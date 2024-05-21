import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptItemListCriaItemConteudoComponent } from './prompt-item-list-cria-item-conteudo.component';

describe('PromptItemListCriaItemConteudoComponent', () => {
	let component: PromptItemListCriaItemConteudoComponent;
	let fixture: ComponentFixture<PromptItemListCriaItemConteudoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PromptItemListCriaItemConteudoComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PromptItemListCriaItemConteudoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
