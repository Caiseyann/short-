import { Component, OnInit } from '@angular/core';
import { StickerServiceService } from '../stickerservice/sticker-service.service';
import { Giphys } from '../giphys';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
sticker:Giphys[];
  constructor(public stickerService:StickerServiceService){}
  
  searchSticker(searchIt){
    this.stickerService.searchSticker(searchIt).then(
      (success)=>{
        this.sticker = this.stickerService.stickerArray;
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  ngOnInit() {
    this.searchSticker('laptop');
  }

}
