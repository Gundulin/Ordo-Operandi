import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameBaseComponent } from './frame-base.component';

describe('FrameBaseComponent', () => {
  let component: FrameBaseComponent;
  let fixture: ComponentFixture<FrameBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
