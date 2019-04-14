import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionHistoryPage } from './mission-vision-history.page';

describe('MissionVisionHistoryPage', () => {
  let component: MissionVisionHistoryPage;
  let fixture: ComponentFixture<MissionVisionHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionVisionHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVisionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
