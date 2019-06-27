import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AllConstants } from "../constants/all-constants";
import { Observable } from 'rxjs-compat';

@Injectable()
export class StateService {

    constructor(private http: Http) { }

    public getStates() {
        const url = AllConstants.getStates;
        return this.http.get(url)
            .map((response: Response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.status;
                }
            })
            .catch((error: any) => Observable.throw(error || AllConstants.genericServerError));
    }
}