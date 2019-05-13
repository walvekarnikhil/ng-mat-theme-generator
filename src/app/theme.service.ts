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
  primaryColorText: '#ffffffde',
  primaryLightColorText: '#000000de',
  primaryDarkColorText: '#ffffffde',
  accentColorText: '#ffffffde',
  accentLightColorText: '#000000de',
  accentDarkColorText: '#ffffffde',
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
    theme[colorName + isText ? 'Text' : ''] = color;
    this._themeSubject.next(theme);
  }
}
