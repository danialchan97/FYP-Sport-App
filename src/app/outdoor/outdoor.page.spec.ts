import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorPage } from './outdoor.page';

describe('OutdoorPage', () => {
  let component: OutdoorPage;
  let fixture: ComponentFixture<OutdoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
