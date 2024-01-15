import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CommonService } from 'src/app/@project/common/common.service';
import { SettingDialogComponent } from 'src/app/@project/dialog/dialogs/setting-dialog/setting-dialog.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  constructor(
    private _matDialog: MatDialog,
    private _commonservice : CommonService
  ){

  }

  public openSetting():void{
    const dialog = this._matDialog.open(SettingDialogComponent, {
      panelClass: ['commonDialogWrapper'],
      backdropClass: 'dialogBackdrop',
      width : '500px'
    })

    dialog.afterClosed().subscribe((res)=>{
      if(res){
        console.log("this is setting res", res.from.value);
        this._commonservice.cardCount = res.from.value.cardCount
      }
    })

  }
}
