import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatCheckboxModule, MatListModule, MatButtonModule,
  MatIconModule, MatChipsModule, MatDialogModule, MatProgressBarModule, MatDividerModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatWidgetsComponent } from './mat-widgets/mat-widgets.component';
import { ThemeService } from './theme.service';
import { MatThemeComponent } from './mat-theme/mat-theme.component';
import { PaletteComponent } from './palatte/palette.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorMaterialModule } from 'ngx-color/material';

@NgModule({
  declarations: [
    AppComponent,
    MatWidgetsComponent,
    MatThemeComponent,
    PaletteComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [MatThemeComponent]
})
export class AppModule { }
