import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme-model';
import PREBUILT_THEMES from './prebuilt-theme/prebuilt-themes';

const DEFAULT_THEME = PREBUILT_THEMES[0];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themeSubject: BehaviorSubject<Theme> = new BehaviorSubject(DEFAULT_THEME);
  public theme$ = this._themeSubject.asObservable();

  private _isDarkModeSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isDarkMode$ = this._isDarkModeSubject.asObservable();

  constructor() { }

  /**
   * Set the theme, can be used to restore old theme or pre-built themes.
   * @param theme {Theme}
   */
  public setTheme(theme: Theme) {
    this._isDarkModeSubject.next(theme.isDark);
    this._themeSubject.next(theme);
  }

  /**
   * Customize particular color in the theme.
   * @param colorName {string} Name of the color example: primary, primaryLight, accent etc.
   * @param color {string} Color hex value
   * @param isText {boolean} Is it text color. Default false.
   */
  public setColor(colorName: string, color: string, isText = false) {
    const theme = {...this._themeSubject.getValue()};
    theme.palette[colorName] = color;
    theme.isPreBuilt = false;
    this._themeSubject.next(theme);
  }

  /**
   * Set Dark mode for the preview.
   * @param isDarkMode {boolean}
   */
  setDarkMode(isDarkMode: boolean): void {
    this._isDarkModeSubject.next(isDarkMode);
  }
}
