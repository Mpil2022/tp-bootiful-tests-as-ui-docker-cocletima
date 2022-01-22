import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http : HttpClient) { }

  getActualNumber(): Observable<number> {
    return this._http.get<number>("http://localhost:8080/adder/current");
  }
}
