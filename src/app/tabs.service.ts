import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getTabNameForId(tabId){ 
    return 'Tab ' + tabId;
  }
}
