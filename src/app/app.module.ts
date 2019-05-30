import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatCheckboxModule, MatRadioModule, MatListModule, MatButtonModule,
  MatIconModule, MatChipsModule, MatDialogModule, MatProgressBarModule,
  MatDividerModule, MatCardModule, MatFormFieldModule, MatAutocompleteModule,
  MatInputModule, MatSlideToggleModule, MatExpansionModule, MatBadgeModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatWidgetsComponent } from './mat-widgets/mat-widgets.component';
import { ThemeService } from './theme.service';
import { MatThemeComponent } from './mat-theme/mat-theme.component';
import { PaletteComponent } from './palatte/palette.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorPickerModule } from 'narik-angular-color-picker';
import { AutocompleteExampleComponent } from './mat-widgets/autocomplete-example/autocomplete-example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import {NgxCopyPasteModule} from 'ngx-copypaste';
import { ProgressbarComponent } from './mat-widgets/progressbar/progressbar.component';
import { Angulartics2Module } from 'angulartics2';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MatWidgetsComponent,
    MatThemeComponent,
    PaletteComponent,
    ColorPaletteComponent,
    AutocompleteExampleComponent,
    ProgressbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
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
    MatInputModule,
    MatSlideToggleModule,
    PrismModule,
    NgxCopyPasteModule,
    MatExpansionModule,
    MatBadgeModule,
    RouterModule.forRoot(ROUTES),
    Angulartics2Module.forRoot(),
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [MatThemeComponent],
})
export class AppModule { }
