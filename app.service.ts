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
    const data = localStorage.getItem('userData');
    return JSON.parse(data);
  }
  public set userData(value) {
    localStorage.setItem('userData', JSON.stringify(value));
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
}

export enum alertResults {
  OK = 1,
  CANCEL = 2,
}
