import { Component } from '@angular/core';
import { FrameFooterComponent } from '../frame-footer/frame-footer.component';
import { FrameHeaderComponent } from '../frame-header/frame-header.component';

@Component({
  selector: 'app-frame-base',
  standalone: true,
  imports: [FrameFooterComponent, FrameHeaderComponent],
  templateUrl: './frame-base.component.html',
  styleUrl: './frame-base.component.css'
})
export class FrameBaseComponent {

}
