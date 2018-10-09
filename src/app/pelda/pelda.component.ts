import { Component, OnInit } from '@angular/core';
import { NodeConnectService } from '../services/node-connect.service';

@Component({
  selector: 'app-pelda',
  templateUrl: './pelda.component.html',
  styleUrls: ['./pelda.component.css']
})
export class PeldaComponent implements OnInit {

  age: String;
  username: String;
  foglalkozas: String;

  constructor(private nodeConnectService: NodeConnectService) { 
  }

  callPost() {
    this.nodeConnectService.postAbout(this.age, this.username, this.foglalkozas)
    .then(result => {
      console.log(result);
    })
  }

  callGet() {

  }

  ngOnInit() {
  }

}
