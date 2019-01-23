import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcv-circular-indicator',
  templateUrl: './mcv-circular-indicator.component.html',
  styleUrls: ['./mcv-circular-indicator.component.css']
})
export class McvCircularIndicatorComponent implements OnInit {
  @Input()
  public percent = 0;

  constructor() { }

  ngOnInit() {
  }

}
