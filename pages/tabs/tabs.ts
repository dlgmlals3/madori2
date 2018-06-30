import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NodePage } from '../node/node';
import { AngularPage } from '../angular/angular';
import { SnsPage } from '../sns/sns';
import { FullMenuTabs } from '../fullMenuTabs/fullMenuTabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NodePage;
  tab3Root = AngularPage;
  tab4Root = SnsPage;
  tab5Root = FullMenuTabs;

  constructor() {

  }
}
