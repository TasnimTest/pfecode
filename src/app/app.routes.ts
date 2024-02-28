import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';




export const routes: Routes = [
    //hetha mta3 page login doub mana3mou création mta3 page
{
    path: 'login',
    component: LoginComponent
},
{
    path: '',
    redirectTo:'login',
    pathMatch:'full'
},
//hetha bech net3adew l layout w dashboard
{
    path:'',
    component:LayoutComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        }
    ]
},
];
