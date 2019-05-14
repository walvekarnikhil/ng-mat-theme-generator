import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme-model';

const DEFAULT_THEME = {
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
} as Theme;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themeSubject: BehaviorSubject<Theme> = new BehaviorSubject(DEFAULT_THEME);
  public theme$ = this._themeSubject.asObservable();
  constructor() { }

  public setPrimaryColor(color: string) {
    const theme = {...this._themeSubject.getValue()};
    theme.primaryColor = color;
    this._themeSubject.next(theme);
  }

  public setColor(colorName: string, color: string, isText = false) {
    const theme = {...this._themeSubject.getValue()};
    theme[colorName] = color;
    this._themeSubject.next(theme);
  }
}
