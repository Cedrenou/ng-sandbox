import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {X01Component} from './components/x01/x01.component';
import {ReactiveFormsComponent} from './components/reactive-forms/reactive-forms.component';
import {FormArrayComponent} from './components/form-array/form-array.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'x01', component: X01Component},
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'form-array', component: FormArrayComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
