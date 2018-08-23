import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public appService: AppService,
              public apiService: ApiService) { }

  ngOnInit() {
  }

}
