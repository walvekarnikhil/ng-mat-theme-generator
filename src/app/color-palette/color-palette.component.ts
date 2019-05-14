import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import ColorPalette from '../../assets/material-palette.json';


@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnInit {
  colors = ColorPalette;
  @Output()
  colorChange = new EventEmitter<string>();

  @Input() value;
  constructor() { }

  ngOnInit() {
  }

  changeColor(color: string) {
    console.log(color);
    this.colorChange.emit(color);
  }
}
