import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroudPage } from './croud.page';

describe('CroudPage', () => {
  let component: CroudPage;
  let fixture: ComponentFixture<CroudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
