import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users : any[]=[];
  constructor(private http: HttpClient){
    this.loadUsers();
  }
  //fi west get n7ot adresse api 
  loadUsers(){
    this.http.get("GetAllUsers").subscribe((res:any)=>{
      this.users = res.date;
    })
  }
}
