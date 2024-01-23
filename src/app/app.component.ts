import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FrameBaseComponent } from './frame/frame-base/frame-base.component';
import { GateComponent } from './entrance/gate/gate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FrameBaseComponent, GateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ordo_operandi';
  gateIsShut: boolean = true;

  openGate() {
    this.gateIsShut = !this.gateIsShut;
  }
}
