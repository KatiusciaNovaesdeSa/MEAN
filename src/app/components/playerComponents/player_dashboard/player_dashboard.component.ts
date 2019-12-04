import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-player_dashboard',
  templateUrl: './player_dashboard.component.html',
  styleUrls: ['./player_dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  getIDKey(){
    let myItem = localStorage.getItem("email");
      if(myItem == "katiuscianovaes@gmail.com"){
        return true;
      }
    else return false;
  }

}
