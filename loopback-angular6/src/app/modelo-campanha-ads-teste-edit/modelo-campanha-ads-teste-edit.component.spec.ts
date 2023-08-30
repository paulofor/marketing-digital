import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCampanhaAdsTesteEditComponent } from './modelo-campanha-ads-teste-edit.component';

describe('ModeloCampanhaAdsTesteEditComponent', () => {
  let component: ModeloCampanhaAdsTesteEditComponent;
  let fixture: ComponentFixture<ModeloCampanhaAdsTesteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloCampanhaAdsTesteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloCampanhaAdsTesteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
