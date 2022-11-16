import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes : Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { 
      enabled: environment.production,
      registrationStrategy: "registerImmediately"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
