import { Component, OnInit } from '@angular/core';
import { Party } from 'src/models/Party';
import { PartiesService } from 'src/app/services/PartiesService';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
  providers: [PartiesService]
})
export class PartiesComponent implements OnInit {
  listParties: Party[];
  constructor(private parties: PartiesService) {
    this.listParties = [];
  }

  ngOnInit() {
    this.parties.getParties().subscribe(data => this.listParties = data);
  }

}
