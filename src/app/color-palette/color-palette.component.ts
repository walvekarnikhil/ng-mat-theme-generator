import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Output()
  colorChange = new EventEmitter<string>();

  @Input() value;
  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    this.colorChange.emit(color);
  }
}
