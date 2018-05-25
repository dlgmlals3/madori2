import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NodePage } from '../node/node';
import { AngularPage } from '../angular/angular';
import { SnsPage } from '../sns/sns';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NodePage;
  tab3Root = AngularPage;
  tab4Root = SnsPage;

  constructor() {

  }
}
