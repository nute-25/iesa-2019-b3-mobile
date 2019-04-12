import { Component } from '@angular/core';
import { TabsService} from '../tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private tabNameService:TabsService) {

  }
}
