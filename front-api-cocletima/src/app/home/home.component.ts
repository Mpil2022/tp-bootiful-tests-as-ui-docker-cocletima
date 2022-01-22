import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HomeService} from "../services/home.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _actualNumber: number
  private _form: FormGroup;

  constructor(private _homeService: HomeService) {
    this._actualNumber = {} as number
    this._form = new FormGroup({
      numberAdded: new FormControl()
    })
  }

  ngOnInit(): void {
    this._homeService.getActualNumber().subscribe({ next: (num: number) => this._actualNumber = num})
  }

  get actualNumber(): number {
    return this._actualNumber;
  }

  set actualNumber(value: number) {
    this._actualNumber = value;
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  getActualNumber() {
    this._homeService.getActualNumber().subscribe({ next: (num: number) => this._actualNumber = num})
  }

  add(num: number) {
    this._homeService.addNumber(num)
    window.location.reload()
  }
}
