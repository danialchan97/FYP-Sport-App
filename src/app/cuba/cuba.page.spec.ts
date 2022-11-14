import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubaPage } from './cuba.page';

describe('CubaPage', () => {
  let component: CubaPage;
  let fixture: ComponentFixture<CubaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
