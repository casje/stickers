import { Component, Input } from '@angular/core';

@Component({
    selector: 'orb-sticker',
    templateUrl: 'sticker.component.html',
    styleUrls: ['sticker.component.css']
})
export class StickerComponent {
    @Input() ident: number = 0;
    @Input() title: string = '';
    @Input() image: string = '';
    @Input() price: number = 0.00;
}