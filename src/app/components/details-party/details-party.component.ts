import { Component, OnInit, Input } from '@angular/core';
import { Party } from 'src/models/Party';

@Component({
  selector: 'app-details-party',
  templateUrl: './details-party.component.html',
  styleUrls: ['./details-party.component.css']
})
export class DetailsPartyComponent implements OnInit {
  @Input() party: Party;
  show: boolean;
  disponible: number;
  res: number;
  constructor() {
   }

  ngOnInit() {
    this.show = false;
    this.disponible = this.party.nb_place;
    this.res = 0;
  }

  toggelShow() {
    this.show = !this.show;
  }

  reserver() {
    this.disponible = this.disponible - this.res;
  }

}
