import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() actionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(action: string): void {
    this.actionSelected.emit(action);
  }

}
