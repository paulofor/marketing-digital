import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCampanhaAdsTesteListComponent } from './modelo-campanha-ads-teste-list.component';

describe('ModeloCampanhaAdsTesteListComponent', () => {
  let component: ModeloCampanhaAdsTesteListComponent;
  let fixture: ComponentFixture<ModeloCampanhaAdsTesteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloCampanhaAdsTesteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloCampanhaAdsTesteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
