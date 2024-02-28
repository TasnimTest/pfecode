import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  //hethi tji maktouba par defauts
  selector: 'app-root',
  standalone: true,
 
  //na3mlou importation mta3 les pages eli 3ana
  imports: [
    CommonModule, 
    RouterOutlet,
    LoginComponent,
    RouterModule,
    LayoutComponent,
    DashboardComponent
  ],
  //lahne n7otou lien mta3 app component html et css
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//hethi tji maktouba par defauts
export class AppComponent {
  title = 'pfe-app';
}
