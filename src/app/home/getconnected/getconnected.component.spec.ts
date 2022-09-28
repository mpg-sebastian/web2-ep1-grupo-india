import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconnectedComponent } from './getconnected.component';

describe('GetconnectedComponent', () => {
  let component: GetconnectedComponent;
  let fixture: ComponentFixture<GetconnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetconnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
