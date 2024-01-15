import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingDialogComponent } from './setting-dialog/setting-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SettingDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class DialogsModule { }
