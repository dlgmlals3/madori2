import { HTTP } from '@ionic-native/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CenterService } from '../../services/CenterService';

@Component({
  selector: 'page-angular',
  templateUrl: 'angular.html'
})
export class AngularPage {

  private resultObj: Object;
  private centers: Array<any>;
  private result_code: String;
  private result_msg: String;
  private total: number;

  constructor(public navCtrl: NavController, private centerService: CenterService) {
	
  }

  centerList() {

    console.log("centerList call");
    
      this.centerService.centerList().subscribe(
        data => {
            this.centers = data.result_list;

             
            console.log(data);
            console.log(this.centers);
        },
        err => {
            console.log(err);
        },
        () => console.log('center Search Complete')
    );
  }
  

}
