import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import ColorPalette from '../../assets/material-palette.json';
import { ColorMaterialModule } from 'ngx-color/material'; // <color-material></color-material>

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
    this.colorChange.emit(color);
  }
}
