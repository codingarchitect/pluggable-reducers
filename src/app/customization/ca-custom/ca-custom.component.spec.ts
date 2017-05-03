import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCustomComponent } from './ca-custom.component';

describe('CaCustomComponent', () => {
  let component: CaCustomComponent;
  let fixture: ComponentFixture<CaCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
