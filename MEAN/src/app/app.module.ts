import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PlayersService } from './services/players.service';
import { FilterPipe } from './filter/filter.pipe';


import { AppComponent } from './app.component';
import { PlayerDashboardComponent } from './components/playerComponents/player_dashboard/player_dashboard.component';

import { IndexComponent } from './components/administrator/index/index.component';
import { AddComponent } from './components/administrator/add/add.component';
import { EditComponent } from './components/administrator/edit/edit.component';
import { AdminDashComponent } from './components/administrator/dashboard/admDash.component';
import { GamesComponent } from './components/administrator/games/games.component';
import { PlayersComponent } from './components/playerComponents/players/players.component';
import { JoinComponent } from './components/playerComponents/join/join.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//auth0
import {AuthService} from "./services/auth.service";



const routes: Routes=[
  {path: '',  component: PlayerDashboardComponent},
  {path: 'home',  component: PlayerDashboardComponent},
  {path: 'index', component: IndexComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'admin', component: AdminDashComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'games', component: GamesComponent},  
  {path: 'join/:id', component: JoinComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerDashboardComponent,
    IndexComponent,
    AddComponent,
    EditComponent,
    AdminDashComponent,
    GamesComponent,
    PlayersComponent,
    JoinComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlayersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
