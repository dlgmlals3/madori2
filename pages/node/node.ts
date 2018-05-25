import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Injectable } from '@angular/core';
//import { Http, Response} from '@angular/http';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-node',
  templateUrl: 'node.html'
})
export class NodePage {
  private http: HttpClient;
  constructor(public navCtrl: NavController) {
  	console.log('Hello Service Provider');
	//this.http.post("https://218.38.52.30:8282", "555","555");
        this.http.get('https://218.38.52.30:8282');
  }
}
