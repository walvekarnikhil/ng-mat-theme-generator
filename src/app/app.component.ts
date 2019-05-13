import { Component, AfterViewInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatDialog } from '@angular/material';
import { MatThemeComponent } from "./mat-theme/mat-theme.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'mat-theme-generator';

  constructor(public themeService: ThemeService,
    public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.themeService.theme$.subscribe((theme) => {
      for (const key in theme) {
        if (theme.hasOwnProperty(key)) {
          document.body.style.setProperty(`--${key}`, theme[key]);
        }
      }

      // document.body.style.setProperty(`--primaryColor`, theme.primaryColor);
      // document.body.style.setProperty(`--primaryLightColor`, theme.primaryLightColor);
      // document.body.style.setProperty(`--primary-dark-color`, theme.primaryDarkColor);
      // document.body.style.setProperty(`--accentColor`, theme.accentColor);
      // document.body.style.setProperty(`--accent-light-color`, theme.accentLightColor);
      // document.body.style.setProperty(`--accent-dark-color`, theme.accentDarkColor);
    });
  }

  changePrimaryColor(color: string) {
    this.themeService.setPrimaryColor(color);
  }

  changeColor(event) {
    console.log(event);
  }

  exportTheme() {
    this.dialog.open(MatThemeComponent, {
      height: '80%',
      width: '80%'
    });
  }
}
