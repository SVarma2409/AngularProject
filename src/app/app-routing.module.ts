
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LOGComponent } from './home/log/log.component';
import { SigninComponent } from './home/signin/signin.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path: 'home',children:[{
    path: 'log', component:LOGComponent
  },{path: 'log',children:[{
    path: 'signIn',component:SigninComponent},{path: 'mainpage',component:MainPageComponent},
    {path: 'signIn',children:[{
      path: 'home/log',component:LOGComponent
    }]},
  ]}]}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
