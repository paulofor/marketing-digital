import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAcessoListComponent } from './token-acesso-list.component';

describe('TokenAcessoListComponent', () => {
  let component: TokenAcessoListComponent;
  let fixture: ComponentFixture<TokenAcessoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenAcessoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAcessoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
