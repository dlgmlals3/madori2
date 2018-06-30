import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProviderService } from '../../services/ProviderService';
import { URIConstant } from '../../constants/URIConstant';


@Component({
  selector: 'page-providerList',
  templateUrl: 'providerList.html'
})
export class ProviderListPage {

  private providerList = Array<any>();

  constructor( private providerService: ProviderService) {
    
  }

  getProviderList() {

     
     var url = URIConstant.PROVIDER_LIST_URL;
     console.log("url : " + url);
    
      this.providerService.getProviderList().subscribe(
        data => {
            this.providerList = data.result_list;

             
            console.log(data);
            console.log(this.providerList);
        },
        err => {
            console.log(err);
        },
        () => console.log('provider Search Complete')
    );
  }
    

}
