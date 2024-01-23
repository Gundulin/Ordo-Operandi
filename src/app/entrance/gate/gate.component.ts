import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gate',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './gate.component.html',
  styleUrl: './gate.component.css'
})
export class GateComponent {

  @Output()
  press: EventEmitter<any> = new EventEmitter();

  buttonLabel: string = 'Enter Ordo Operandi';

  onPress() {
    this.press.emit();
  }

}
