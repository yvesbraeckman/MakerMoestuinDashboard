import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CardComponent } from './card/card.component';
import { DevicesComponent } from './devices/devices.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DevicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MakerFrontend';

  ngOnInit(): void {
    initFlowbite();
  }
}
