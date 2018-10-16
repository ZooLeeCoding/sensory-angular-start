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

  response: String;

  constructor(private nodeConnectService: NodeConnectService) { 
  }

  callPost() {
    this.nodeConnectService.postAbout(this.age, this.username, this.foglalkozas)
    .subscribe(result => {
      this.response = JSON.parse(result._body).message;
    }, error => {
      console.log("hiba tortent");
      this.response = JSON.parse(error._body).message;
    })
  }

  callGet() {
    this.nodeConnectService.getAbout()
    .subscribe(result => {
      this.response = JSON.parse(result._body).message;
    }, error => {
      console.log("hiba tortent");
      this.response = JSON.parse(error._body).message;
    })
  }

  ngOnInit() {
  }

}
