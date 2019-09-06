import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme-model';

const DEFAULT_THEME = {
  palette: {
    primaryColor: '#1976d2',
    primaryLightColor: '#63a4ff',
    primaryDarkColor: '#004ba0',
    accentColor: '#26a69a',
    accentLightColor: '#64d8cb',
    accentDarkColor: '#00766c',
    primaryColorText: '#ffffff',
    primaryLightColorText: '#000000',
    primaryDarkColorText: '#ffffff',
    accentColorText: '#ffffff',
    accentLightColorText: '#000000',
    accentDarkColorText: '#ffffff',
  }
} as Theme;

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
