/**
 * MCV
 */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppService } from './app.service';
import { MessagesComponent } from './messages/messages.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import 'hammerjs';
import { LoadingComponent } from './loading/loading.component';
import { ShadowScreenComponent } from './shadow-screen/shadow-screen.component';

@NgModule({
  imports: [
    AngularFontAwesomeModule,
    HttpClientModule,
    CommonModule,
    NgxDatatableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  declarations: [MessagesComponent, LoadingComponent, ShadowScreenComponent],
  providers: [
    HttpClient,
    ApiService,
    AppService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ApiService], multi: true },
  ],
  exports: [
    AngularFontAwesomeModule,
    MessagesComponent,
    LoadingComponent,
    ShadowScreenComponent,
    NgxDatatableModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class McvModule { }

export function init_app(apiService: ApiService) {
    return () => apiService.loadConfig();
}
