import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { NextObserver } from 'rxjs/Observer';

@Injectable()
export class AppService {
  public aMessages: Array<string> = [];
  public alertCancelButton = false;
  public nLoading = 0;
  public shadowVisible = false;
  public loadingMessage = '';
  public alertResult = new Subject<alertResults>();
  public get userData() {
    const data64 = localStorage.getItem('mtcUserData');
    if (data64 === null) {
      return null;
    }

    const data = atob(data64);
    return JSON.parse(data);
  }

  public set userData(value) {
    const data64 = JSON.stringify(value);
    localStorage.setItem('mtcUserData',  btoa(data64) );
  }

  constructor() {
  }

  beginLoading(msg: string = '') {
    this.loadingMessage = msg;
    this.nLoading++;
  }

  endLoading() {
    this.loadingMessage = '';
    this.nLoading--;
    if (this.nLoading < 0) {
      this.nLoading = 0;
    }
  }

  alert(msg: string, nextObserver?: NextObserver<alertResults>, cancelbutton: boolean = false): Subscription {
    this.alertCancelButton = cancelbutton;
    this.aMessages.push(msg);
    if (!nextObserver) {
      return null;
    }
    return this.alertResult.subscribe(nextObserver);
  }

  closeAlert(nResult: number) {
    this.aMessages = [];
    this.alertResult.next(nResult);
    this.alertResult.observers = [];
  }

  leading(value: any, count: number = 2, character: string = '0') {
    let r = '';
    for (let i = 0; i < count; i++) { r += character; }
    r += value;
    r = r.substr(r.length - count);
    return r;
  }

  toHms(elapsed: number, unitOfTime: string = 'seconds') {
    let r = '';
    if (unitOfTime === 'seconds') {
      const hours = Math.floor(elapsed / 3600);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed - (hours * 3600) - (minutes * 60);
      r = this.leading(hours) + ':' + this.leading(minutes) + ':' + this.leading(seconds);
      return r;
    }
  }
}

export enum alertResults {
  OK = 1,
  CANCEL = 2,
}
