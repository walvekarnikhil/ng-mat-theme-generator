import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { ThemeService } from '../theme.service';
import { Theme } from '../theme-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  darkMode: boolean;
  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

  toggleDarkMode(slideToggleChangeEvent: MatSlideToggleChange) {
    this.themeService.setDarkMode(slideToggleChangeEvent.checked);
  }

  installTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
