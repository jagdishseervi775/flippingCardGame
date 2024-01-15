import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby.component';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LobbyComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule
  ]
})
export class LobbyModule { }
