import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiaPalavraChaveListComponent } from './ideia-palavra-chave-list.component';

describe('IdeiaPalavraChaveListComponent', () => {
  let component: IdeiaPalavraChaveListComponent;
  let fixture: ComponentFixture<IdeiaPalavraChaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeiaPalavraChaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiaPalavraChaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
