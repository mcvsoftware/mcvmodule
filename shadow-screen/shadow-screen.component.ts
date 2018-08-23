import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shadow-screen',
  templateUrl: './shadow-screen.component.html',
  styleUrls: ['./shadow-screen.component.css']
})
export class ShadowScreenComponent implements OnInit {
  @Input()
  visible = false;

  constructor() { }

  ngOnInit() {
  }

}
