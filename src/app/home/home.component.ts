import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from '../theme.service';

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
}
