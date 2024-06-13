import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerramentaIaListComponent } from './ferramenta-ia-list.component';

describe('FerramentaIaListComponent', () => {
	let component: FerramentaIaListComponent;
	let fixture: ComponentFixture<FerramentaIaListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FerramentaIaListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FerramentaIaListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
