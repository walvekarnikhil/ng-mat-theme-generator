import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { NgxCopyPasteModule } from 'ngx-copypaste';
import { ProgressbarComponent } from './mat-widgets/progressbar/progressbar.component';
import { Angulartics2Module } from 'angulartics2';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PrebuiltThemeComponent } from './prebuilt-theme/prebuilt-theme.component';

const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
];
@NgModule({
  declarations: [
    MatWidgetsComponent,
    MatThemeComponent,
    PaletteComponent,
    ColorPaletteComponent,
    AutocompleteExampleComponent,
    ProgressbarComponent,
    PrebuiltThemeComponent,
    HomeComponent,
    AppComponent,
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
    MatMenuModule,
    MatGridListModule,
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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [MatThemeComponent],
})
export class AppModule { }
