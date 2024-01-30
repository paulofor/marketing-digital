import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoAlvoAdsPalavraEditComponent } from './publico-alvo-ads-palavra-edit.component';

describe('PublicoAlvoAdsPalavraEditComponent', () => {
	let component: PublicoAlvoAdsPalavraEditComponent;
	let fixture: ComponentFixture<PublicoAlvoAdsPalavraEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PublicoAlvoAdsPalavraEditComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PublicoAlvoAdsPalavraEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
