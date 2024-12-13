import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpvidscanPage } from './upvidscan.page';

describe('UpvidscanPage', () => {
  let component: UpvidscanPage;
  let fixture: ComponentFixture<UpvidscanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvidscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
