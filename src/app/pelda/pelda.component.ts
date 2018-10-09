import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelda',
  templateUrl: './pelda.component.html',
  styleUrls: ['./pelda.component.css']
})
export class PeldaComponent implements OnInit {

  peldatext: String;

  constructor() { 
    this.peldatext = "Ez egy példa";
  }

  ngOnInit() {
  }

}
