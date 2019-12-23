import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: '0c8XePvRM1M', song: 'Janett Suhh (쟈넷 서) - Shadows on the Wall (He Is Psychometric OST Part 5) Lyrics (English)'},
    {id: 'a2RA0vsZXf8', song: '"Just A Dream" by Nelly - Sam Tsui & Christina Grimmie'},
    {id: 'jDELybyZ4oU', song: '"Heart Attack" - Demi Lovato (Sam Tsui & Chrissy Costanza of ATC)'},
    {id: 'cSLAO7zxS2M', song: '"Counting Stars" - OneRepublic (Alex Goot, Kurt Schneider, and Chrissy Costanza Cover)'},
    {id: '9wqpfFI3EVE', song: '"Beauty And A Beat" - Justin Bieber (Alex Goot, Kurt Schneider, and Chrissy Costanza Cover)'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
