import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSportCenterPage } from './view-sport-center.page';

describe('ViewSportCenterPage', () => {
  let component: ViewSportCenterPage;
  let fixture: ComponentFixture<ViewSportCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSportCenterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSportCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
