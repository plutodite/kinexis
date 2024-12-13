import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HkdrillsPage } from './hkdrills.page';

describe('HkdrillsPage', () => {
  let component: HkdrillsPage;
  let fixture: ComponentFixture<HkdrillsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HkdrillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
