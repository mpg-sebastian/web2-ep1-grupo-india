import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatclientsComponent } from './whatclients.component';

describe('WhatclientsComponent', () => {
  let component: WhatclientsComponent;
  let fixture: ComponentFixture<WhatclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatclientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
