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

  private _currentNumber: number
  private _form: FormGroup;

  constructor(private _homeService: HomeService) {
    this._currentNumber = {} as number
    this._form = new FormGroup({
      numberAdded: new FormControl()
    })
  }

  ngOnInit(): void {
    this._homeService.getCurrentNumber().subscribe({ next: (num: number) => this._currentNumber = num})
  }

  get currentNumber(): number {
    return this._currentNumber;
  }

  set currentNumber(value: number) {
    this._currentNumber = value;
  }

  get form(): FormGroup {
    return this._form;
  }

  set form(value: FormGroup) {
    this._form = value;
  }

  getCurrentNumber() {
    this._homeService.getCurrentNumber().subscribe({ next: (num: number) => this._currentNumber = num})
  }

  add(num: number) {
    this._homeService.addNumber(num)
    window.location.reload()
  }
}
