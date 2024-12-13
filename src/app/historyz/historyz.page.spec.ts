import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryzPage } from './historyz.page';

describe('HistoryzPage', () => {
  let component: HistoryzPage;
  let fixture: ComponentFixture<HistoryzPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
