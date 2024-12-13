import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttwalkPage } from './httwalk.page';

describe('HttwalkPage', () => {
  let component: HttwalkPage;
  let fixture: ComponentFixture<HttwalkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HttwalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
