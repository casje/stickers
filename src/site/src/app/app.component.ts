import { Component, OnInit } from '@angular/core';
import { StickerService } from './stickers/sticker/sticker.service';
import { Sticker } from './stickers/sticker/sticker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'site';

  adesivos: Sticker[] = [];

  constructor(private stickerService: StickerService) { }

  ngOnInit(): void {

    this.stickerService
      .listFromStickers()
      .subscribe(adesivos => this.adesivos = adesivos);

    /*
    const observable = this.stickerService.listFromStickers();
    observable.subscribe(
      adesivos => {
        this.adesivos = adesivos,
          console.log(adesivos),
          console.log('ident[0] => ' + this.adesivos[0].ident)
      },
      err => {
        console.log(err)
      }
    );
    */
  }
}
