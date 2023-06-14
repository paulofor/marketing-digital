import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhePalavraChaveParaCampanhaTesteComponent } from './escolhe-palavra-chave-para-campanha-teste.component';

describe('EscolhePalavraChaveParaCampanhaTesteComponent', () => {
  let component: EscolhePalavraChaveParaCampanhaTesteComponent;
  let fixture: ComponentFixture<EscolhePalavraChaveParaCampanhaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhePalavraChaveParaCampanhaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhePalavraChaveParaCampanhaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
