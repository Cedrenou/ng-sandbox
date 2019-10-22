import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {X01Component} from './components/x01/x01.component';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {FormArrayComponent} from './components/form-array/form-array.component';
import {ApiConnectComponent} from './components/api-connect/api-connect.component';
import {ConsoleLogComponent} from './components/console-log/console-log.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'x01', component: X01Component},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'form-array', component: FormArrayComponent},
  {path: 'api-connect', component: ApiConnectComponent},
  {path: 'console-log', component: ConsoleLogComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
