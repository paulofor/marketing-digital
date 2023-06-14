import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheAnuncioParaCampanhaTesteComponent } from './escolhe-anuncio-para-campanha-teste.component';

describe('EscolheAnuncioParaCampanhaTesteComponent', () => {
  let component: EscolheAnuncioParaCampanhaTesteComponent;
  let fixture: ComponentFixture<EscolheAnuncioParaCampanhaTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolheAnuncioParaCampanhaTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheAnuncioParaCampanhaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
