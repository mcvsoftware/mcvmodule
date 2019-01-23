import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mcv-listbox',
  templateUrl: './mcv-listbox.component.html',
  styleUrls: ['./mcv-listbox.component.css']
})
export class McvListboxComponent implements OnInit {
  @Input()
  public aItems: Array<any> = [];

  @Output()
  selectionChange: EventEmitter<any> = new EventEmitter();

  public selected: any = null;

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(item) {
    this.selected = item;
    this.selectionChange.emit(item);
  }

}
