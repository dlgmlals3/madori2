import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class CenterService {
 
    constructor(private http:Http) {
 
    }
 
    centerList() {
        var url = 'http://cms.innospeech.com/TDirect/api/busanCenterList.api';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }    
}