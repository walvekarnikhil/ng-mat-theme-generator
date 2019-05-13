import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  PALETTE_COLORS = [
    {
      title: 'Primary',
      property: 'primaryColor',
      textProperty: 'primaryColorText',
    },
    {
      title: 'Primary Light',
      property: 'primaryLightColor',
      textProperty: 'primaryLightColorText',
    },
    {
      title: 'Primary Dark',
      property: 'primaryDarkColor',
      textProperty: 'primaryDarkColorText',
    },
    {
      title: 'Accent',
      property: 'accentColor',
      textProperty: 'accentColorText',
    },
    {
      title: 'Accent Light',
      property: 'accentLightColor',
      textProperty: 'accentLightColorText',
    },
    {
      title: 'Accent Dark',
      property: 'accentDarkColor',
      textProperty: 'accentDarkColorText',
    }
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

  changeColor(colorType: string, color: string) {
    this.themeService.setColor(colorType, color);
  }
}
