import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StickerComponent } from './sticker/sticker.component';

@NgModule({
    declarations: [
        StickerComponent
    ],
    exports: [
        StickerComponent
    ],
    imports: [
        BrowserModule
    ]
})
export class StickersModule {

}