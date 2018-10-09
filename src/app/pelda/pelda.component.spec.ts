/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeldaComponent } from './pelda.component';

describe('PeldaComponent', () => {
  let component: PeldaComponent;
  let fixture: ComponentFixture<PeldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeldaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
