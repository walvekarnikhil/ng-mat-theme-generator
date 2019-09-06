import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import PREBUILT_THEMES from './prebuilt-themes';
import { Theme } from '../theme-model';

@Component({
  selector: 'app-prebuilt-theme',
  templateUrl: './prebuilt-theme.component.html',
  styleUrls: ['./prebuilt-theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PrebuiltThemeComponent implements OnInit {
  themes: Theme[] = PREBUILT_THEMES;

  @Input()
  currentTheme: Theme;

  @Output()
  change = new EventEmitter<Theme>();

  constructor() { }

  ngOnInit() {
  }

  changeTheme(theme) {
    this.change.emit(theme);
  }

}
