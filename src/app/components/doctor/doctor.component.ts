import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/models/Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  specialites: string[];
  doctorlist: Doctor[];
  selected: string;
  showres: boolean;
  resdoc: Doctor;
  x: number;
  constructor() {
  }

  ngOnInit() {
    this.specialites = ['', 'spec1', 'spec2', 'spec3'];
    this.doctorlist = [{'nom': 'doc1' , 'specialite': 'spec1' , 'disponibilite' : true},
                       {'nom': 'doc2' , 'specialite': 'spec1' , 'disponibilite' : false},
                       {'nom': 'doc3' , 'specialite': 'spec2' , 'disponibilite' : true}];
    this.selected = '';
    this.showres = false;
    this.resdoc = new Doctor();
  }

  selectedDoc(pos) {
    console.log(this.selected);
    this.selected = pos;
  }

  toggleres(doc) {
    this.showres = !this.showres;
    this.resdoc = doc;
  }

  confirmerdv() {

    this.x = this.doctorlist.indexOf(this.resdoc);
    this.resdoc.disponibilite = false ;
    this.doctorlist[this.x] = this.resdoc;
    this.showres = !this.showres;
  }

}
