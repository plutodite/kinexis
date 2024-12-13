import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorievPage } from './historiev.page';

describe('HistorievPage', () => {
  let component: HistorievPage;
  let fixture: ComponentFixture<HistorievPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorievPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
