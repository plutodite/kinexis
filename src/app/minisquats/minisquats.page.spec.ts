import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinisquatsPage } from './minisquats.page';

describe('MinisquatsPage', () => {
  let component: MinisquatsPage;
  let fixture: ComponentFixture<MinisquatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisquatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
