import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { X01Component } from './components/x01/x01.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NameEditorComponent } from './components/reactive-forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/reactive-forms/profile-editor/profile-editor.component';
import { ApiConnectComponent } from './components/api-connect/api-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    X01Component,
    ReactiveFormsComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ApiConnectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
