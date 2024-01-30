import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoAlvoAdsPalavraListComponent } from './publico-alvo-ads-palavra-list.component';

describe('PublicoAlvoAdsPalavraListComponent', () => {
	let component: PublicoAlvoAdsPalavraListComponent;
	let fixture: ComponentFixture<PublicoAlvoAdsPalavraListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PublicoAlvoAdsPalavraListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PublicoAlvoAdsPalavraListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
