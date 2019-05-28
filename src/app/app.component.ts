import { Component, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { ThemeService } from './theme.service';
import { MatDialog, MatSlideToggleChange } from '@angular/material';
import { MatThemeComponent } from './mat-theme/mat-theme.component';
import { Theme } from './theme-model';
import { Subscription } from 'rxjs';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';
import { Angulartics2 } from 'angulartics2';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'mat-theme-generator';
  isLayoutNotSupported = false;
  dialogDismissed = false;
  private _isDarkModeSubscription: Subscription;
  private _layoutBreakpointSubscription: Subscription;

  constructor(public themeService: ThemeService,
    public dialog: MatDialog,
    private renderer: Renderer2,
    angulartics2GoogleGlobalSiteTag: Angulartics2GoogleGlobalSiteTag,
    breakpointObserver: BreakpointObserver) {

    angulartics2GoogleGlobalSiteTag.startTracking();

    // show layout warning for handset and tablet portrait layout.
    this._layoutBreakpointSubscription = breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      this.isLayoutNotSupported = result.matches;
    });

    this._isDarkModeSubscription = this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      if (isDarkMode) {
        this.renderer.addClass(document.body, 'darkMode');
      } else {
        this.renderer.removeClass(document.body, 'darkMode');
      }
    });
  }

  ngOnDestroy(): void {
    this._isDarkModeSubscription.unsubscribe();
    this._layoutBreakpointSubscription.unsubscribe();
  }

  /**
   * Split color to RGB values.
   */
  private separateRGB(color: string) {
    if (color.startsWith('#')) {
      const regEx = color.length === 4 ? /#([A-Za-z0-9])([A-Za-z0-9])([A-Za-z0-9])/ : /#([A-Za-z0-9]{2})([A-Za-z0-9]{2})([A-Za-z0-9]{2})/;
      const colorValues = color.match(regEx);
      const r = parseInt(colorValues[1], 16);
      const g = parseInt(colorValues[2], 16);
      const b = parseInt(colorValues[3], 16);
      return [r, g, b];
    }
    return null;
  }

  /**
   * Set variables for styling.
   */
  private setStyleVars(colorScheme: Theme) {
    for (const key in colorScheme) {
      if (colorScheme.hasOwnProperty(key)) {
        if (colorScheme[key] instanceof Object) {
          this.setStyleVars(colorScheme[key]);
        } else {
          document.body.style.setProperty(`--${key}`, colorScheme[key]);
          document.body.style.setProperty(`--${key}RGB`, this.separateRGB(colorScheme[key]).join(','));
        }

      }
    }
  }
  ngAfterViewInit() {
    this.themeService.theme$.subscribe((theme) => {
      this.setStyleVars(theme);
    });
  }

  exportTheme() {
    this.dialog.open(MatThemeComponent, {
      height: '80%',
      width: '80%'
    });
  }
}
