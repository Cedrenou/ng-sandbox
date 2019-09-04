import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {
  MatButtonModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { X01Component } from './components/x01/x01.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NameEditorComponent } from './components/reactive-forms/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/reactive-forms/profile-editor/profile-editor.component';
import { ApiConnectComponent } from './components/api-connect/api-connect.component';
import { DebugFormComponent } from './components/shared/debug-form/debug-form.component';
import { ExpansionPanelComponent } from './components/shared/expansion-panel/expansion-panel.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import {FormArrayService} from './service/form-array-service/form-array.service';
import {HttpClientModule} from '@angular/common/http';

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
    DebugFormComponent,
    ExpansionPanelComponent,
    FormArrayComponent
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
