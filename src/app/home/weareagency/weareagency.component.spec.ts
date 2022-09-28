import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeareagencyComponent } from './weareagency.component';

describe('WeareagencyComponent', () => {
  let component: WeareagencyComponent;
  let fixture: ComponentFixture<WeareagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeareagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeareagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
