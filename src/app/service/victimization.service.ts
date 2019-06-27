import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AllConstants } from "../constants/all-constants";
import { Observable } from 'rxjs-compat';

@Injectable()
export class VictimizationService {

    constructor(private http: Http) { }

    public getVictimizations = () => this.getOfApi();

    public getVictimizationsByState = (idState: number) => this.getOfApi(idState);

    public getOfApi(param?: number) {
        let url = "";
        if (param) {
            url = AllConstants.getVictimizationsByState.replace('{idState}', "" + param);
        }
        else {
            url = AllConstants.getVictimizations;
        }
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