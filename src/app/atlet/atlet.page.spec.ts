import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtletPage } from './atlet.page';

describe('AtletPage', () => {
  let component: AtletPage;
  let fixture: ComponentFixture<AtletPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
