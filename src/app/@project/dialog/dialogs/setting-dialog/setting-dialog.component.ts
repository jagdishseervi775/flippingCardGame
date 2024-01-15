import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/@project/common/common.service';
import { cards } from 'src/app/layout/data/cardOptions';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.scss']
})
export class SettingDialogComponent {

  form!:FormGroup;
  cardsOptions = cards;
  constructor(
    @Inject(MAT_DIALOG_DATA) public _data:any,
    public _matDialogRef: MatDialogRef<SettingDialogComponent>,
    private _fb : FormBuilder,
    private _commonservice :CommonService
  ){

    // create form
    this.form = this._fb.group({
      cardCount : [this._commonservice.cardCount, Validators.required]
    })

  }

  onSubmit(){
    this._matDialogRef.close(this.form)
  }
}
