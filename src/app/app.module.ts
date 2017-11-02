import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent} from './app.first.component'
import { SecondComponent} from './app.second.component'
import { FooterComponent} from './third.component'
import { FeaturesComponent} from './features.component'
import {ContactComponent} from './contact.component'


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FooterComponent,
    FeaturesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'features',component:FeaturesComponent},
      {path:'home',component:SecondComponent},
      {path:'contact',component:ContactComponent},
      {path:'', pathMatch:'prefix', redirectTo:'home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
