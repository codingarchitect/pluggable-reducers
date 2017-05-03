import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaStandardComponent } from './ca-standard.component';

describe('CaStandardComponent', () => {
  let component: CaStandardComponent;
  let fixture: ComponentFixture<CaStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
