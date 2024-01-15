import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './layout/lobby/lobby.component';
import { PlayComponent } from './layout/play/play.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'game-lobby'},
  {
    path: 'game-lobby',
    component : LobbyComponent
  },
  {
    path: 'game-play',
    component : PlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
