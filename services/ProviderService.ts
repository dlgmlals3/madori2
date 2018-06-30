import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { URIConstant } from '../constants/URIConstant';

 
@Injectable()
export class ProviderService {
 
    constructor(private http:Http) {
        
    }
 
    getProviderList() {
        //var url = URIConstant.PROVIDER_LIST_REQUEST;
        //console.log("url : " + url);
        var url = URIConstant.PROVIDER_LIST_URL;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }    
}