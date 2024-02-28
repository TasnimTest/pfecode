import { Component } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router : Router){

  }
  //fi west url n7ot adresse api 
  logoff(){
    this.router.navigateByUrl('');
  }


}
