import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RuleResult} from '../../../../../../auditor/src/rule/results/rule-result';
import {environment} from '../../../environments/environment';


@Injectable()
export class ReportService {
    constructor(private _http: HttpClient) { }

    public fetchReport(): Observable<RuleResult[]> {
        return this._http.get<RuleResult[]>(this.getUrl());
    }

    private getUrl(): string {
        return `${environment.api.results.url}`;
    }
}
