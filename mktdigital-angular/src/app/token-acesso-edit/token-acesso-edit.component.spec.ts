import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAcessoEditComponent } from './token-acesso-edit.component';

describe('TokenAcessoEditComponent', () => {
  let component: TokenAcessoEditComponent;
  let fixture: ComponentFixture<TokenAcessoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenAcessoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAcessoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
