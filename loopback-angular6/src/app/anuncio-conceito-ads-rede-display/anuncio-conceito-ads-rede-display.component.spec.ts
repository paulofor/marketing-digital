import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioConceitoAdsRedeDisplayComponent } from './anuncio-conceito-ads-rede-display.component';

describe('AnuncioConceitoAdsRedeDisplayComponent', () => {
  let component: AnuncioConceitoAdsRedeDisplayComponent;
  let fixture: ComponentFixture<AnuncioConceitoAdsRedeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioConceitoAdsRedeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioConceitoAdsRedeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
