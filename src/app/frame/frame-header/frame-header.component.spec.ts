import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameHeaderComponent } from './frame-header.component';

describe('FrameHeaderComponent', () => {
  let component: FrameHeaderComponent;
  let fixture: ComponentFixture<FrameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
