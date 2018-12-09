import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';





@Injectable()
export class PartiesService {
    constructor (private http: Http) {
        console.log('Parties Service');
    }

    getParties() {
        return this.http.get('../assets/parties.json').map(res => res.json());
    }
}
