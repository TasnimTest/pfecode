import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : Login;

  
  constructor(private http: HttpClient, private router : Router){
    this.loginObj = new Login();
  }


  onLogin(){
    debugger;
    this.http.post('http://localhost:4200/login', this.loginObj).subscribe((res:any)=> {
      if (res.result){
        alert('login Sucess');
        localStorage.setItem('loginTOken', res.data.token);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    })
  }
}

export class Login{
  Matricule : number;
  Password : string;
  constructor(){
    this.Matricule=1;
    this.Password="";
  }
}
