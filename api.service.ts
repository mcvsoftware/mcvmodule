import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { Md5 } from 'ts-md5/dist/md5';
import { AppService } from './app.service';

@Injectable()
export class ApiService {
  private configLoaded = false;
  private config: any = {};
  private configSubscription: Promise<any> = null;

  public user: any = {};

  private httpOptions = {
    headers: new HttpHeaders( {
      'token': this.getToken(),
      /*
      'Content-Type':  'multipart/form-data; boundary="xxxxasfaSFASDF"'
      ,
      'Authorization': 'cat' */
    } )
  };

  constructor(private http: HttpClient,
              private appService: AppService) {
  }

  getToken(): string {
    let token = '';
    const data = this.appService.userData;
    if (data && data.session) {
      token = data.session.token;
    }
    return token;
  }

  isConfigLoaded() {
    return this.config !== {};
  }

  getConfig() {
    return this.config;
  }

  loadConfig(): Promise<any> {
    if (!this.configLoaded && !this.configSubscription) {
      this.configSubscription = this.http.get('assets/config.json')
        .toPromise()
        .then(data => {
          this.configLoaded = true;
          this.config = data;
          localStorage.setItem('appSettings', JSON.stringify(data));
          console.log(data);
        });
    }

    return this.configSubscription;
  }

  refreshToken() {
    const token = this.getToken();
    console.log(token);
    this.httpOptions.headers = new HttpHeaders( {
      'token': token
    } );
  }

  Post(controller: string, data: any) {
    this.refreshToken();
    return this.http.post(this.config.api + controller, data, this.httpOptions);
  }

  PostGis(controller: string, data: any) {
    this.refreshToken();
    return this.http.post(this.config.api_gis + controller, data, this.httpOptions);
  }

  logUser(username: string, userpass: string /** MD5 */) {
    const pm = Md5.hashAsciiStr(userpass).toString().toUpperCase();
    const data = {
      w: btoa('logUser'),
      q: btoa('{ "u":"' + username + '", "p":"' + pm + '"}')
    };
    const subscription = this.Post('user.php', data);
    return subscription;
  }

}
