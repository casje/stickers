import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StickerComponent } from './sticker/sticker.component';

@NgModule({
    declarations: [
        StickerComponent
    ],
    exports: [
        StickerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ]
})
export class StickersModule {

}