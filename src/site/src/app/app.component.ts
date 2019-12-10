import { Component } from '@angular/core';
import { StickerService } from './stickers/sticker/sticker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site';

  adesivos: Object[] = [];

  constructor(stickerService: StickerService) {

    const observable = stickerService.listFromStickers();

    observable.subscribe(
      adesivos => {
        this.adesivos = adesivos,
          console.log(adesivos)
      },
      err => {
        console.log(err)
      }
    );

  }
}
