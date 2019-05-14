import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatCheckboxModule, MatListModule, MatButtonModule,
  MatIconModule, MatChipsModule, MatDialogModule, MatProgressBarModule,
  MatDividerModule, MatCardModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatWidgetsComponent } from './mat-widgets/mat-widgets.component';
import { ThemeService } from './theme.service';
import { MatThemeComponent } from './mat-theme/mat-theme.component';
import { PaletteComponent } from './palatte/palette.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorPickerModule } from 'narik-angular-color-picker';
import { AutocompleteExampleComponent } from './mat-widgets/autocomplete-example/autocomplete-example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MatWidgetsComponent,
    MatThemeComponent,
    PaletteComponent,
    ColorPaletteComponent,
    AutocompleteExampleComponent
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
    ColorPickerModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [MatThemeComponent]
})
export class AppModule { }
