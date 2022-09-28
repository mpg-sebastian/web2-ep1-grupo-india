import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakealookComponent } from './takealook.component';

describe('TakealookComponent', () => {
  let component: TakealookComponent;
  let fixture: ComponentFixture<TakealookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakealookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakealookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
