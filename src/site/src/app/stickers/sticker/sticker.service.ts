import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sticker } from './sticker';

const urlAPI = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class StickerService {

    http: HttpClient;

    // ou usar: constructor(private http: HttpClient) { }
    constructor(http: HttpClient) {
        this.http = http;
    }

    listFromStickers() {

        return this.http.get<Sticker[]>(urlAPI);
        /*
        const observable = this.http.get<Object[]>('http://localhost:3000');
        observable.subscribe(
            adesivos => {
                console.log(adesivos)
            },
            err => {
                console.log(err)
            }
        );
        */
    }
}