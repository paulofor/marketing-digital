import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptItemEditComponent } from './prompt-item-edit.component';

describe('PromptItemEditComponent', () => {
	let component: PromptItemEditComponent;
	let fixture: ComponentFixture<PromptItemEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PromptItemEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PromptItemEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
