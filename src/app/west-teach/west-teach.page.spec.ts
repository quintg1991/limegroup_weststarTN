import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestTeachPage } from './west-teach.page';

describe('WestTeachPage', () => {
  let component: WestTeachPage;
  let fixture: ComponentFixture<WestTeachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestTeachPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestTeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
