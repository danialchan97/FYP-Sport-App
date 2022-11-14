import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorPage } from './indoor.page';

describe('IndoorPage', () => {
  let component: IndoorPage;
  let fixture: ComponentFixture<IndoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
