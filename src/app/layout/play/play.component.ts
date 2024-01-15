import { Component } from '@angular/core';
import { imageData } from '../data/dataCollection';
import { CommonService } from 'src/app/@project/common/common.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})

export class PlayComponent {
  imageData:any = [];
  preObj:any;

  constructor(
    private _commonservice : CommonService
  ){
    // console.log("imageData", imageData);
    this.startGame();
  }


  startGame(){
    const halfCard = Number(this._commonservice.cardCount / 2);
    const shuffledArray = this.shuffleArray(imageData);
    let finalArray:any = shuffledArray.slice(0, halfCard);
    finalArray = [...finalArray, ...Object.create(finalArray)];
    const arrWithUniqueKey = this.addUniqueKey([...finalArray]);
    this.imageData = this.shuffleArray(arrWithUniqueKey);
  }


  addUniqueKey(arr:any) {
    const uniqueKeyGenerator = () => '_' + Math.random().toString(36).substr(2, 9);
    return arr.map((item:any) => ({
        ...item,
        uniqueKey: uniqueKeyGenerator()
    }));
  }


  shuffleArray(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }



  // game play logic
  onSelectCard(imageData:any){
    // this.imageData[i].isFlip = 1;
    console.log("imageData",imageData);
    this.flipCard(imageData);
    this.checkMatchingCard(imageData);
  }

  flipCard(imageData:any){
    imageData.isFlip = 1;
  }

  checkMatchingCard(imageData:any){
    if(!this.preObj){
      this.preObj = imageData;
    }else{
      if(this.preObj.id === imageData.id){
        setTimeout(() => {
          this.imageData.map((item:any) => item.id === imageData.id ? item.isMatched = 1 : null);
          this.preObj = null;
        }, 1000);
      }else{
        setTimeout(() => {
          console.log("else");
          this.imageData.map((item:any) =>{
            if(!item?.isMatched){
              item.isFlip = 0;
              this.preObj = null;
            }
          })
        }, 1000);
      }
    }
  }

  
  
}
