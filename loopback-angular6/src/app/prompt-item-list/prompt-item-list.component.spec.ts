import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptItemListComponent } from './prompt-item-list.component';

describe('PromptItemListComponent', () => {
	let component: PromptItemListComponent;
	let fixture: ComponentFixture<PromptItemListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PromptItemListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PromptItemListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
