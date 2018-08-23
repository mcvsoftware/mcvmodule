import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public appService: AppService,
              public apiService: ApiService) { }

  ngOnInit() {
  }

}
