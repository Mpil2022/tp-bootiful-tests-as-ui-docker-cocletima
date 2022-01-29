import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http : HttpClient) { }

  getCurrentNumber(): Observable<number> {
    return this._http.get<number>("http://localhost:8080/adder/current");
  }

  private static _options(headerList: object = {}) : any {
    return {headers: new HttpHeaders((Object.assign({'Content-Type': 'application/text'}, headerList)))};
  }

  addNumber(num: number) {
    let url = "http://localhost:8080/adder/?num="+num;
    return this._http.post<number>(url, num, HomeService._options()).subscribe()
  }
}
