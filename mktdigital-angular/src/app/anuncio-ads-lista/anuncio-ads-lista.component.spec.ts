import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioAdsListaComponent } from './anuncio-ads-lista.component';

describe('AnuncioAdsListaComponent', () => {
  let component: AnuncioAdsListaComponent;
  let fixture: ComponentFixture<AnuncioAdsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioAdsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioAdsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
