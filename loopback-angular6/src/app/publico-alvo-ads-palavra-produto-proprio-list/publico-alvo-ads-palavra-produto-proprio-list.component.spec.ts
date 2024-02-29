import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoAlvoAdsPalavraProdutoProprioListComponent } from './publico-alvo-ads-palavra-produto-proprio-list.component';

describe('PublicoAlvoAdsPalavraProdutoProprioListComponent', () => {
	let component: PublicoAlvoAdsPalavraProdutoProprioListComponent;
	let fixture: ComponentFixture<PublicoAlvoAdsPalavraProdutoProprioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PublicoAlvoAdsPalavraProdutoProprioListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PublicoAlvoAdsPalavraProdutoProprioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
