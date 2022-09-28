import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetakeComponent } from './wetake.component';

describe('WetakeComponent', () => {
  let component: WetakeComponent;
  let fixture: ComponentFixture<WetakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WetakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WetakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
