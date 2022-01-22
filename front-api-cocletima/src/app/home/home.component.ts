import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomeService} from "../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _acutalNumber: number

  constructor(private _homeService: HomeService) {
    this._acutalNumber = {} as number
  }

  ngOnInit(): void {
    this._homeService.getActualNumber().subscribe({ next: (num: number) => this._acutalNumber = num})
  }

  get acutalNumber(): number {
    return this._acutalNumber;
  }

  set acutalNumber(value: number) {
    this._acutalNumber = value;
  }

}
