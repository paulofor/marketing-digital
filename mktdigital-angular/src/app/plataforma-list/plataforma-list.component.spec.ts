import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaListComponent } from './plataforma-list.component';

describe('PlataformaListComponent', () => {
  let component: PlataformaListComponent;
  let fixture: ComponentFixture<PlataformaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
