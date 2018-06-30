import { Component } from '@angular/core';

import { ProviderListPage } from '../providerList/providerList';
import { MyRoomPage } from '../myRoom/myRoom';
import { RequestedRoomListPage } from '../requestedRooms/requestedRoomList';

@Component({
  templateUrl: 'fullMenuTabs.html'
})
export class FullMenuTabs {

  providerListTab = ProviderListPage;
  myRoomTab = MyRoomPage;
  requestedRoomListTab = RequestedRoomListPage;


  constructor() {

  }
}
