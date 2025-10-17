import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BloembakServiceService } from '../bloembak-service.service';
import { Bloembak } from '../bloembak-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-devices',
  imports: [CardComponent, DatePipe],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']   // let op: styleUrls (met 's')
})
export class DevicesComponent {
  bloembakken: Bloembak[] = [];

  constructor(private service: BloembakServiceService) {}

  ngOnInit() {
    this.bloembakken = this.service.bloembakken;
    console.log(this.bloembakken)
  }
}
