import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ // Add the missing @NgModule decorator
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ], // Remove NgModule from imports
  providers: [provideRouter(routes), provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { // Define a class for the NgModule
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};