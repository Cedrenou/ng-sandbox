import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

import {X01Component} from './components/x01/x01.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {NameEditorComponent} from './components/reactive-forms/name-editor/name-editor.component';
import {ProfileEditorComponent} from './components/reactive-forms/profile-editor/profile-editor.component';
import {ApiConnectComponent} from './components/api-connect/api-connect.component';
import {DebugFormComponent} from './components/shared/debug-form/debug-form.component';
import {ExpansionPanelComponent} from './components/shared/expansion-panel/expansion-panel.component';
import {FormArrayComponent} from './components/form-array/form-array.component';
import {HttpClientModule} from '@angular/common/http';
import {ConsoleLogComponent} from './components/console-log/console-log.component';
import {DartRankingComponent} from './components/dart-ranking/dart-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    X01Component,
    ReactiveFormsComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ApiConnectComponent,
    DartRankingComponent,
    DebugFormComponent,
    ExpansionPanelComponent,
    FormArrayComponent,
    ConsoleLogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatRadioModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
