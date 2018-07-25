import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show:boolean = true;
  show2:boolean = true;
  show3:boolean=true;
 constructor(public auth:AuthService)
 {
  auth.handleAuthentication();
 }
 Collapse3()
 {
   this.show3= !this.show3;
 }
  Collapse2()
  {
    this.show2= !this.show2;
  }

  Collapse()
  {
    this.show = !this.show;
  }
}
