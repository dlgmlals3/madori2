import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { NodePage } from '../pages/node/node';
import { AngularPage } from '../pages/angular/angular';
import { SnsPage } from '../pages/sns/sns';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CenterService } from '../services/CenterService';

import { HttpModule } from '@angular/http'; // for provider
import { FullMenuPage } from '../pages/fullMenu/fullMenu';
import { ProviderListPage } from '../pages/providerList/providerList';
import { RequestedRoomListPage } from '../pages/requestedRooms/requestedRoomList';
import { MyRoomPage } from '../pages/myRoom/myRoom';
import { FullMenuTabs } from '../pages/fullMenuTabs/fullMenuTabs';
import { ProviderService } from '../services/ProviderService';

@NgModule({
  declarations: [
    MyApp,
    NodePage,
    AngularPage,
    HomePage,
    SnsPage,
    FullMenuPage,
    ProviderListPage,
    RequestedRoomListPage,
    MyRoomPage,
    FullMenuTabs,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NodePage,
    AngularPage,
    HomePage,
    SnsPage,
    FullMenuPage,
    ProviderListPage,
    RequestedRoomListPage,
    MyRoomPage,
    FullMenuTabs,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CenterService,
    ProviderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
