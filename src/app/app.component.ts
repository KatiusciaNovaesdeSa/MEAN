import { Component } from '@angular/core';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GAME LOBBY';
  constructor(public auth: AuthService){
    auth.handleAuthentication();
  }
}
