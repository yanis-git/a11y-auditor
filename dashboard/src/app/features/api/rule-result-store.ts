import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { RuleSet, RuleStatus } from "./constant";

interface Store {
  ruleSets: RuleSet[];
}

@Injectable()
export class RuleResultStore extends ComponentStore<Store> {
  constructor(private _http: HttpClient) {
    super({ ruleSets: [] });
    this._http.get<RuleSet[]>(this.getUrl()).subscribe((results) => {
      this.setState({ ruleSets: results });
    });
  }

  get all$(): Observable<RuleSet[]> {
    return this.select((state) => state.ruleSets);
  }

  get errors$(): Observable<RuleSet[]> {
    return this.select((state) =>
      this.filterByStatus(state.ruleSets, RuleStatus.ERROR),
    );
  }

  get sucess$(): Observable<RuleSet[]> {
    return this.select((state) =>
      this.filterByStatus(state.ruleSets, RuleStatus.SUCCESS),
    );
  }

  private filterByStatus(ruleSets: RuleSet[], status: RuleStatus): RuleSet[] {
    return ruleSets.filter((rules) => rules.status === status);
  }

  private getUrl(): string {
    return `${environment.api.results.url}`;
  }
}
